import { Link } from "react-router-dom";
import homeBG2 from "../../assets/imgsHome/homeBG2.jpeg";
import { Fade } from "react-reveal";

const AuxiliumDetails = () => {
  return (
    <div className="position-relative">
      <img src={homeBG2} alt="bg2" className="img-fluid homeBG2 " />
      <div className="contentHome2  ">
        <Fade bottom>
          <div className="container-fluid text-white text-center  ">
            <h1 className="fontbold">Auxilium</h1>
            <h1 className="fontbold">Integrative Health</h1>
            <h5 className="Inter">Emergency (24/7)</h5>
            <h5 className="Inter pt-3 pb-5">
              5130, Rue Saint-Hubert,
              <br /> Montreal H2J 2Y3
            </h5>
            <h5 className="Inter">Tel.: 514 295-0488</h5>
            <Link
              className="nav-link d-inline-block mt-4 fs-4 btnNav fw-bold Inter p-0"
              to="/appointment"
            >
              Click here to make an appointment
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AuxiliumDetails;
