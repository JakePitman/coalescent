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

export const Spaceship = () => {
  const spaceshipRef = useRef<Group>(null);
  const { direction } = useFlightContext();
  const { nodes } = useGLTF("/spaceship-baked.glb");
  const meshes = nodes.Scene.children[0].children;

  // This actually works!
  // But it requires careful planning in Blender.
  // At the moment, gray console stripes in the back are overriding the
  // front of the console's base material, as we have to set the renderOrder
  // on the mesh itself. It seems that assigning materials to faces in blender
  // will create a single mesh per material.
  meshes[0].renderOrder = 1;
  meshes[1].renderOrder = 2;
  meshes[2].renderOrder = 3;
  meshes[3].renderOrder = 4;
  meshes[4].renderOrder = 5;
  meshes.forEach((mesh) => {
    mesh.material.depthTest = false;
    mesh.material.depthWrite = false;
    mesh.material.needsUpdate = true;
  });

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
    <group
      position={[x, y - 0.2, z - 4]}
      scale={[scalingFactor.x, scalingFactor.y, scalingFactor.z]}
      ref={spaceshipRef}
    >
      <primitive object={nodes.Scene} />
    </group>
  );
};
