"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import { Coalescent } from "./Coalescent";
import { Spaceship } from "./Spaceship";

import { initialCameraPosition } from "@sharedData/index";

type Props = {
  style?: {};
};
export const Experience = ({ style }: Props) => {
  return (
    <Canvas camera={{ position: initialCameraPosition }} style={{ ...style }}>
      <Environment preset="sunset" blur={0} resolution={256} />
      <ambientLight />
      <Spaceship />
      <Coalescent />
      <mesh position={[0, 0, -50]}>
        <boxGeometry args={[500, 500, 1]} />
        <meshStandardMaterial color={"black"} />
      </mesh>
    </Canvas>
  );
};
