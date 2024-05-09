import { motion } from "framer-motion";

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
export const Skill = ({ name, Icon }: SkillProps) => (
  <motion.li
    variants={liVariants}
    className="relative bg-sky-300 my-1 w-[48.8%] text-sky-950 p-2 overflow-hidden"
  >
    {name}
    <Icon className="absolute right-[-28px] bottom-[-28px] text-7xl text-[#5eb6e6]" />
  </motion.li>
);
