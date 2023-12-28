import { useState, useEffect } from "react";
import { Html } from "@react-three/drei";
import { Euler } from "three";

const euler = new Euler(-0.8, 0, 0, "XYZ");
export const Dashboard = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => setReady(true), 1000);
  }, []);

  if (ready) {
    console.log("RENDERING");
    return (
      <Html transform scale={2} position={[0, -1, 0]} rotation={euler}>
        <div className="bg-green-900/20 text-green-100 border border-green-100 w-[370px] h-[120px]">
          hello world
        </div>
      </Html>
    );
  }
  return <></>;
};
