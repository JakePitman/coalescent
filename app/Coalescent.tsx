import React, { useState, useEffect, useMemo } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { vertical, horizontal } from "./positions/positions";
import { jakePositions } from "./positions/jakePositions";
import { whaleAndDiversPositions } from "./positions/whaleAndDiversPositions";
import { scatteredPositions } from "./positions/scatteredPositions";

const positionSetMap = {
  jake: { pixelPositions: jakePositions, cameraPosition: [-13, -1, 8] },
  whale: {
    pixelPositions: whaleAndDiversPositions,
    cameraPosition: [-7, 11, -8],
  },
  vertical: { pixelPositions: vertical, cameraPosition: [0, 0, 0] },
  horizontal: { pixelPositions: horizontal, cameraPosition: [0, 0, 0] },
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
  // -- Get positions
  //function shuffle(array) {
  //for (let i = array.length - 1; i > 0; i--) {
  //let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  //[array[i], array[j]] = [array[j], array[i]];
  //}
  //}
  //const { nodes } = useGLTF("scattered.glb");
  //const positions = nodes.Scene.children.map((child) => child.position);
  //shuffle(positions);
  //console.log(positions);
  // --

  const positionsAsArray = Object.keys(positionSetMap).map(
    (key) => positionSetMap[key as keyof typeof positionSetMap].pixelPositions
  );
  const highestNumberOfPositions = positionsAsArray.reduce(
    (accumulator, currentValue) =>
      currentValue.length > accumulator ? currentValue.length : accumulator,
    0
  );

  const [positionSet, setPositionSet] =
    useState<keyof typeof positionSetMap>("whale");

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
  useFrame((state, delta) => {
    // Update pixel positions
    [...new Array(highestNumberOfPositions)].forEach((_, i) => {
      const dummy = dummies[i];
      const coordinateSet = positionSetMap[positionSet].pixelPositions[i];
      if (coordinateSet) {
        dummy.position.x = lerp(dummy.position.x, coordinateSet.x, 0.025);
        dummy.position.y = lerp(dummy.position.y, coordinateSet.y, 0.025);
        dummy.position.z = lerp(dummy.position.z, coordinateSet.z, 0.025);
      } else {
        const numberOfTimesLengthFitsIni = Math.floor(
          i / scatteredPositions.length
        );
        const indexWithinScattered =
          i - scatteredPositions.length * numberOfTimesLengthFitsIni;
        const { x, y, z } = scatteredPositions[indexWithinScattered];
        dummy.position.x = lerp(dummy.position.x, x, 0.005);
        dummy.position.y = lerp(dummy.position.y, y, 0.005);
        dummy.position.z = lerp(dummy.position.z, z, 0.005);
      }
      dummy.rotation.x += delta * 0.6;
      dummy.rotation.y += delta * 0.5;
      dummy.rotation.z += delta * 0.4;

      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;

    // Update camera position
    state.camera.position.x = lerp(
      state.camera.position.x,
      positionSetMap[positionSet].cameraPosition[0],
      0.01
    );
    state.camera.position.y = lerp(
      state.camera.position.y,
      positionSetMap[positionSet].cameraPosition[1],
      0.01
    );
    state.camera.position.z = lerp(
      state.camera.position.z,
      positionSetMap[positionSet].cameraPosition[2],
      0.01
    );
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
            positionSetName="whale"
            setPositionSet={setPositionSet}
            isActive={positionSet === "whale"}
          >
            Whale
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
