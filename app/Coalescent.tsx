import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export const Coalescent = () => {
  const { nodes } = useGLTF("/horizontal.glb");
  const children = nodes.Scene.children;
  const positions = children.map((child) => child.position);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshNormalMaterial();
  const mesh = new THREE.InstancedMesh(geometry, material, 3);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < 3; i++) {
    dummy.position.x = Math.random();
    dummy.position.y = Math.random();
    dummy.position.z = Math.random();

    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  return <primitive object={mesh} />;
};
