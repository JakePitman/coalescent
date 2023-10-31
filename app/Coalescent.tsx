import React, { useState, useEffect, useMemo } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { vertical, horizontal } from "./positions";
import { jakePositions } from "./jakePositions";

const positionSetMap = {
  jake: jakePositions,
  vertical,
  horizontal,
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
  // -- Get
  //const { nodes } = useGLTF("pixel-jake.glb");
  //const positions = nodes.Scene.children.map((child) => child.position);
  //console.log(positions);
  // --

  const positionsAsArray = Object.keys(positionSetMap).map(
    (key) => positionSetMap[key as keyof typeof positionSetMap]
  );
  const highestNumberOfPositions = positionsAsArray.reduce(
    (accumulator, currentValue) =>
      currentValue.length > accumulator ? currentValue.length : accumulator,
    0
  );

  const [positionSet, setPositionSet] =
    useState<keyof typeof positionSetMap>("jake");

  // This needs to be the same as the amount of positions
  // Each position set must have exactly this many positions
  const cubesCount = highestNumberOfPositions;
  const mesh = useMemo(() => {
    const geometry = new THREE.BoxGeometry(0.03, 0.03, 0.03);
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
  useFrame((_state, delta) => {
    //positionSetMap[positionSet].forEach((coordinateSet, i) => {
    [...new Array(highestNumberOfPositions)].forEach((_, i) => {
      const dummy = dummies[i];
      const coordinateSet = positionSetMap[positionSet][i];
      if (coordinateSet) {
        dummy.position.x = lerp(dummy.position.x, coordinateSet.x, 0.025);
        dummy.position.y = lerp(dummy.position.y, coordinateSet.y, 0.025);
        dummy.position.z = lerp(dummy.position.z, coordinateSet.z, 0.025);
      } else {
        // TODO:
        // Create another 'scattered' position set for extra positions.
        // Use i % NUMBER_OF_SCATTERED_POSITIONS to index a scattered position.
        // eg. if there are 15 scattered positions, then scatteredPositions[i % scatteredPositions.length]
        // should always index the same position according to i.
        dummy.position.x = lerp(dummy.position.x, 0, 0.025);
        dummy.position.y = lerp(dummy.position.y, 0, 0.025);
        dummy.position.z = lerp(dummy.position.z, 0, 0.025);
      }
      dummy.rotation.x += delta * 0.6;
      dummy.rotation.y += delta * 0.5;
      dummy.rotation.z += delta * 0.4;

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
            positionSetName="jake"
            setPositionSet={setPositionSet}
            isActive={positionSet === "jake"}
          >
            Jake
          </Button>
          <Button
            positionSetName="horizontal"
            setPositionSet={setPositionSet}
            isActive={positionSet === "horizontal"}
          >
            Horizontal
          </Button>
          <Button
            positionSetName="vertical"
            setPositionSet={setPositionSet}
            isActive={positionSet === "vertical"}
          >
            Vertical
          </Button>
        </div>
      </Html>
      <primitive object={mesh} />
    </>
  );
};
