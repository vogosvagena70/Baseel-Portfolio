import * as motion from "motion/react-client";
import HeaderHref from "./HeaderHref";

export default function EnterAnimation() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 1 }}
      >
        <HeaderHref text="Projects" InNavBar={false}></HeaderHref>
        <HeaderHref text="Projects" InNavBar={false}></HeaderHref>
        <HeaderHref text="Projects" InNavBar={false}></HeaderHref>
      </motion.div>
    </>
  );
}
