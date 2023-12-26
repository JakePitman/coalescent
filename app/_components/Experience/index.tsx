"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Coalescent } from "./Coalescent";

type Props = {
  style?: {};
};
export const Experience = ({ style }: Props) => {
  return (
    <Canvas camera={{ position: [0, 0, 20] }} style={{ ...style }}>
      <color args={["black"]} attach="background" />
      <OrbitControls />
      <ambientLight />

      <Coalescent />
    </Canvas>
  );
};
