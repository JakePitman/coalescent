import { useEffect, useState, useRef } from "react";
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

  // This state is used to check if the value of 'page' has changed
  const [previousPage, setPreviousPage] = useState<string>(page || "/");
  const [isOpening, setIsOpening] = useState<boolean>(true);
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  useEffect(() => {
    // Only run on page change
    if (page !== previousPage) {
      page && setPreviousPage(page);
      setIsOpening(false);

      // Clear the previous timeout if it exists
      if (currentTimeout) {
        console.log("clearing timeout");
        clearTimeout(currentTimeout);
      }
      setCurrentTimeout(
        setTimeout(() => {
          setIsOpening(true);
          setCurrentTimeout(null);
        }, 2000)
      );
    }
  }, [page, previousPage, isOpening]);

  currentTimeout && console.log(currentTimeout);

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

  const scale = isOpening ? 0.04 : 0;

  return (
    <group ref={ref} position={[-2.05, -1.9, 0]} scale={scale}>
      <mesh geometry={geometry}>
        <HolographicMaterial scanlineSize={0.1} fresnelOpacity={0.35} />
      </mesh>
    </group>
  );
};
