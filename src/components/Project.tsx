import * as motion from "motion/react-client";

type ProjectProps = {
  link: string;
  title: string;
  description: string;
  cssImg: string;
};

const Project = ({ link, title, description, cssImg }: ProjectProps) => {
  return (
    <>
      <motion.div
        whileHover={{ y: -20 }}
        style={{ display: "inline-block" }}
        onClick={() => window.open(link, "_blank")}
        className="cursor-pointer project"
      >
        <div className={`${cssImg} project-pic`}></div>
        <div className="font-extrabold color-white text-center pt-1 pb-1 bg-teal project-description-rounder-border">
          {title}
          <div className="font-bold">{description}</div>
        </div>
      </motion.div>
      {/* <motion.div
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
        </motion.div> */}
    </>
  );
};

export default Project;
