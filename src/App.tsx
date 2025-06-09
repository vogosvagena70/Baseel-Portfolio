import "./App.css";

import ContactModal from "./components/ContacModal";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

import MainHeader from "./components/MainHeader";
import BasselImage from "./components/BasselImage";
import BasselDescription from "./components/BasselDescription";
import Projects from "./components/Projects";
import NavDrawer from "./components/NavDrawer";
import NavBurger from "./components/NavBurger";

function App() {
  const [toggleModal, setToggleModal] = useState(false);

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

  return (
    <>
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
          <MainHeader ContactMeHandler={handleContactMe} />
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
