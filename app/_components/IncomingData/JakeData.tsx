import { TextBlock } from "./TextBlock";
import styles from "./Data.module.css";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandThreejs } from "react-icons/tb";
import { IoCubeOutline } from "react-icons/io5";
import { SiBlender } from "react-icons/si";

const hasChildrenVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.2,
      staggerChildren: 0.3,
    },
  },
};
const liVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

type SkillProps = {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
};
const Skill = ({ name, Icon }: SkillProps) => (
  <motion.li
    variants={liVariants}
    className="relative bg-sky-300 my-1 w-[48.8%] text-sky-950 p-2 overflow-hidden"
  >
    {name}
    <Icon className="absolute right-[-28px] bottom-[-28px] text-7xl text-[#5eb6e6]" />
  </motion.li>
);

const SKILLS: { name: string; Icon: React.ComponentType }[] = [
  { name: "React", Icon: FaReact },
  { name: "Typescript", Icon: TbBrandTypescript },
  { name: "ThreeJS", Icon: TbBrandThreejs },
  { name: "R3F", Icon: IoCubeOutline },
  { name: "Blender", Icon: SiBlender },
];
const Skills = () => (
  <motion.div className={styles.section}>
    <motion.h3
      variants={hasChildrenVariants}
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
      {SKILLS.map((skill) => (
        <Skill key={skill.name} name={skill.name} Icon={skill.Icon} />
      ))}
    </motion.ul>
  </motion.div>
);

export const JakeData = () => {
  return (
    <div>
      {/* 
      NOTE: Typist has a strange bug that prevents components extracted
      into variables from working. Defaulting to css extractions instead
    */}
      <TextBlock>
        <div className={styles.section}>
          <div>
            <h3 className={styles.key}>Name: </h3>
            <p className={styles.value}>Jake Pitman</p>
          </div>
          <div>
            <h3 className={styles.key}>Age: </h3>
            <p className={styles.value}>Unknown</p>
          </div>
          <div>
            <h3 className={styles.key}>Location: </h3>
            <p className={styles.value}>Earth</p>
          </div>
        </div>
      </TextBlock>

      <Skills />
    </div>
  );
};
