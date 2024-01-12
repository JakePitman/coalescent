import { Euler } from "three";
import { dampE as maathDampE } from "maath/easing";

export const dampE = (
  current: Euler,
  target: Euler | [x: number, y: number, z: number],
  smoothTime: number,
  delta: number
) =>
  maathDampE(
    current,
    target,
    smoothTime,
    delta,
    Infinity,
    (t) => 1 / (1 + t + 0.48 * t * t + 0.235 * t * t * t),
    0.0001
  );
