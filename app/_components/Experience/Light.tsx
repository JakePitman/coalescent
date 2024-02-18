import * as THREE from "three";
import { extend, ReactThreeFiber, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

type ShaderParams = any;
const ColorShiftMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
  // vertex shader
  /*glsl*/ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  /*glsl*/ `
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      gl_FragColor.rgba = vec4(1.0, 1.0, 1.0, sin(time * 5.0));
    }
  `
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      colorShiftMaterial: typeof shaderMaterial & ShaderParams;
    }
  }
}
extend({ ColorShiftMaterial });

type Props = {
  renderOrder: number;
  position?: [number, number, number];
};
export const Light = ({ renderOrder, position = [0, 0, 0] }: Props) => {
  const { clock } = useThree();
  return (
    <mesh position={position}>
      <sphereGeometry />
      <colorShiftMaterial color="green" transparent time={clock.elapsedTime} />
    </mesh>
  );
};
