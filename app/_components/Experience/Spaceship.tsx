import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
export const Spaceship = () => {
  const { nodes } = useGLTF("spaceship.glb");
  console.log(nodes.Scene);

  const { camera } = useThree();
  console.log(camera.position);
  const { x, y, z } = camera.position;
  return <primitive position={[x, y, z]} object={nodes.Scene} />;
};
