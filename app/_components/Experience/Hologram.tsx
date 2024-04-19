import { useEffect, useState, useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, BufferGeometry, Material } from "three";
import { useGLTF } from "@react-three/drei";
import { usePageContext } from "@contexts/pageContext";
import { pageNames } from "@customTypes/pageNames";
import { damp3 } from "maath/easing";

import { holographicMaterial } from "@/app/_materials/holographicMaterial";

type Scale = [x: number, y: number, z: number];

type Props = {
  scale?: number | [x: number, y: number, z: number];
  position?: [x: number, y: number, z: number];
  rotation?: [x: number, y: number, z: number];
};
export const Hologram = ({ scale = 1, position = [0, 0, 0] }: Props) => {
  const ref = useRef<Mesh>(null);
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
  const geometryMap = useMemo(
    () => ({
      "/": Home.geometry,
      "/blog": Blog.geometry,
      "/contact": Contact.geometry,
      "/jake": Jake.geometry,
      "/projects": Projects.geometry,
      "/interests": Interests.geometry,
    }),
    [
      Home.geometry,
      Blog.geometry,
      Contact.geometry,
      Jake.geometry,
      Projects.geometry,
      Interests.geometry,
    ]
  );

  const [geometry, setGeometry] = useState<BufferGeometry | null>(() => {
    if (page && pageNames.includes(page)) {
      return geometryMap[page];
    }
    return null;
  });

  const hologramScale: Scale = isOpening ? [0.04, 0.04, 0.04] : [0, 0.04, 0];

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.set(0, ref.current.rotation.y + delta / 2, 0);

      damp3(ref.current.scale, hologramScale, 0.1, delta);
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
  }, [page, previousPage, isOpening, currentTimeout, geometryMap]);

  if (!geometry) return null;

  return (
    <group scale={scale} position={position}>
      <mesh ref={ref} geometry={geometry} material={holographicMaterial}></mesh>
    </group>
  );
};
