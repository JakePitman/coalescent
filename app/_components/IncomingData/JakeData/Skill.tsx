import { motion, stagger } from "framer-motion";

const liVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const iconVariants = {
  hidden: { right: "-70px", bottom: "-70px" },
  show: {
    right: "-28px",
    bottom: "-28px",
    transition: {
      delay: 0.4,
      duration: 0.7,
    },
  },
};

type SkillProps = {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
};
export const Skill = ({ name, Icon }: SkillProps) => (
  <motion.li
    variants={liVariants}
    className="relative bg-sky-300 my-1 w-[48.8%] text-sky-950 p-2 overflow-hidden"
  >
    {name}
    <motion.div className="absolute" variants={iconVariants}>
      <Icon className=" text-7xl text-[#5eb6e6]" />
    </motion.div>
  </motion.li>
);
