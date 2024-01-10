import Layout from "../components/Layout";
import appointmentImg from "../assets/AppointmentImg.jpg";
import BrandImg from "../assets/imgsHome/Home1.webp";
import star from "../assets/imgsHome/users/userRating.png";
import "../styles/Appointment.css";
import { NavLink } from "react-router-dom";
import ClientChoose from "./appointment/ClientChoose";
import Form from "./appointment/Form";
import AuxiliumProfessional from "./appointment/AuxiliumProfessional";
import NewForm from "./appointment/NewForm";
import LucProfessional from "./appointment/LucProfessional";
import LucService from "./appointment/LucService";
import NewClient from "./appointment/NewClient";
import { useStep } from "../context/UseStep";
import DateTime from "./appointment/DateTime";

const Appointment = () => {

  const { step } = useStep();
 
  return (
    <Layout>
      <div className="pt-5 position-relative">
        <img
          src={appointmentImg}
          className="img-fluid imgAppointmet pt-5"
          alt="imgAppointmet"
        />{" "}
        <div className=" imgBrandDiv ">
          <img
            src={BrandImg}
            className="img-fluid imgBrand p-3"
            alt="imgBrand"
          />
        </div>
      </div>
      <div className="bg-light py-5 Quicksand">
        <div className="container-fluid">
          <div className="row px-3 ">
            <div className="col-md-5 mb-4 col-12 ">
              <div className="bg-white appointment1 ps-5 py-4 pe-3 ">
                <div className="d-flex mb-4 justify-content-between ">
                  <h3 className=" Inter">
                    Auxilium Integrative Health Osteopaths
                  </h3>
                  <img src={star} alt="stars" className="img-fluid pt-3 h-25" />
                </div>
                <div className="icons mb-4">
                  <div className="Quicksand">
                    <i className="fa fa-phone pe-2 "></i> 1 (514) 295-0488
                  </div>
                  <div>
                    <i className="fa fa-globe  pe-2"></i> Website
                  </div>
                  <div>
                    <i className="fa fa-map-marker  pe-2"></i> Rentols
                  </div>
                </div>
              </div>
              <div className="bg-white mt-5 ps-5 py-4 pe-4 appointment1">
                <h3>Rentals</h3>
                <div className="d-flex my-4 justify-content-between ">
                  <div>
                    {" "}
                    <h5 className="Quicksand ">
                      Auxilium Integrative Health Daras-Gagnon Osteopaths
                    </h5>
                    <p className="Quicksand">
                      5130 Rue Saint-Hubert
                      <br />
                      Montreal, Quebec, Canada
                      <br />
                      H2J 2Y3 Map
                    </p>
                  </div>
                  <div>
                    <NavLink className="mapLink rounded-2 px-3  p-2 ">
                      Map
                    </NavLink>
                  </div>
                </div>
                <div className="d-flex mb-4  justify-content-between ">
                  <div>
                    <h5 className="Quicksand">
                      Luc Gagnon at Momentum Performance St-Bruno
                    </h5>
                    <p className="Quicksand">
                      2100 Rue Marie-Victorin
                      <br />
                      Saint-Bruno-De-Montarville, Quebec, Canada
                      <br />
                      J3V 0M2
                    </p>
                  </div>
                  <div>
                    <NavLink className="mapLink rounded-2 px-3  p-2 ">
                      Map
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-12 bg-white position-relative appointment1">
           
          

        
              {step === 0 && <ClientChoose />}
              {step === 1 && <Form />}
              {step === 2 && <NewClient />}
              {step === 3 && <LucProfessional />}
              {step === 4 && <AuxiliumProfessional />}
              {step === 5 && <LucService />}
              {step === 6 && <DateTime />}
              {step === 7 && <NewForm />}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Appointment;
