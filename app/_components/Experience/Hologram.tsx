import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, BoxGeometry } from "three";
import { useGLTF } from "@react-three/drei";
import { usePageContext } from "@contexts/pageContext";

import HolographicMaterial from "./HolographicMaterial";

export const Hologram = () => {
  const ref = useRef<Group>(null);
  const { nodes } = useGLTF("/hologram.glb");
  const { Blog, Contact, Jake, Projects, Whale } = nodes;
  const { page } = usePageContext();

  const geometryMap = {
    "/": new BoxGeometry(10, 10, 10),
    "/blog": Blog.geometry,
    "/contact": Contact.geometry,
    "/jake": Jake.geometry,
    "/projects": Projects.geometry,
    "/interests": Whale.geometry,
  };

  useFrame((_, delta) => {
    ref.current &&
      ref.current.rotation.set(0, ref.current.rotation.y + delta / 2, 0);
  });

  console.log(geometryMap[page]);

  return (
    <group ref={ref} position={[-2.05, -1.9, 0]} scale={0.04}>
      <mesh geometry={geometryMap[page]}>
        <HolographicMaterial fresnelOpacity={0.35} />
      </mesh>
    </group>
  );
};
