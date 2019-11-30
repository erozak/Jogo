import clamp from 'lodash/clamp';
import defaultTo from 'lodash/defaultTo';

export default function alphaValue(
  value?: number,
  defaultValue: number = 0,
): number {
  return clamp(defaultTo(value, defaultValue), 0, 1);
}
