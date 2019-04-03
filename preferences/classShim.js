/* exported registerClass */

const { lang: Lang } = imports;

const { GObject } = imports.gi;

export default function registerClass(...args) {
  if (typeof GObject.registerClass === 'function') {
    return GObject.registerClass(...args);
  }

  let meta = {};
  let [klass] = args;

  if (args.length > 1) {
    [, klass] = args;

    meta = { ...args[0] };
  }

  meta.Name = `shim__${klass.name}`;
  meta.Extends = Object.getPrototypeOf(klass);

  Object.getOwnPropertyNames(klass.prototype).forEach((nm) => {
    meta[nm] = klass.prototype[nm];
  });

  delete meta.constructor;

  const Klass = new Lang.Class(meta);

  return Klass;
}
