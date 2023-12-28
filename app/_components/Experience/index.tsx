"use client";

import { Canvas } from "@react-three/fiber";

import { Coalescent } from "./Coalescent";
import { Spaceship } from "./Spaceship";
import { Dashboard } from "./Dashboard";

type Props = {
  style?: {};
};
export const Experience = ({ style }: Props) => {
  return (
    <Canvas camera={{ position: [0, 0, 20] }} style={{ ...style }}>
      <color args={["black"]} attach="background" />
      <ambientLight />
      <Spaceship />
      <Dashboard />
      <Coalescent />
    </Canvas>
  );
};
