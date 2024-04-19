import { useEffect, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, BufferGeometry, Material } from "three";
import { useGLTF } from "@react-three/drei";
import { usePageContext } from "@contexts/pageContext";
import { pageNames } from "@customTypes/pageNames";
import { damp3 } from "maath/easing";

import HolographicMaterial from "./HolographicMaterial";

const holographicMaterial = new HolographicMaterial() as Material;

type Scale = [x: number, y: number, z: number];
export const Hologram = () => {
  const ref = useRef<Group>(null);
  // @ts-ignore
  const { nodes } = useGLTF("/hologram.glb");
  const { Home, Blog, Contact, Jake, Projects, Interests } = nodes;
  const { page } = usePageContext();
  // This state is used to check if the value of 'page' has changed
  const [previousPage, setPreviousPage] = useState<string>(page || "/");
  const [isOpening, setIsOpening] = useState<boolean>(true);
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const geometryMap = {
    "/": Home.geometry,
    "/blog": Blog.geometry,
    "/contact": Contact.geometry,
    "/jake": Jake.geometry,
    "/projects": Projects.geometry,
    "/interests": Interests.geometry,
  };
  const [geometry, setGeometry] = useState<BufferGeometry | null>(() => {
    if (page && pageNames.includes(page)) {
      return geometryMap[page];
    }
    return null;
  });

  const scale: Scale = isOpening ? [0.04, 0.04, 0.04] : [0, 0.04, 0];

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.set(0, ref.current.rotation.y + delta / 2, 0);

      damp3(ref.current.scale, scale, 0.1, delta);
    }
  });

  useEffect(() => {
    // Only run on page change
    if (page !== previousPage) {
      page && setPreviousPage(page);
      setIsOpening(false);

      // Clear the previous timeout if it exists
      if (currentTimeout) {
        clearTimeout(currentTimeout);
      }
      setCurrentTimeout(
        setTimeout(() => {
          if (page && pageNames.includes(page)) {
            setGeometry(geometryMap[page]);
          }
          setIsOpening(true);
          setCurrentTimeout(null);
        }, 2000)
      );
    }
  }, [page, previousPage, isOpening]);

  if (!geometry) return null;

  return (
    <group ref={ref} position={[-2.05, -1.9, 0]}>
      <mesh geometry={geometry} material={holographicMaterial}></mesh>
    </group>
  );
};
