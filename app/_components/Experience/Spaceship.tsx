import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { mobileBreakPoint } from "@sharedData/index";
import { useWindowDimensions } from "@/app/_utilities/hooks/useWindowDimensions";
import { Group } from "three";
import { initialCameraPosition } from "@sharedData/index";
import { dampE } from "@functions/damp";
import { useFlightContext } from "@contexts/flightContext";
import { Model } from "./SpaceshipModel";
import { Dashboard } from "./Dashboard";
import { Hologram } from "./Hologram";
import { Robot } from "./Robot";

export const Spaceship = () => {
  const spaceshipRef = useRef<Group>(null);
  const { direction } = useFlightContext();
  const { width } = useWindowDimensions();
  const isMobile = width <= mobileBreakPoint;

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
    <group position={[x, y - 0.2, z - 4]} ref={spaceshipRef}>
      <Dashboard />
      {/* TODO: Make scale and position controlled by props here too */}
      {!isMobile && <Hologram position={[-2.05, -1.9, 0]} />}
      {!isMobile && (
        <Robot
          scale={0.05}
          position={[2.05, -2.1, 0]}
          rotation={[0, -0.6, 0]}
        />
      )}
      <Model />
    </group>
  );
};
