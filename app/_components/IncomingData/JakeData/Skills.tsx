import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandThreejs } from "react-icons/tb";
import { IoCubeOutline } from "react-icons/io5";
import { SiBlender } from "react-icons/si";

import { Skill } from "./Skill";
import styles from "../Data.module.css";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 0.2 },
  },
};
const childrenStaggerTime = 0.07;
const hasChildrenVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.25,
      staggerChildren: childrenStaggerTime,
    },
  },
};

const SKILLS: { name: string; Icon: React.ComponentType }[] = [
  { name: "React", Icon: FaReact },
  { name: "Typescript", Icon: TbBrandTypescript },
  { name: "ThreeJS", Icon: TbBrandThreejs },
  { name: "R3F", Icon: IoCubeOutline },
  { name: "Blender", Icon: SiBlender },
  { name: "React", Icon: FaReact },
  { name: "Typescript", Icon: TbBrandTypescript },
  { name: "ThreeJS", Icon: TbBrandThreejs },
  { name: "R3F", Icon: IoCubeOutline },
  { name: "Blender", Icon: SiBlender },
];
export const Skills = () => (
  <motion.div className={styles.section}>
    <motion.h3
      variants={variants}
      initial="hidden"
      animate="show"
      className="w-full text-center"
    >
      Skills
    </motion.h3>
    <motion.ul
      variants={hasChildrenVariants}
      initial="hidden"
      animate="show"
      className="flex  w-full justify-between flex-wrap"
    >
      {SKILLS.map((skill, i) => (
        <Skill
          key={skill.name}
          name={skill.name}
          Icon={skill.Icon}
          iconDelay={i * childrenStaggerTime}
        />
      ))}
    </motion.ul>
  </motion.div>
);
