import { useState } from "react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

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
  const [textIsFinished, setTextIsFinished] = useState(true);

  return (
    <div>
      <p>
        <FormattedMessage
          id="contactDataImJake"
          defaultMessage="Hi there! I'm Jake."
        />
      </p>
      <p>
        <FormattedMessage
          id="contactDataMainBody"
          defaultMessage="I heard you were looking for a front-end engineer, and I'd be happy to help. Please use the form below, and let's work together."
        />
      </p>
      <p className="w-full text-center my-5">- ⎔ -</p>
      {textIsFinished && (
        <motion.form
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1 }}
          action="https://formspree.io/f/xbjnnjaq"
          method="POST"
        >
          <motion.div variants={variants} className="block mb-3">
            <label className="mb-1" htmlFor="email-input">
              <FormattedMessage
                id="contactDataYourEmail"
                defaultMessage="Your email:"
              />
            </label>
            <input
              type="email"
              name="email"
              id="email-input"
              className="border-sky-700 border-2 rounded p-1 bg-sky-950 w-full"
            />
          </motion.div>
          <motion.div variants={variants} className="block mb-3">
            <label className="mb-1" htmlFor="message-field">
              <FormattedMessage
                id="contactDataYourMessage"
                defaultMessage="Your message:"
              />
            </label>
            <textarea
              name="message"
              id="message-field"
              className="border-sky-700 border-2 rounded p-1 bg-sky-950 w-full h-60"
            />
          </motion.div>
          <motion.div
            className="w-full flex justify-center"
            variants={variants}
          >
            <button
              type="submit"
              className="border-2 rounded border-sky-500 px-5 py-2 hover:bg-transparent bg-sky-500 hover:text-sky-300 text-sky-950 transition-all"
            >
              <FormattedMessage id="contactDataSend" defaultMessage="Send" />
            </button>
          </motion.div>
        </motion.form>
      )}
    </div>
  );
};
