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
import { useMouseCameraOffset } from "@hooks/useMouseCameraOffset";
import { usePageContext } from "@contexts/pageContext";
import { useFlightContext } from "@contexts/flightContext";
import { mobileBreakPoint } from "@sharedData/index";

const flightDirectionLimit = 0.01;
const xOffsetReducer = 0.05;
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
    rotation: [0.3, +xOffsetReducer],
  },
  "/blog": {
    pixelPositions: blogPositions,
    rotation: [1, 0.83 + xOffsetReducer],
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
  useFrame((state, delta) => {
    const positionSetLerpSpeed = 2.0 * delta;
    const scatteredPositionLerpSpeed = 1 * delta;
    const rotationLerpSpeed = 0.8 * delta;
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
      const currentXPosition = coalescentRef.current.rotation.x;
      const targetXPosition =
        positionSetMap[page].rotation[0] - mouseCameraOffset.y * 0.07;
      const xRotationAfterLerp = lerp(
        currentXPosition,
        targetXPosition,
        rotationLerpSpeed
      );
      coalescentRef.current.rotation.x = xRotationAfterLerp;

      const currentYPosition = coalescentRef.current.rotation.y;
      const targetYPosition =
        positionSetMap[page].rotation[1] - mouseCameraOffset.x * xOffsetReducer;
      const yRotationAfterLerp = lerp(
        currentYPosition,
        targetYPosition,
        rotationLerpSpeed
      );
      coalescentRef.current.rotation.y = yRotationAfterLerp;

      if (targetXPosition - currentXPosition > flightDirectionLimit) {
        if (targetYPosition - currentYPosition > flightDirectionLimit) {
          setDirection({ x: 1, y: 1 });
        } else if (targetYPosition - currentYPosition < -flightDirectionLimit) {
          setDirection({ x: 1, y: -1 });
        } else {
          setDirection({ x: 1, y: 0 });
        }
      } else if (targetXPosition - currentXPosition < -flightDirectionLimit) {
        if (targetYPosition - currentYPosition > flightDirectionLimit) {
          setDirection({ x: -1, y: 1 });
        } else if (targetYPosition - currentYPosition < -flightDirectionLimit) {
          setDirection({ x: -1, y: -1 });
        } else {
          setDirection({ x: -1, y: 0 });
        }
      } else {
        if (targetYPosition - currentYPosition > flightDirectionLimit) {
          setDirection({ x: 0, y: 1 });
        } else if (targetYPosition - currentYPosition < -flightDirectionLimit) {
          setDirection({ x: 0, y: -1 });
        } else {
          setDirection({ x: 0, y: 0 });
        }
      }
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
