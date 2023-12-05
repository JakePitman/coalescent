"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Coalescent } from "./Coalescent";

export const Experience = () => {
  return (
    <Canvas camera={{ position: [2, 2, 2] }} style={{ position: "absolute" }}>
      <color args={["black"]} attach="background" />
      <OrbitControls />
      <ambientLight />

      <Coalescent />
    </Canvas>
  );
};
