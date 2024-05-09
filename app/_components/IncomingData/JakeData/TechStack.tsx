import { motion } from "framer-motion";
import { FaNode, FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandThreejs } from "react-icons/tb";
import { IoCubeOutline } from "react-icons/io5";
import { SiBlender } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandStorybook } from "react-icons/tb";
import { TbBrandFramerMotion } from "react-icons/tb";
import { VscTerminalBash } from "react-icons/vsc";

import { Tech } from "./Tech";
import styles from "../Data.module.css";

const childrenStaggerTime = 0.15;
const delayTime = 0.9;
const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: delayTime },
  },
};
const hasChildrenVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: delayTime + 0.1,
      duration: 0.25,
      staggerChildren: childrenStaggerTime,
    },
  },
};

const TECH_STACK: { name: string; Icon: React.ComponentType }[] = [
  { name: "React", Icon: FaReact },
  { name: "NextJS", Icon: RiNextjsLine },
  { name: "NodeJS", Icon: FaNodeJs },
  { name: "Typescript", Icon: TbBrandTypescript },
  { name: "Bash", Icon: VscTerminalBash },
  { name: "Storybook", Icon: TbBrandStorybook },
  { name: "ThreeJS", Icon: TbBrandThreejs },
  { name: "R3F", Icon: IoCubeOutline },
  { name: "Framer Motion", Icon: TbBrandFramerMotion },
  { name: "Blender", Icon: SiBlender },
];
export const TechStack = () => (
  <motion.div className={styles.section}>
    <motion.h3
      variants={variants}
      initial="hidden"
      animate="show"
      className="w-full text-center font-bold text-sky-500"
    >
      Tech Stack
    </motion.h3>
    <motion.ul
      variants={hasChildrenVariants}
      initial="hidden"
      animate="show"
      className="flex  w-full justify-between flex-wrap"
    >
      {TECH_STACK.map((tech, i) => (
        <Tech
          key={tech.name}
          name={tech.name}
          Icon={tech.Icon}
          iconDelay={i * childrenStaggerTime}
        />
      ))}
    </motion.ul>
  </motion.div>
);
