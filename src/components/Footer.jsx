import { Link } from "react-router-dom";
import "../styles/Footer.css";
import AuxiliumDetails from "../pages/footerComponent/AuxiliumDetails";
const Footer = () => {
  const logo =
    "https://assets-global.website-files.com/644933d61982c13af7b551fa/64623835ed1d35a7b5272973_auxilium-logo.jpg";
  return (
    <>
      <AuxiliumDetails />
      <div className="footer  container py-3 text-secondary bottom-0">
        <div className="mt-3 row py-5">
          <div className="col-md-5 col-12 mb-3">
            <Link
              className="nav-link text-md-start text-center pt-3 ms-0 justify-content-center "
              to="/"
            >
              <img src={logo} alt="logo" className="img-fluid" />
            </Link>

            <Link
              className="nav-link text-md-start text-center mt-5  "
              to="home"
            >
              <div className="footerFacebookDiv">
                <i className="fa footerFacebook fa-facebook "></i>
              </div>
            </Link>
          </div>

          <div className="col-md-7 col-12 ">
            <nav className="navbar  navbar-expand  ">
              <div className="container  ">
                <div
                  className="collapse navbar-collapse justify-content-center"
                  id="collapsibleNavId"
                >
                  <ul className="navbar-nav ms-lg-auto flex-lg-row flex-column text-center ">
                    <li className="nav-item px-2">
                      <Link className="nav-link  " to="/">
                        Welcome
                      </Link>
                    </li>
                    <li className="nav-item px-2">
                      <Link className="nav-link " to="/about">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item px-2">
                      <Link className="nav-link " to="/care">
                        Service
                      </Link>
                    </li>

                    <li className="nav-item px-2">
                      <Link className="nav-link  " to="/blog">
                        Blog
                      </Link>
                    </li>

                    <li className="nav-item  px-2  ">
                      <Link className="nav-link  " to="/appointment">
                        Make an appointment
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <hr />
        <div className="pt-5 pb-4 text-center ">
          <h5 className="Inter">
            © Auxilium 2022. All Rights Reserved - All Rights Reserved
          </h5>
          <h5 className="Inter">
            <span className="text-dark footerHover Inter pe-1">
              5130, Rue Saint-Hubert, #201
            </span>
            Montreal (Quebec) H2J 2Y3
          </h5>
        </div>
      </div>
    </>
  );
};

export default Footer;
