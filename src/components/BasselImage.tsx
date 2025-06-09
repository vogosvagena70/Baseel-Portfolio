import * as motion from "motion/react-client";
import basselPic from "../assets/bassel.jpeg";

const BasselImage = () => {
  return (
    <>
      <motion.div
        style={{ display: "inline" }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="w-full text-center">
          <motion.img
            className="bassel-pic mt-10 object-fit-cover rounder-border w-80 h-80 border-radius-100 border-8"
            src={basselPic}
            alt=""
          ></motion.img>
        </div>
      </motion.div>
    </>
  );
};

export default BasselImage;
