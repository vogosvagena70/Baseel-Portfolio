// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import * as motion from "motion/react-client";
import Button from "./Button";
import HeaderHref from "./HeaderHref";

type NavDrawerProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
  handleContactMeMobile: () => void;
};

const NavDrawer = ({
  isOpen,
  toggleDrawer,
  handleContactMeMobile,
}: NavDrawerProps) => {
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="w-100"
      >
        <div className="absolute top-10 right-4">
          <svg
            onClick={toggleDrawer}
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.620"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>

        <div className="text-center w-100 mt-20 flex-projects">
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
            onClick={toggleDrawer}
          >
            <HeaderHref text="Work" InNavBar={false} />
          </motion.div>

          <motion.div
            style={{ display: "inline-block" }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            onClick={toggleDrawer}
          >
            <HeaderHref text="Projects" InNavBar={false} />
          </motion.div>

          <motion.div
            style={{ display: "inline" }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <Button
              text="Contact Me"
              className="bg-w-to-b color-b-to-w pl-1 pr-1 border-black-900"
              handleClick={handleContactMeMobile}
            ></Button>
          </motion.div>
        </div>
      </Drawer>
    </>
  );
};

export default NavDrawer;
