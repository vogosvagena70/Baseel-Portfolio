import Project from "./Project";

const Projects = () => {
  return (
    <>
      <div className="wrapper bg-gray-900 " id="Work">
        <div className="color-white font-extr-extraabold text-center">
          Featured Work
        </div>
        <div
          className="mt-20 flex-projects"
          style={{ justifyContent: "center" }}
        >
          {projectList.map((project) => (
            <Project
              link={project.link}
              cssImg={project.cssImg}
              description={project.description}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const projectList = [
  {
    link: "https://sentient.dk/",
    title: "Sentient.dk",
    description: "Easy Invoicing in the EU",
    cssImg: "sentient-pic",
  },
  {
    link: "https://skyjunxion.co/",
    title: "Skyjunxion",
    description: "B2B Travel Solution",
    cssImg: "skyjunxion-pic",
  },
  {
    link: "https://www.nakhalonline.com/DefaultNakhal.aspx",
    title: "Nakhal",
    description: "B2C Travel Booking Engine",
    cssImg: "nakhal-pic",
  },
];
export default Projects;
