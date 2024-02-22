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
      {/* TODO: Find an env map like this, without clear objects in the scene */}
      <Environment preset="sunset" background={false} blur={1} />
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
