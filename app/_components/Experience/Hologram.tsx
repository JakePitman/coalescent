import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { useGLTF } from "@react-three/drei";
import { usePageContext } from "@contexts/pageContext";
import { pageNames } from "@customTypes/pageNames";

import HolographicMaterial from "./HolographicMaterial";

export const Hologram = () => {
  const ref = useRef<Group>(null);
  // @ts-ignore
  const { nodes } = useGLTF("/hologram.glb");
  const { Home, Blog, Contact, Jake, Projects, Interests } = nodes;
  const { page } = usePageContext();
  useFrame((_, delta) => {
    ref.current &&
      ref.current.rotation.set(0, ref.current.rotation.y + delta / 2, 0);
  });

  const geometryMap = {
    "/": Home.geometry,
    "/blog": Blog.geometry,
    "/contact": Contact.geometry,
    "/jake": Jake.geometry,
    "/projects": Projects.geometry,
    "/interests": Interests.geometry,
  };

  if (!page || !pageNames.includes(page)) return null;
  const geometry = geometryMap[page];

  return (
    <group ref={ref} position={[-2.05, -1.9, 0]} scale={0.04}>
      <mesh geometry={geometry}>
        <HolographicMaterial scanlineSize={0.1} fresnelOpacity={0.35} />
      </mesh>
    </group>
  );
};
