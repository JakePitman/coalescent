/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/spaceship-model-glass.glb 
*/

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { ColorShiftMaterial } from "./Light";
import { useThree } from "@react-three/fiber";
import { MeshPhysicalMaterial } from "three";

const renderOrders = [
  "glass",
  "ship-base",
  "lightring-three",
  "ship-gray",
  "lightring-two",
  "ship-orange",
  "console-base-back",
  "console-gray-back",
  "console-base",
  "console-gray",
  "lightring-one",
  "console-black",
];

const glassMaterial = new MeshPhysicalMaterial({
  metalness: 0,
  depthTest: false,
  depthWrite: false,
  transmission: 1,
  thickness: 0,
  roughness: 0,
  envMapIntensity: 0.3,
});

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
        geometry={nodes.Cube029_11.geometry}
        material={glassMaterial}
        renderOrder={renderOrders.findIndex((el) => el === "glass")}
      />

      <mesh
        geometry={nodes.Cube029.geometry}
        material={materials["ship-base"]}
        renderOrder={renderOrders.findIndex((el) => el === "ship-base")}
      />
      <mesh
        geometry={nodes.Cube029_1.geometry}
        material={materials["ship-gray"]}
        renderOrder={renderOrders.findIndex((el) => el === "ship-gray")}
      />
      <mesh
        geometry={nodes.Cube029_2.geometry}
        material={materials["ship-orange"]}
        renderOrder={renderOrders.findIndex((el) => el === "ship-orange")}
      />
      <mesh
        geometry={nodes.Cube029_3.geometry}
        material={materials["lightring-two"]}
        renderOrder={renderOrders.findIndex((el) => el === "lightring-two")}
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
        geometry={nodes.Cube029_4.geometry}
        material={materials["lightring-three"]}
        renderOrder={renderOrders.findIndex((el) => el === "lightring-three")}
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
        geometry={nodes.Cube029_5.geometry}
        material={materials["console-base"]}
        renderOrder={renderOrders.findIndex((el) => el === "console-base")}
      />
      <mesh
        geometry={nodes.Cube029_6.geometry}
        material={materials["console-black"]}
        renderOrder={renderOrders.findIndex((el) => el === "console-black")}
      />
      <mesh
        geometry={nodes.Cube029_7.geometry}
        material={materials["console-gray"]}
        renderOrder={renderOrders.findIndex((el) => el === "console-gray")}
      />
      <mesh
        geometry={nodes.Cube029_8.geometry}
        material={materials["console-base-back"]}
        renderOrder={renderOrders.findIndex((el) => el === "console-base-back")}
      />
      <mesh
        geometry={nodes.Cube029_9.geometry}
        material={materials["console-gray-back"]}
        renderOrder={renderOrders.findIndex((el) => el === "console-gray-back")}
      />
      <mesh
        geometry={nodes.Cube029_10.geometry}
        material={materials["lightring-one"]}
        renderOrder={renderOrders.findIndex((el) => el === "lightring-one")}
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
    </group>
  );
}

useGLTF.preload("/spaceship-model.glb");
