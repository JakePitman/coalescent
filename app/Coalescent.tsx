import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { vertical, horizontal } from "./positions";

export const Coalescent = () => {
  const { nodes } = useGLTF("/horizontal.glb");
  const children = nodes.Scene.children;
  const positions = children.map((child) => child.position);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshNormalMaterial();
  const mesh = new THREE.InstancedMesh(geometry, material, 3);
  const dummy = new THREE.Object3D();

  // TODO: Control with state
  const coordinates = horizontal;

  // TODO: Find a way to transition with animation
  // Maybe put this in a useFrame, and lerp on each frame
  coordinates.forEach((coordinateSet, i) => {
    dummy.position.x = coordinateSet.x;
    dummy.position.y = coordinateSet.y;
    dummy.position.z = coordinateSet.z;

    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  });

  return <primitive object={mesh} />;
};
