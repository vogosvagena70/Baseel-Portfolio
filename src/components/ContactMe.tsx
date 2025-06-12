import * as motion from "motion/react-client";
import Button from "./Button";

type ContactMeProps = {
  ContactMeHandler: () => void;
  InNavBar: boolean;
};

const ContactMe = ({ ContactMeHandler, InNavBar = false }: ContactMeProps) => {
  return (
    <>
      <motion.div
        style={{ display: "inline" }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <Button
          text="Contact Me"
          className={
            InNavBar == false
              ? "float-right bg-w-to-b color-b-to-w pl-1 pr-1 border-black-900"
              : "bg-system float-right bg-w-to-b color-b-to-w pl-1 pr-1 border-black-900"
          }
          handleClick={ContactMeHandler}
        ></Button>
      </motion.div>
    </>
  );
};

export default ContactMe;
