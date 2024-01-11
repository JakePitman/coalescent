// Like Math.lerp, but stops when difference between x and y is less than 0.001
export function lerpAndStop(x: number, y: number, a: number) {
  const r = (1 - a) * x + a * y;
  return Math.abs(x - y) < 0.001 ? y : r;
}
