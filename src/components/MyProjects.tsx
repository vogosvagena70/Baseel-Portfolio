import CedarBlack from "../assets/NewCedarBlackPNG.png";
const MyProjects = () => {
  return (
    <>
      <div className="wrapper">
        <h1>My Projects</h1>
        <h2>My personal project that I launched, and still working on.</h2>
        <div className="MyProjectsContainer">
          <a
            href="https://www.cedarwebdesigns.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="MyProject">
              <img src={CedarBlack} width={50} height={20}></img>
              <h3>Small bussiness website service</h3>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default MyProjects;
