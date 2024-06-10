import { useState } from "react";
import { TextBlock } from "@components/IncomingData/TextBlock";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // duration: 2,
    },
  },
};

export const ContactData = () => {
  const [textIsFinished, setTextIsFinished] = useState(false);

  return (
    <div>
      <TextBlock onTypingDone={() => setTextIsFinished(true)}>
        <p>{"Hi there! I'm Jake."}</p>
        <p>
          {
            "I heard you were looking for a front-end engineer, and I'd be happy to help. Please use the form below, and let's work together."
          }
        </p>
        <p className="w-full text-center my-5">- ⎔ -</p>
      </TextBlock>
      {textIsFinished && (
        <motion.form
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1 }}
          action="https://formspree.io/f/xbjnnjaq"
          method="POST"
        >
          <motion.label variants={variants} className="block mb-3">
            <p className="mb-1">Your email:</p>
            <input
              type="email"
              name="email"
              className="border-sky-700 border-2 rounded bg-sky-950 w-full"
            />
          </motion.label>
          <motion.label variants={variants} className="block mb-3">
            <p className="mb-1">Your message:</p>
            <textarea
              name="message"
              className="border-sky-700 border-2 rounded bg-sky-950 w-full h-60"
            ></textarea>
          </motion.label>
          <motion.button
            variants={variants}
            type="submit"
            className="border-2 rounded border-sky-500 px-3 py-1 hover:bg-sky-500 hover:text-sky-950 transition-all"
          >
            Send
          </motion.button>
        </motion.form>
      )}
    </div>
  );
};
