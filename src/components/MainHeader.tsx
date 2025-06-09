import * as motion from "motion/react-client";
import Button from "./Button";
import HeaderHref from "./HeaderHref";
import ContactMe from "./ContactMe";

type MainHeaderProps = {
  ContactMeHandler: () => void;
};

const MainHeader = ({ ContactMeHandler }: MainHeaderProps) => {
  return (
    <>
      <div className="main-header">
        <motion.div
          style={{ display: "inline-block" }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Button
            text="MBI"
            className="p-2 border-black-900"
            handleClick={() => {}}
          />
        </motion.div>

        <motion.div
          style={{ display: "inline-block" }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <HeaderHref text="Work" />
        </motion.div>

        <ContactMe ContactMeHandler={ContactMeHandler} />
      </div>
    </>
  );
};

export default MainHeader;
