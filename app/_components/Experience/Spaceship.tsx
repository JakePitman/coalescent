import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  spaceshipMobileScalingFactor,
  mobileBreakPoint,
} from "@sharedData/index";
import { Group } from "three";
import { useNormalizedMouseCoords } from "@/app/_utilities/hooks/useNormalizedMouseCoords";
import { initialCameraPosition } from "@sharedData/index";

export const Spaceship = () => {
  const spaceshipRef = useRef<Group>(null);

  const mouseCoords = useNormalizedMouseCoords();

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
  console.log(mouseCoords);
  useFrame((_, delta) => {
    if (spaceshipRef.current && mouseCoords) {
      const xRotationAfterLerp = lerp(
        spaceshipRef.current.rotation.x,
        -mouseCoords.y * 0.05,
        0.8 * delta
      );
      spaceshipRef.current.rotation.x = xRotationAfterLerp;
      const yRotationAfterLerp = lerp(
        spaceshipRef.current.rotation.y,
        -mouseCoords.x * 0.05,
        0.8 * delta
      );
      spaceshipRef.current.rotation.y = yRotationAfterLerp;
    }
  });

  const [x, y, z] = initialCameraPosition;
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
