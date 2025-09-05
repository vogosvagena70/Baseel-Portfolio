import CedarBlack from "../assets/NewCedarBlackPNG.png";
import HotelBeds from "../assets/HotelBeds.png";
const MyProjects = () => {
  return (
    <>
      <div className="wrapper" id="Projects">
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
          <a
            href="https://hotelbedswebappservice-b8grddc8h4guf8hm.southeastasia-01.azurewebsites.net/swagger/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="MyProject">
              <img src={HotelBeds} width={50} height={20}></img>
              <h3>HotelBeds API implementation</h3>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default MyProjects;
