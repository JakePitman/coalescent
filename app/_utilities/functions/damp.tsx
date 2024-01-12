import { Euler, Vector3 } from "three";
import { damp3 as maathDamp3, dampE as maathDampE } from "maath/easing";

export const damp3 = (
  current: Vector3,
  target: Vector3 | [x: number, y: number, z: number],
  smoothTime: number,
  delta: number
) =>
  maathDamp3(
    current,
    target,
    smoothTime,
    delta,
    Infinity,
    (t) => 1 / (1 + t + 0.48 * t * t + 0.235 * t * t * t),
    0.0001
  );

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
