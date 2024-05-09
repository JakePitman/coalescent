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
const iconVariants = (delay: number) => ({
  hidden: { opacity: 0, rotate: "20deg", scale: 0.8 },
  show: {
    rotate: "0deg",
    opacity: 1,
    scale: 1,
    transition: {
      delay: delay,
      duration: 2,
    },
  },
});

type SkillProps = {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
  iconDelay: number;
};
export const Skill = ({ name, Icon, iconDelay }: SkillProps) => (
  <motion.li
    variants={liVariants}
    className="relative bg-sky-300 my-1 w-[48.8%] text-sky-950 p-2 overflow-hidden"
  >
    <p>{name}</p>

    <motion.div
      className="absolute right-[-28px] bottom-[-28px]"
      variants={iconVariants(iconDelay)}
    >
      <Icon className=" text-7xl text-[#5eb6e6]" />
    </motion.div>
  </motion.li>
);
