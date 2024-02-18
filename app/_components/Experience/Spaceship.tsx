import { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  spaceshipMobileScalingFactor,
  mobileBreakPoint,
} from "@sharedData/index";
import { Group, MeshBasicMaterial } from "three";
import { initialCameraPosition } from "@sharedData/index";
import { dampE } from "@functions/damp";
import { useFlightContext } from "@contexts/flightContext";
import { Model } from "./SpaceshipModel";
import { Light } from "./Light";

export const Spaceship = () => {
  const spaceshipRef = useRef<Group>(null);
  const { direction } = useFlightContext();

  const scalingFactor =
    window.innerWidth < mobileBreakPoint
      ? spaceshipMobileScalingFactor
      : { x: 1, y: 1, z: 1 };

  useFrame((_, delta) => {
    if (spaceshipRef.current && direction) {
      if (direction.x === 0 && direction.y === 0) {
        dampE(spaceshipRef.current.rotation, [0, 0, 0], 3.5, delta);
      }

      dampE(
        spaceshipRef.current.rotation,
        [direction.x * 0.03, direction.y * 0.03, 0],
        1.5,
        delta
      );
    }
  });

  const [x, y, z] = initialCameraPosition;
  return (
    <>
      <group
        position={[x, y - 0.2, z - 4]}
        scale={[scalingFactor.x, scalingFactor.y, scalingFactor.z]}
        ref={spaceshipRef}
      >
        <Model />
        <Light renderOrder={10} position={[0, 2, 0]} />
        <Light renderOrder={10} position={[2.1, 2, 0]} />
        <Light renderOrder={10} position={[-2.1, 2, 0]} />
        <Light renderOrder={10} position={[0, -2, 0]} />
        <Light renderOrder={10} position={[2.1, -2, 0]} />
        <Light renderOrder={10} position={[-2.1, -2, 0]} />
      </group>
      <pointLight position={[x, y - 0.2, z - 4]} intensity={20} />
    </>
  );
};
