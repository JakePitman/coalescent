"use client";

import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
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
      <color args={["black"]} attach="background" />
      <ambientLight />
      <Spaceship />
      <Coalescent />
    </Canvas>
  );
};
