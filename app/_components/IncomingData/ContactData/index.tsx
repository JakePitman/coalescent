import { useState } from "react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import classnames from "classnames";

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
              className={classnames(
                "border-sky-700 border-2 rounded p-2 bg-sky-950 w-full",
                "focus-styles-inset"
              )}
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
              className={classnames(
                "border-sky-700 border-2 rounded p-2 bg-sky-950 w-full h-60",
                "focus-styles-inset"
              )}
            />
          </motion.div>
          <motion.div
            className="w-full flex justify-center"
            variants={variants}
          >
            <button
              type="submit"
              className={classnames(
                "border-2 rounded border-sky-500 px-5 py-2 hover:bg-transparent bg-sky-500 hover:text-sky-300 text-sky-950 transition-all",
                "focus-styles"
              )}
            >
              <FormattedMessage id="contactDataSend" defaultMessage="Send" />
            </button>
          </motion.div>
        </motion.form>
      )}
    </div>
  );
};
