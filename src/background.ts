import * as ColorUtil from './color_util';

const LUMINANCE_DARK_THRESHOLD = 60;
const LUMINANCE_BRIGHT_THRESHOLD = 140;
const LUMINANCE_STD_NOISY_THRESHOLD = 28;
const ACUTANCE_NOISY_THRESHOLD = 8;
const ACUTANCE_STD_NOISY_THRESHOLD = 6;

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {boolean} returnRawValues
 */
export function getCharacteristicsForArea(
  x: number,
  y: number,
  width: number,
  height: number,
  returnRawValues: boolean
) {
  let background = this._backgroundSource.getBackground(this._monitorIndex);
  let metaBackground = background.background;

  let areaIsNoisy, areaIsDark, areaIsBright;

  areaIsNoisy = false;
  areaIsDark = false;
  areaIsBright = false;

  // Always return false for animated backgrounds, we don't want to
  // do those calculations on every animation frame.
  if (background.isAnimated()) return [false];

  let {
    mean_luminance,
    luminance_variance,
    mean_acutance,
    acutance_variance,
  } = ColorUtil.get_background_color_information(metaBackground, x, y, width, height);

  let luminanceStd = Math.sqrt(luminance_variance);
  let acutanceStd = Math.sqrt(acutance_variance);

  if (mean_luminance < LUMINANCE_DARK_THRESHOLD) areaIsDark = true;
  else if (mean_luminance > LUMINANCE_BRIGHT_THRESHOLD) areaIsBright = true;

  if (
    mean_acutance > ACUTANCE_NOISY_THRESHOLD ||
    (mean_acutance * 4 > ACUTANCE_NOISY_THRESHOLD && acutanceStd > ACUTANCE_STD_NOISY_THRESHOLD) ||
    luminanceStd > LUMINANCE_STD_NOISY_THRESHOLD ||
    (areaIsDark && mean_luminance + luminanceStd > LUMINANCE_BRIGHT_THRESHOLD) ||
    (areaIsBright && mean_luminance - luminanceStd < LUMINANCE_DARK_THRESHOLD)
  )
    areaIsNoisy = true;

  if (returnRawValues)
    return [
      true,
      areaIsNoisy,
      areaIsDark,
      areaIsBright,
      mean_luminance,
      luminanceStd,
      mean_acutance,
      acutanceStd,
    ];
  else return [true, areaIsNoisy, areaIsDark, areaIsBright];
}
