import type * as st from 'st';

const { St } = imports.gi;

/**
 * @param obj
 */
export function getActorOf<T extends st.Widget>(obj: { actor: T } | T) {
  if (obj instanceof St.Widget) {
    return obj;
  }

  return obj.actor;
}
