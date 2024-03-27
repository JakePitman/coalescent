"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { suspend } from "suspend-react";
const sunset = import("@pmndrs/assets/hdri/sky.exr").then(
  (module) => module.default
);

import { Coalescent } from "./Coalescent";
import { Spaceship } from "./Spaceship";
import { Dashboard } from "./Dashboard";

import { initialCameraPosition } from "@sharedData/index";

type Props = {
  style?: {};
};
export const Experience = ({ style }: Props) => {
  return (
    <Canvas camera={{ position: initialCameraPosition }} style={{ ...style }}>
      <Environment
        files={suspend(sunset) as string}
        blur={1}
        resolution={256}
      />
      <ambientLight />
      <Spaceship />
      <Coalescent />
      <Dashboard />
      {/* This forms a backdrop that is necessary for the glass material's transmission property to work.
      `transmission` has no effect when there is nothing behind the object, and renders grey, even if a background color is set on the Canvas */}
      <mesh position={[0, 0, -50]}>
        <boxGeometry args={[500, 500, 1]} />
        <meshStandardMaterial color={"black"} />
      </mesh>
    </Canvas>
  );
};
