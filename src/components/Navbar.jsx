import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import menu from "../assets/menu.png";
const Navbar = () => {
  return (
    <div className="bgNav mb-5">
      <nav className="navbar mb-0 pb-0 pt-4 navbar-expand-lg  ">
        <div className="container  ">
          <NavLink
            className="navbar-brand pt-3 justify-content-center  "
            to="/"
          >
            <span className="text-white   nbt"> auxilium</span>

            <span className="nbd">INTEGRATIVE HEALTH</span>
          </NavLink>
          <button
            className="navbar-toggler d-lg-none "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i>
              <img
                className="fa menu fa-bars text-white fs-1 justify-content-center py-2 navbar-toggler-icon"
                src={menu}
                alt="img"
              />
            </i>
            <i className="fa   fa-times  fs-1 justify-content-center py-2 navbar-toggler-icon"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="collapsibleNavId"
          >
            <ul className="navbar-nav ms-auto text-center ">
              <li className="nav-item px-2">
                <NavLink className="nav-link  " to="/">
                  Welcome
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link " to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link " to="/care">
                  Care{" "}
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link  " to="/price">
                  Prices
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link  " to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item px-2  ">
                <div className="dropdown nav-link">
                  Practitioners
                  <i
                    className="fa fa-angle-down ps-1 fs-5"
                    aria-hidden="true"
                  ></i>
                  <div className="dropdown-content">
                    <NavLink className="nav-link " to="/michael">
                      Michael Daras
                    </NavLink>
                    <NavLink className="nav-link " to="/luc">
                      Luc Gagnon
                    </NavLink>
                    <NavLink className="nav-link " to="/christelle">
                      Christelle Binga
                    </NavLink>
                  </div>
                </div>
              </li>

              <li className="nav-item  px-2 ">
                <NavLink
                  className="nav-link  btnNav rounded-pill  py-3 fw-bold px-md-4 px-2"
                  to="/appointment"
                >
                  Make an appointment
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
