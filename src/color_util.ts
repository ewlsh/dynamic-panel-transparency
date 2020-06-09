import type { Pixbuf } from 'gdkpixbuf';

const SATURATION_WEIGHT = 1.5;
const WEIGHT_THRESHOLD = 1.0;

const { GdkPixbuf } = imports.gi;

let id = -1;

/**
 * @param {number} [monitorIndex]
 * @param {(info: { mean_luminance: number; luminance_variance: number; mean_acutance: number; acutance_variance: number; }) => void} infoCallback
 */
export function getBackgroundColorInfo(
  monitorIndex = 0,
  infoCallback: (info: {
    mean_luminance: number;
    luminance_variance: number;
    mean_acutance: number;
    acutance_variance: number;
  }) => void
) {
  log('getting info...');
  const cache = imports.ui.background.getBackgroundCache();
  const source = cache.getBackgroundSource(
    imports.ui.main.layoutManager,
    imports.ui.background.BACKGROUND_SCHEMA
  );

  let background = source.getBackground(monitorIndex);

  if (id > -1) {
    background.disconnect(id);
  }

  function analyze() {
    log('analyzing...');
    const file = background._file;

    if (file) {
      log(`file: ${file.get_path()}`);
      let background = GdkPixbuf.Pixbuf.new_from_file(file.get_path());
      log('loaded image');
      let monitor = imports.ui.main.layoutManager.monitors[monitorIndex];
      log(`area: ${30} x ${monitor.width}`);
      infoCallback(get_background_color_information(background, 0, 0, 30, monitor.width));
    } else {
      log(file);

      infoCallback(null);
    }
  }

  function handler() {
    log('changed!');
    if (id > -1) {
      background.disconnect(id);
    }

    background = source.getBackground(monitorIndex);

    id = background.connect('bg-changed', handler);

    analyze();
  }

  id = background.connect('bg-changed', handler);

  log('backgrounded:');
  log(`${Object.keys(background)}`);
  analyze();
}

/**
 * @param {*} source
 * @param {number} reference_x
 * @param {number} reference_y
 * @param {number} reference_height
 * @param {number} reference_width
 */
export function get_background_color_information(
  source: Pixbuf,
  reference_x: number,
  reference_y: number,
  reference_height: number,
  reference_width: number
) {
  let bg_actor_width = Math.floor(source.get_width());
  let bg_actor_height = Math.floor(source.get_height());

  // A commit in mutter added some padding to offscreen textures, so we
  // need to avoid looking at the edges of the texture as it often has a
  // black border. The commit specifies that up to 1.75px around each side
  // could now be padding, so cut off 2px from left and top if necessary
  // (https://gitlab.gnome.org/GNOME/mutter/commit/8655bc5d8de6a969e0ca83eff8e450f62d28fbee)
  let x_start = reference_x;
  if (x_start < 2) {
    x_start = 2;
  }

  let y_start = reference_y;
  if (y_start < 2) {
    y_start = 2;
  }

  // For the same reason as above, we need to not use the bottom and right
  // 2px of the texture. However, if the caller has specified an area of
  // interest that already misses these parts, use that instead, otherwise
  // chop 2px

  const width = Math.min(bg_actor_width - 2 - reference_x, reference_width);
  const height = Math.min(bg_actor_height - 2 - reference_y, reference_height);

  if (x_start > bg_actor_width || y_start > bg_actor_height || width <= 0 || height <= 0) {
    throw new Error(`Invalid rectangle specified: ${x_start}, ${y_start}, ${width}, ${height}`);
  }

  let mean_acutance = 0,
    mean_luminance = 0,
    r_total = 0,
    g_total = 0,
    b_total = 0;

  let pixel_lums = new Float64Array((x_start + width + 1) * (y_start + height + 1));

  let pixels = source.get_pixels();

  log('got pixels!');
  const size = width * height;

  let mean_squares = 0;
  let pixel = 0;

  let max,
    min,
    score,
    delta,
    score_total = 0,
    r_total2 = 0,
    g_total2 = 0,
    b_total2 = 0;

  /*
   * code to calculate weighted average color is copied from
   * plank's lib/Drawing/DrawingService.vala average_color()
   * http://bazaar.launchpad.net/~docky-core/plank/trunk/view/head:/lib/Drawing/DrawingService.vala
   */
  for (let y = y_start; y < y_start + height; y++) {
    for (let x = x_start; x < x_start + width; x++) {
      const i = y * width * 4 + x * 4;

      let b = pixels[i];
      let g = pixels[i + 1];
      let r = pixels[i + 2];

      pixel = 0.3 * r + 0.59 * g + 0.11 * b;

      pixel_lums[y * width + x] = pixel;

      min = Math.min(r, Math.min(g, b));
      max = Math.max(r, Math.max(g, b));

      delta = max - min;

      /* prefer colored pixels over shades of grey */
      score = SATURATION_WEIGHT * (delta == 0 ? 0.0 : delta / max);

      r_total += score * r;
      g_total += score * g;
      b_total += score * b;
      score_total += score;

      r_total += r;
      g_total += g;
      b_total += b;

      mean_luminance += pixel;
      mean_squares += pixel * pixel;
    }
  }

  for (let y = y_start + 1; y < y_start + height - 1; y++) {
    for (let x = x_start + 1; x < x_start + width - 1; x++) {
      let acutance =
        pixel_lums[y * width + x] * 4 -
        (pixel_lums[y * width + x - 1] +
          pixel_lums[y * width + x + 1] +
          pixel_lums[(y - 1) * width + x] +
          pixel_lums[(y + 1) * width + x]);

      mean_acutance += acutance > 0 ? acutance : -acutance;
    }
  }

  score_total /= size;
  b_total /= size;
  g_total /= size;
  r_total /= size;

  if (score_total > 0.0) {
    b_total /= score_total;
    g_total /= score_total;
    r_total /= score_total;
  }

  b_total2 /= size * 255;
  g_total2 /= size * 255;
  r_total2 /= size * 255;

  /*
   * combine weighted and not weighted sum depending on the average "saturation"
   * if saturation isn't reasonable enough
   * s = 0.0 -> f = 0.0 ; s = WEIGHT_THRESHOLD -> f = 1.0
   */
  if (score_total <= WEIGHT_THRESHOLD) {
    let f = (1.0 / WEIGHT_THRESHOLD) * score_total;
    let rf = 1.0 - f;

    b_total = b_total * f + b_total2 * rf;
    g_total = g_total * f + g_total2 * rf;
    r_total = r_total * f + r_total2 * rf;
  }

  /* there shouldn't be values larger then 1.0 */
  let max_val = Math.max(r_total, Math.max(g_total, b_total));

  if (max_val > 1.0) {
    b_total /= max_val;
    g_total /= max_val;
    r_total /= max_val;
  }

  mean_luminance /= size;
  mean_squares = mean_squares / size;

  let luminance_variance = mean_squares - mean_luminance * mean_luminance;
  let acutance_variance = mean_squares - mean_acutance * mean_acutance;

  mean_acutance /= (width - 2) * (height - 2);
  log('calculated');
  return { mean_luminance, luminance_variance, mean_acutance, acutance_variance };
}
