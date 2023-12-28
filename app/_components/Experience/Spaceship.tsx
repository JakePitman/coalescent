import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
export const Spaceship = () => {
  //@ts-ignore - nodes does exist
  const { nodes } = useGLTF("spaceship.glb");

  const { camera } = useThree();
  const { x, y, z } = camera.position;
  return (
    <group position={[x, y, z]}>
      <pointLight intensity={20} />
      <primitive object={nodes.Scene} />
    </group>
  );
};
