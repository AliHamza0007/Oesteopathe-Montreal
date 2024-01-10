import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <div>
        <Link
          to="/appointment"
          className="contactUs d-inline rounded-5 p-2    nav-link "
        >
          Contact Us
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
