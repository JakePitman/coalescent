import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

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
  messageId: string;
  defaultMessage: string;
  Icon: React.ComponentType<{ className?: string }>;
  iconDelay: number;
};
export const Tech = ({ messageId, defaultMessage, Icon, iconDelay }: Props) => (
  <motion.li
    variants={liVariants}
    className="relative bg-sky-300 my-1 w-[48.8%] text-sky-950 p-2 overflow-hidden"
  >
    <p className="relative z-10">
      <FormattedMessage id={messageId} defaultMessage={defaultMessage} />
    </p>

    <Icon className="absolute right-[-28px] bottom-[-28px] text-7xl text-[#5eb6e6]" />
  </motion.li>
);
