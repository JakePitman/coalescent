import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
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
const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};
const hasChildrenVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.25,
      staggerChildren: childrenStaggerTime,
    },
  },
};

const TECH_STACK: {
  messageId: string;
  defaultMessage: string;
  Icon: React.ComponentType;
}[] = [
  { messageId: "techStackReact", defaultMessage: "React", Icon: FaReact },
  {
    messageId: "techStackNextJS",
    defaultMessage: "NextJS",
    Icon: RiNextjsLine,
  },
  { messageId: "techStackNodeJS", defaultMessage: "NodeJS", Icon: FaNodeJs },
  {
    messageId: "techStackTypescript",
    defaultMessage: "Typescript",
    Icon: TbBrandTypescript,
  },
  { messageId: "techStackBash", defaultMessage: "Bash", Icon: VscTerminalBash },
  {
    messageId: "techStackStorybook",
    defaultMessage: "Storybook",
    Icon: TbBrandStorybook,
  },
  {
    messageId: "techStackThreeJS",
    defaultMessage: "ThreeJS",
    Icon: TbBrandThreejs,
  },
  { messageId: "techStackR3F", defaultMessage: "R3F", Icon: IoCubeOutline },
  {
    messageId: "techStackFramerMotion",
    defaultMessage: "Framer Motion",
    Icon: TbBrandFramerMotion,
  },
  { messageId: "techStackBlender", defaultMessage: "Blender", Icon: SiBlender },
];

type Props = {
  readyToRender: boolean;
};
export const TechStack = ({ readyToRender }: Props) => {
  if (!readyToRender) return null;
  return (
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
            key={tech.messageId}
            messageId={tech.messageId}
            defaultMessage={tech.defaultMessage}
            Icon={tech.Icon}
            iconDelay={i * childrenStaggerTime}
          />
        ))}
      </motion.ul>
    </motion.div>
  );
};
