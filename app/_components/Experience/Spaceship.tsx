import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
export const Spaceship = () => {
  //@ts-ignore - nodes does exist
  const { nodes } = useGLTF("spaceship.glb");

  const { camera } = useThree();
  const { x, y, z } = camera.position;
  return <primitive position={[x, y, z]} object={nodes.Scene} />;
};
