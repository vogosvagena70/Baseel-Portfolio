import "./App.css";

import ContactModal from "./components/ContacModal";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

import MainHeader from "./components/MainHeader";
import BasselImage from "./components/BasselImage";
import BasselDescription from "./components/BasselDescription";
import Projects from "./components/Projects";
import NavDrawer from "./components/NavDrawer";
import NavBurger from "./components/NavBurger";

function App() {
  const [toggleModal, setToggleModal] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  const handleContactMe = () => {
    setToggleModal(!toggleModal);
  };
  const handleContactMeMobile = () => {
    toggleDrawer();
    setToggleModal(!toggleModal);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  });

  return (
    <>
      <AnimatePresence>
        {showSticky && (
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
            className="MainNavBar"
            style={{
              position: "fixed",
              top: 0,
              width: "100%",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              padding: "1rem",
              zIndex: 1000,
            }}
          >
            {/* Your nav content */}
            <div className=" header">
              <div className="col-centered .lg\:w-9\/12">
                <MainHeader
                  ContactMeHandler={handleContactMe}
                  SkipAnimation={false}
                />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <NavBurger toggleDrawer={toggleDrawer} />
      <NavDrawer
        handleContactMeMobile={handleContactMeMobile}
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
      />
      <div className="top-bar"></div>

      <AnimatePresence>
        {toggleModal && <ContactModal handleClose={handleContactMe} />}
      </AnimatePresence>

      <div className="wrapper header">
        <div className="col-centered .lg\:w-9\/12">
          <MainHeader ContactMeHandler={handleContactMe} SkipAnimation={true} />
          <div className="mt-20">
            <BasselImage />
            <BasselDescription />
          </div>
        </div>
      </div>

      <Projects />
    </>
  );
}

export default App;
