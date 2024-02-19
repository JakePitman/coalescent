/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/spaceship-model-glass.glb 
*/

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { ColorShiftMaterial } from "./Light";
import { useThree } from "@react-three/fiber";

const renderOrders = [
  "glass",
  "ship-base",
  "lightring",
  "ship-gray",
  "ship-orange",
  "console-base-back",
  "console-gray-back",
  "console-base",
  "console-gray",
  "lightring-console",
  "console-black",
];

export function Model(props) {
  const { nodes, materials } = useGLTF("/spaceship-model.glb");
  useEffect(() => {
    Object.keys(materials).forEach((key) => {
      materials[key].depthTest = false;
      materials[key].depthWrite = false;
      materials[key].needsUpdate = true;
    });
  }, [materials]);
  const { clock } = useThree();

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube024_10.geometry}
        renderOrder={renderOrders.findIndex((el) => el === "glass")}
      >
        <meshStandardMaterial
          transparent
          opacity={0.15}
          depthTest={false}
          depthWrite={false}
        />
      </mesh>
      <mesh
        geometry={nodes.Cube024.geometry}
        material={materials["console-base"]}
        renderOrder={renderOrders.findIndex((el) => el === "console-base")}
      />
      <mesh
        geometry={nodes.Cube024_1.geometry}
        material={materials["console-black"]}
        renderOrder={renderOrders.findIndex((el) => el === "console-black")}
      />
      <mesh
        geometry={nodes.Cube024_2.geometry}
        material={materials["console-gray"]}
        renderOrder={renderOrders.findIndex((el) => el === "console-gray")}
      />
      <mesh
        geometry={nodes.Cube024_3.geometry}
        material={materials["console-base-back"]}
        renderOrder={renderOrders.findIndex((el) => el === "console-base-back")}
      />
      <mesh
        geometry={nodes.Cube024_4.geometry}
        material={materials["console-gray-back"]}
        renderOrder={renderOrders.findIndex((el) => el === "console-gray-back")}
      />
      <mesh
        geometry={nodes.Cube024_5.geometry}
        renderOrder={renderOrders.findIndex((el) => el === "lightring")}
      >
        <colorShiftMaterial
          emissive={[1, 1, 1]}
          emissiveIntensity={30}
          color="green"
          time={clock.elapsedTime}
          speed={1.0}
          depthWrite={false}
          depthTest={false}
        />
      </mesh>
      <mesh
        geometry={nodes.Cube024_6.geometry}
        renderOrder={renderOrders.findIndex((el) => el === "lightring-console")}
      >
        <colorShiftMaterial
          emissive={[1, 1, 1]}
          emissiveIntensity={30}
          color="green"
          time={clock.elapsedTime}
          speed={1.0}
          depthWrite={false}
          depthTest={false}
        />
      </mesh>
      <mesh
        geometry={nodes.Cube024_7.geometry}
        material={materials["ship-base"]}
        renderOrder={renderOrders.findIndex((el) => el === "ship-base")}
      />
      <mesh
        geometry={nodes.Cube024_8.geometry}
        material={materials["ship-gray"]}
        renderOrder={renderOrders.findIndex((el) => el === "ship-gray")}
      />
      <mesh
        geometry={nodes.Cube024_9.geometry}
        material={materials["ship-orange"]}
        renderOrder={renderOrders.findIndex((el) => el === "ship-orange")}
      />
    </group>
  );
}

useGLTF.preload("/spaceship-model.glb");
