import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import classnames from "classnames";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

export const ContactData = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [emailHasBeenTouched, setEmailHasBeenTouched] = useState(false);
  const [messageHasBeenTouched, setMessageHasBeenTouched] = useState(false);

  const emailIsValid =
    emailInput.length > 0 && emailInputRef.current?.validity.valid;
  const messageIsValid = messageInput.length > 0;

  const formIsValid = emailIsValid && messageIsValid;

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
            value={emailInput}
            onFocus={() => setEmailHasBeenTouched(true)}
            onChange={(e) => setEmailInput(e.target.value)}
            id="email-input"
            ref={emailInputRef}
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
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onFocus={() => setMessageHasBeenTouched(true)}
            className={classnames(
              "border-sky-700 border-2 rounded p-2 bg-sky-950 w-full h-60",
              "focus-styles-inset"
            )}
          />
        </motion.div>
        <motion.div className="w-full flex justify-center" variants={variants}>
          <button
            type="submit"
            className={classnames(
              "border-2 rounded px-5 py-2  transition-all",
              "focus-styles",
              {
                "bg-sky-500 text-sky-950 border-sky-500": formIsValid,
                "bg-sky-900 text-sky-600 border-sky-600": !formIsValid,
              }
            )}
            disabled={!formIsValid}
          >
            <FormattedMessage id="contactDataSend" defaultMessage="Send" />
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
};
