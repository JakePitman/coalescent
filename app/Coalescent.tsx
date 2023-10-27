import React, { useState, useEffect, useMemo } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { vertical, horizontal } from "./positions";

const positionSetMap = {
  horizontal,
  vertical,
};

type PositionSetName = keyof typeof positionSetMap;
type ButtonProps = {
  positionSetName: PositionSetName;
  setPositionSet: React.Dispatch<React.SetStateAction<PositionSetName>>;
  isActive: boolean;
  children: React.ReactNode;
};
const Button = ({
  positionSetName,
  setPositionSet,
  isActive,
  children,
}: ButtonProps) => {
  const activeStyles = "text-black bg-purple-300";
  const inactiveStyles = "text-purple-300";
  return (
    <button
      onClick={() => setPositionSet(positionSetName)}
      className={
        "px-5 m-5 rounded-md border-2 border-purple-300 border-solid " +
        (isActive ? activeStyles : inactiveStyles)
      }
    >
      {children}
    </button>
  );
};

export const Coalescent = () => {
  const [positionSet, setPositionSet] =
    useState<keyof typeof positionSetMap>("horizontal");

  // This needs to be the same as the amount of positions
  // Each position set must have exactly this many positions
  const cubesCount = 3;
  const mesh = useMemo(() => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshNormalMaterial();
    return new THREE.InstancedMesh(geometry, material, cubesCount);
  }, []);
  const dummies = useMemo(
    () => [...new Array(cubesCount)].map(() => new THREE.Object3D()),
    []
  );

  // Like Math.lerp, but stops when difference between x and y is less than 0.001
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
        <div className="flex absolute bottom-28 justify-center w-full">
          <Button
            positionSetName="horizontal"
            setPositionSet={setPositionSet}
            isActive={true}
          >
            Horizontal
          </Button>
          <Button
            positionSetName="vertical"
            setPositionSet={setPositionSet}
            isActive={false}
          >
            Vertical
          </Button>
        </div>
      </Html>
      <primitive object={mesh} />
    </>
  );
};
