import { motion } from "framer-motion";

const liVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

type Props = {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
  iconDelay: number;
};
export const Tech = ({ name, Icon, iconDelay }: Props) => (
  <motion.li
    variants={liVariants}
    className="relative bg-sky-300 my-1 w-[48.8%] text-sky-950 p-2 overflow-hidden"
  >
    <p className="relative z-10">{name}</p>

    <Icon className="absolute right-[-28px] bottom-[-28px] text-7xl text-[#5eb6e6]" />
  </motion.li>
);
