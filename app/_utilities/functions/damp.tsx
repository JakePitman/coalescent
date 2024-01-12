import { Euler, Vector3 } from "three";
import { damp3 as maathDamp3, dampE as maathDampE } from "maath/easing";

// End of animation precision. Smaller number means less jitters
const eps = 0.0001;
// This is just the default provided by maath, needs to be inserted
// manually in order to get to the eps parameter
const easingFunction = (t: number) =>
  1 / (1 + t + 0.48 * t * t + 0.235 * t * t * t);

export const damp3 = (
  current: Vector3,
  target: Vector3 | [x: number, y: number, z: number],
  smoothTime: number,
  delta: number
) =>
  maathDamp3(current, target, smoothTime, delta, Infinity, easingFunction, eps);

export const dampE = (
  current: Euler,
  target: Euler | [x: number, y: number, z: number],
  smoothTime: number,
  delta: number
) =>
  maathDampE(current, target, smoothTime, delta, Infinity, easingFunction, eps);
