import React, { useState, useMemo, useEffect, useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  scatteredPositions,
  jakePositions,
  whaleAndDiversPositions,
  projectsPositions,
  contactMePositions,
  blogPositions,
} from "./positions";
import { useNormalizedMouseCoords } from "@/app/_utilities/hooks/useNormalizedMouseCoords";
import { usePageContext } from "@contexts/pageContext";
import { useFlightContext } from "@contexts/flightContext";
import { mobileBreakPoint } from "@sharedData/index";
// import { lerpAndStop } from "@functions/lerpAndStop";
import { damp3, dampE } from "maath/easing";

const flightDirectionLimit = 0.01;
const positionSetMap = {
  // z rotation values removed. X and Y only
  "/": { pixelPositions: [], rotation: [0, 2] },
  "/jake": { pixelPositions: jakePositions, rotation: [-0.1, 1.0] },
  "/interests": {
    pixelPositions: whaleAndDiversPositions,
    rotation: [1.1, -0.4],
  },
  "/projects": {
    pixelPositions: projectsPositions,
    rotation: [0.3, 0],
  },
  "/blog": {
    pixelPositions: blogPositions,
    rotation: [1, 0.83],
  },
  "/contact": {
    pixelPositions: contactMePositions,
    rotation: [0.6, 1.2],
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
  //const { nodes } = useGLTF("contact.glb");
  //const positions = nodes.Scene.children.map((child) => child.position);
  //shuffle(positions);
  //console.log(positions);
  // --

  const coalescentRef = useRef<THREE.Mesh>();
  const { page: pageFromContext } = usePageContext();
  const page = pageFromContext ? pageFromContext : "/"; // Default to the scattered position
  const { setDirection } = useFlightContext();

  // Track mouse location
  const mouseCoords = useNormalizedMouseCoords();

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

  useFrame((state, delta) => {
    const positionSetLerpSpeed = 0.5;
    const scatteredPositionLerpSpeed = 1;
    const rotationLerpSpeed = 0.8;
    // Update pixel positions
    [...new Array(highestNumberOfPositions)].forEach((_, i) => {
      const dummy = dummies[i];
      const coordinateSet = positionSetMap[page].pixelPositions[i]; // xyz
      if (coordinateSet) {
        damp3(
          dummy.position,
          [coordinateSet.x, coordinateSet.y, coordinateSet.z],
          positionSetLerpSpeed,
          delta
        );
      } else {
        // Move to random scattered position if no positions left in current positionSet
        const numberOfTimesLengthFitsIni = Math.floor(
          i / scatteredPositions.length
        );
        const indexWithinScattered =
          i - scatteredPositions.length * numberOfTimesLengthFitsIni;
        const { x, y, z } = scatteredPositions[indexWithinScattered];
        damp3(dummy.position, [x, y, z], scatteredPositionLerpSpeed, delta);
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
      const targetXRotation =
        positionSetMap[page].rotation[0] - mouseCoords.y * 0.07;
      const targetYRotation =
        positionSetMap[page].rotation[1] - mouseCoords.x * 0.1;
      dampE(
        coalescentRef.current.rotation,
        [targetXRotation, targetYRotation, 0],
        rotationLerpSpeed,
        delta
      );

      // For setting the flightContext
      // if (targetXPosition - currentXPosition > flightDirectionLimit) {
      //   if (targetYPosition - currentYPosition > flightDirectionLimit) {
      //     setDirection({ x: 1, y: 1 });
      //   } else if (targetYPosition - currentYPosition < -flightDirectionLimit) {
      //     setDirection({ x: 1, y: -1 });
      //   } else {
      //     setDirection({ x: 1, y: 0 });
      //   }
      // } else if (targetXPosition - currentXPosition < -flightDirectionLimit) {
      //   if (targetYPosition - currentYPosition > flightDirectionLimit) {
      //     setDirection({ x: -1, y: 1 });
      //   } else if (targetYPosition - currentYPosition < -flightDirectionLimit) {
      //     setDirection({ x: -1, y: -1 });
      //   } else {
      //     setDirection({ x: -1, y: 0 });
      //   }
      // } else {
      //   if (targetYPosition - currentYPosition > flightDirectionLimit) {
      //     setDirection({ x: 0, y: 1 });
      //   } else if (targetYPosition - currentYPosition < -flightDirectionLimit) {
      //     setDirection({ x: 0, y: -1 });
      //   } else {
      //     setDirection({ x: 0, y: 0 });
      //   }
      // }
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
