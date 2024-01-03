import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import {
  spaceshipMobileScalingFactor,
  mobileBreakPoint,
} from "@sharedData/index";
import * as THREE from "three";

export const Spaceship = () => {
  //@ts-ignore - nodes does exist
  const { nodes } = useGLTF("spaceship.glb");
  console.log(nodes);
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

  // find out why there's no material
  // Maybe try baking
  console.log(nodes.spaceship);

  const { camera } = useThree();
  const { x, y, z } = camera.position;
  return (
    <group
      position={[x, y - 0.2, z - 0.6]}
      scale={[scalingFactor.x, scalingFactor.y, scalingFactor.z]}
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
