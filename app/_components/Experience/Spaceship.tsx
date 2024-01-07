import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import {
  spaceshipMobileScalingFactor,
  mobileBreakPoint,
} from "@sharedData/index";
import { Group } from "three";
import { useMouseCameraOffset } from "@hooks/useMouseCameraOffset";

// TODO
// 1. Base direction on mouse
// 2. Set camera position once in a global var, and use it here
//    instead of using useThree
export const Spaceship = () => {
  console.log("SPACESHIP");
  const spaceshipRef = useRef<Group>(null);

  // use mouse here
  const mouseCameraOffset = useMouseCameraOffset();
  console.log(mouseCameraOffset);
  const direction = { x: 1, y: 1 };

  //@ts-ignore - nodes does exist
  const { nodes } = useGLTF("spaceship.glb");
  const materials = Object.values(nodes)
    .map((node: any) => node.material)
    .filter((material: any) => !!material);

  materials.forEach((material) => {
    material.depthTest = false;
    material.needsUpdate = true;
  });

  const scalingFactor =
    window.innerWidth < mobileBreakPoint
      ? spaceshipMobileScalingFactor
      : { x: 1, y: 1, z: 1 };

  // Like Math.lerp, but stops when difference between x and y is less than 0.001
  function lerp(x: number, y: number, a: number) {
    const r = (1 - a) * x + a * y;
    return Math.abs(x - y) < 0.001 ? y : r;
  }
  useFrame((_, delta) => {
    if (spaceshipRef.current && direction) {
      const xRotationAfterLerp = lerp(
        spaceshipRef.current.rotation.x,
        direction.x * 0.02,
        0.8 * delta
      );
      spaceshipRef.current.rotation.x = xRotationAfterLerp;
      const yRotationAfterLerp = lerp(
        spaceshipRef.current.rotation.y,
        direction.y * 0.02,
        0.8 * delta
      );
      spaceshipRef.current.rotation.y = yRotationAfterLerp;
    }
  });

  // Get this from global var
  const { x, y, z } = { x: 0, y: 0, z: 0 };
  return (
    <group
      position={[x, y - 0.2, z - 0.6]}
      scale={[scalingFactor.x, scalingFactor.y, scalingFactor.z]}
      ref={spaceshipRef}
    >
      <pointLight intensity={25} />
      <mesh
        geometry={nodes.hull.geometry}
        material={nodes.hull.material}
        // Render orders will be important when adding to the spaceship.
        // As the spaceship grows in complexity, it may be worth referencing these
        // from a single file, so they can be seen relative to each other
        // The higher the number, the later it renders
        renderOrder={100}
      />
      <mesh
        geometry={nodes.dashboard.geometry}
        material={nodes.dashboard.material}
        renderOrder={101}
        position={[0, -2, -3.5]}
        rotation={[-0.6, 0, 0]}
      />
    </group>
  );
};
