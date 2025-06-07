import "./App.css";
import HeaderHref from "./components/HeaderHref";
import Button from "./components/Button";
import basselPic from "./assets/bassel.jpeg";
import * as motion from "motion/react-client";
import ContactModal from "./components/ContacModal";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

function App() {
  const [toggleModal, setToggleModal] = useState(false);

  const handleContactMe = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <>
      <nav className="block bg-white shadow">
        <div className="fixed top-10 right-6 burger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="duration-200 p-1.5 bg-gray-100 hover:bg-gray-200 h-12 w-12 rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.620"
              d="M4 6h16M4 12h8m-8 6h16"
            ></path>
          </svg>
        </div>
      </nav>
      <div className="top-bar"></div>

      <AnimatePresence>
        {toggleModal && <ContactModal handleClose={handleContactMe} />}
      </AnimatePresence>

      <div className="wrapper header">
        <div className="col-centered .lg\:w-9\/12">
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
              <HeaderHref text="work" />
            </motion.div>

            {/* <div style={{ display: "inline-block" }}>
              <ThrowArcBox
                text="Projects"
                setClicked={handleshowProjects}
                show={showProjects}
              ></ThrowArcBox>
            </div> */}

            {/* <div style={{ display: "inline-block" }}>
              <ThrowArcBox
                text="Extras"
                setClicked={handleshowProjects}
              ></ThrowArcBox>
            </div> */}

            {/* <motion.div
              style={{ display: "inline-block" }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <HeaderHref text="Projects" />
            </motion.div>

            <motion.div
              style={{ display: "inline-block" }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <HeaderHref text="Extras" />
            </motion.div> */}

            <motion.div
              style={{ display: "inline" }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <Button
                text="Contact me"
                className="float-right bg-w-to-b color-b-to-w pl-1 pr-1 border-black-900"
                handleClick={handleContactMe}
              ></Button>
            </motion.div>
          </div>

          <div className="mt-20">
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
            <div className="mt-100 pt-05">
              <span className="font-extr-extraabold">
                Hi, I'm <span className="default-color">Bassel Itani</span>.
                Here, you can check out what I'm working on.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper bg-gray-900 " id="work">
        <div className="color-white font-extr-extraabold text-center">
          Featured Work
        </div>
        <div className="mt-20 flex-projects">
          <motion.div
            whileHover={{ y: -20 }}
            style={{ display: "inline-block" }}
            onClick={() => window.open("https://sentient.dk/", "_blank")}
            className="cursor-pointer project"
          >
            <div className="sentient-pic project-pic"></div>
            <div className="font-extrabold color-white text-center pt-1 pb-1 bg-teal project-description-rounder-border">
              Sentient.dk
              <div className="font-bold">Easy Invoicing In The EU</div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ y: -20 }}
            style={{ display: "inline-block" }}
            onClick={() => window.open("https://skyjunxion.co/", "_blank")}
            className="cursor-pointer project"
          >
            <div className="skyjunxion-pic project-pic"></div>
            <div className="font-extrabold color-white text-center pt-1 pb-1 bg-teal project-description-rounder-border">
              Skyjunxion
              <div className="font-bold">B2B Travel Solution</div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ y: -20 }}
            style={{ display: "inline-block" }}
            className="cursor-pointer project"
            onClick={() =>
              window.open(
                "https://www.nakhalonline.com/DefaultNakhal.aspx",
                "_blank"
              )
            }
          >
            <div className="nakhal-pic project-pic"></div>
            <div className="font-extrabold color-white text-center pt-1 pb-1 bg-teal project-description-rounder-border">
              Nakhal
              <div className="font-bold">B2C Travel Booking Engine</div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default App;
