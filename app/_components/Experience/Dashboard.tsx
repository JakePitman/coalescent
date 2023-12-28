import { useState, useEffect } from "react";
import { Html } from "@react-three/drei";
import { Euler } from "three";
import { motion } from "framer-motion";

const euler = new Euler(-0.7, 0, 0, "XYZ");
export const Dashboard = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => setReady(true), 2000);
  }, []);

  if (ready) {
    console.log("RENDERING");
    return (
      <Html transform scale={2} position={[0, -10, 0]} rotation={euler}>
        <motion.div
          initial={{
            scaleY: 0,
            opacity: 0,
          }}
          animate={{
            scaleY: 1,
            opacity: 1,
            transition: { delay: 0, duration: 0.2 },
          }}
          className="bg-green-900/20 text-green-100 border border-green-100 w-[370px] h-[120px]"
        >
          hello world
        </motion.div>
      </Html>
    );
  }
  return <></>;
};
