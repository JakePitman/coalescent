import React, { useState, useCallback } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { vertical, horizontal } from "./positions";

export const Coalescent = () => {
  const [positionSet, setPositionSet] =
    useState<keyof typeof positionSetMap>("horizontal");

  const { nodes } = useGLTF("/horizontal.glb");
  const children = nodes.Scene.children;
  const positions = children.map((child) => child.position);

  // This needs to be the same as the amount of positions
  // Each position set must have exactly this many positions
  const cubesCount = 3;
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshNormalMaterial();
  const mesh = new THREE.InstancedMesh(geometry, material, cubesCount);
  const dummies = [...new Array(cubesCount)].map(() => new THREE.Object3D());

  const positionSetMap = {
    horizontal,
    vertical,
  };

  function lerp(x: number, y: number, a: number) {
    const r = (1 - a) * x + a * y;
    return Math.abs(x - y) < 0.001 ? y : r;
  }
  useFrame(() => {
    positionSetMap[positionSet].forEach((coordinateSet, i) => {
      const dummy = dummies[i];
      dummy.position.x = lerp(dummy.position.x, coordinateSet.x, 0.025);
      dummy.position.y = lerp(dummy.position.y, coordinateSet.y, 0.025);
      dummy.position.z = lerp(dummy.position.z, coordinateSet.z, 0.025);

      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
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
