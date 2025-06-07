import "../App.css";
import * as motion from "motion/react-client";
import ContactForm from "./ContactForm";

type ContactModalProp = {
  handleClose: () => void;
};

const ContactModal = ({ handleClose }: ContactModalProp) => {
  return (
    <>
      <motion.div
        className="contactMe-Container pt-1"
        exit={{ y: 700 }}
        initial={{ y: 700 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
      >
        <div className="float-right mr-2" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer h-14 w-14 color-white "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.420"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="color-white font-extr-extraabold text-center">
          Contact Me
        </div>

        <ContactForm />
      </motion.div>
    </>
  );
};

export default ContactModal;
