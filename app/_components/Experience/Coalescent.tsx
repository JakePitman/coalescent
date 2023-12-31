import React, { useState, useMemo, useEffect, useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  scatteredPositions,
  jakePositions,
  whaleAndDiversPositions,
  projectsPositions,
  skillsPositions,
  contactMePositions,
  blogPositions,
} from "./positions";
import { useMouseCameraOffset } from "@hooks/useMouseCameraOffset";
import { usePageContext } from "@contexts/pageContext";
import { mobileBreakPoint } from "@sharedData/index";

const xOffsetReducer = 0.05;
const positionSetMap = {
  "/": { pixelPositions: [], rotation: [0, 2, 0] },
  "/jake": { pixelPositions: jakePositions, rotation: [-0.1, 1.0, 0.06] },
  "/interests": {
    pixelPositions: whaleAndDiversPositions,
    rotation: [0.9, -0.5, 0.06],
  },
  "/projects": {
    pixelPositions: projectsPositions,
    rotation: [0.3, +xOffsetReducer, 0],
  },
  "/blog": {
    pixelPositions: blogPositions,
    rotation: [1, +xOffsetReducer, 0],
  },
  "/contact": {
    pixelPositions: contactMePositions,
    rotation: [0.6, 0.3, 0],
  },
};

export const Coalescent = () => {
  //-- Get positions. Run this on a glb file to extract and randomize the position set
  //function shuffle(array) {
  //for (let i = array.length - 1; i > 0; i--) {
  //let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  //[array[i], array[j]] = [array[j], array[i]];
  //}
  //}
  //const { nodes } = useGLTF("blog.glb");
  //const positions = nodes.Scene.children.map((child) => child.position);
  //shuffle(positions);
  //console.log(positions);
  // --

  const coalescentRef = useRef<THREE.Mesh>();
  const { page: pageFromContext } = usePageContext();
  const page = pageFromContext ? pageFromContext : "/"; // Default to the scattered position

  // Track mouse location
  const mouseCameraOffset = useMouseCameraOffset();

  const positionsAsArray = Object.keys(positionSetMap).map(
    (key) => positionSetMap[key as keyof typeof positionSetMap].pixelPositions
  );
  const highestNumberOfPositions = positionsAsArray.reduce(
    (accumulator, currentValue) =>
      currentValue.length > accumulator ? currentValue.length : accumulator,
    0
  );

  const cubesCount = highestNumberOfPositions;
  const mesh = useMemo(() => {
    const geometry = new THREE.BoxGeometry(0.03, 0.03, 0.03);
    const material = new THREE.MeshNormalMaterial();
    return new THREE.InstancedMesh(geometry, material, cubesCount);
  }, [cubesCount]);
  const dummies = useMemo(
    () => [...new Array(cubesCount)].map(() => new THREE.Object3D()),
    [cubesCount]
  );

  // Like Math.lerp, but stops when difference between x and y is less than 0.001
  function lerp(x: number, y: number, a: number) {
    const r = (1 - a) * x + a * y;
    return Math.abs(x - y) < 0.001 ? y : r;
  }
  const positionSetLerpSpeed = 0.045;
  const scatteredPositionLerpSpeed = 0.005;
  const rotationLerpSpeed = 0.015;
  useFrame((state, delta) => {
    // Update pixel positions
    [...new Array(highestNumberOfPositions)].forEach((_, i) => {
      const dummy = dummies[i];
      const coordinateSet = positionSetMap[page].pixelPositions[i]; // xyz
      if (coordinateSet) {
        dummy.position.x = lerp(
          dummy.position.x,
          coordinateSet.x,
          positionSetLerpSpeed
        );
        dummy.position.y = lerp(
          dummy.position.y,
          coordinateSet.y,
          positionSetLerpSpeed
        );
        dummy.position.z = lerp(
          dummy.position.z,
          coordinateSet.z,
          positionSetLerpSpeed
        );
      } else {
        // Move to random scattered position if no positions left in current positionSet
        const numberOfTimesLengthFitsIni = Math.floor(
          i / scatteredPositions.length
        );
        const indexWithinScattered =
          i - scatteredPositions.length * numberOfTimesLengthFitsIni;
        const { x, y, z } = scatteredPositions[indexWithinScattered];
        dummy.position.x = lerp(
          dummy.position.x,
          x,
          scatteredPositionLerpSpeed
        );
        dummy.position.y = lerp(
          dummy.position.y,
          y,
          scatteredPositionLerpSpeed
        );
        dummy.position.z = lerp(
          dummy.position.z,
          z,
          scatteredPositionLerpSpeed
        );
      }
      dummy.rotation.x += delta * 0.6;
      dummy.rotation.y += delta * 0.5;
      dummy.rotation.z += delta * 0.4;

      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;

    // Rotate coalescentRef
    if (coalescentRef.current) {
      const xRotationAfterLerp = lerp(
        coalescentRef.current.rotation.x,
        positionSetMap[page].rotation[0] - mouseCameraOffset.y * 0.07,
        rotationLerpSpeed
      );
      coalescentRef.current.rotation.x = xRotationAfterLerp;

      const yRotationAfterLerp = lerp(
        coalescentRef.current.rotation.y,
        positionSetMap[page].rotation[1] - mouseCameraOffset.x * xOffsetReducer,
        rotationLerpSpeed
      );
      coalescentRef.current.rotation.y = yRotationAfterLerp;

      const zRotationAfterLerp = lerp(
        coalescentRef.current.rotation.z,
        positionSetMap[page].rotation[2],
        rotationLerpSpeed
      );
      coalescentRef.current.rotation.z = zRotationAfterLerp;
    }
  });

  const scalingFactor = window.innerWidth < mobileBreakPoint ? 0.7 : 1;

  return (
    <>
      <primitive
        object={mesh}
        position={[0, -1, 0]}
        scale={scalingFactor}
        ref={coalescentRef}
      />
    </>
  );
};
