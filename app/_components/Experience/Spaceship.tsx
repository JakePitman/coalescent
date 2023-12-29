import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import {
  spaceshipMobileScalingFactor,
  mobileBreakPoint,
} from "@sharedData/index";
import { space } from "postcss/lib/list";

export const Spaceship = () => {
  //@ts-ignore - nodes does exist
  const { nodes } = useGLTF("spaceship.glb");
  const scalingFactor =
    window.innerWidth < mobileBreakPoint
      ? spaceshipMobileScalingFactor
      : { x: 1, y: 1, z: 1 };

  const { camera } = useThree();
  const { x, y, z } = camera.position;
  return (
    <group position={[x, y - 0.2, z - 4]}>
      <pointLight intensity={20} />
      <primitive
        object={nodes.Scene}
        scale={[scalingFactor.x, scalingFactor.y, scalingFactor.z]}
      />
    </group>
  );
};
