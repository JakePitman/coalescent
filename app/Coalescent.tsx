import React, { useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { vertical, horizontal } from "./positions";

export const Coalescent = () => {
  const [positionSet, setPositionSet] =
    useState<keyof typeof positionSetMap>("horizontal");

  const { nodes } = useGLTF("/horizontal.glb");
  const children = nodes.Scene.children;
  const positions = children.map((child) => child.position);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshNormalMaterial();
  const mesh = new THREE.InstancedMesh(geometry, material, 3);
  const dummy = new THREE.Object3D();

  const positionSetMap = {
    horizontal,
    vertical,
  };

  // TODO: Find a way to transition with animation
  // Maybe put this in a useFrame, and lerp on each frame
  positionSetMap[positionSet].forEach((coordinateSet, i) => {
    dummy.position.x = coordinateSet.x;
    dummy.position.y = coordinateSet.y;
    dummy.position.z = coordinateSet.z;

    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  });

  return (
    <>
      <Html fullscreen>
        <button onClick={() => setPositionSet("horizontal")}>Horizontal</button>
        <button onClick={() => setPositionSet("vertical")}>Vertical</button>
      </Html>
      <primitive object={mesh} />
    </>
  );
};
