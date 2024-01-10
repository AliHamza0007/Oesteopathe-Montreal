import "../styles/Home.css";
import homeBG from "../assets/imgsHome/HomeBg.jpg";
import imgHome1 from "../assets/imgsHome/Home1.webp";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Home_NavPages from "./homecomponents/Home_NavPages";
import Testimonials from "./homecomponents/Testimonials";
import Article from "./homecomponents/Article";
import Practitioners from "./homecomponents/Practitioners";

import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade, Zoom } from "react-reveal";

const Home = () => {
  return (
    <Layout>
      <div className=" position-relative overflow-hidden">
        <img src={homeBG} alt="home img" className="img-fluid  imgHome  mb-5" />
        <div className="container mb-5">
          <Fade bottom duration={1000}>
            <div className="contentHome text-white ">
              <h1 className="display-1 fw-bold ">Experienced</h1>
              <h1 className="display-1 fw-bold mb-5"> Osteopaths</h1>
              <h5>
                We are available by appointment and on an emergency basis.
              </h5>
              <div className="py-5 mb-5 text-center">
                <Link
                  className="nav-link d-inline-block  btnNav rounded-pill fw-bold px-md-4 px-2"
                  to="/appointment"
                >
                  Click here to make an appointment
                </Link>

                <Link
                  className="nav-link d-inline-block ms-4 fs-5    px-md-4 px-2"
                  to=""
                  aria-current="page"
                >
                  About Us <span className="cy ">&rarr;</span>
                </Link>
              </div>
            </div>
          </Fade>
        </div>

        {/* cards */}
        <div className="container opacity mb-5 rounded-4 text-center bg-white shadow py-5 cardHome">
          <div className="row px-5">
            <Swiper
              className="Swiper "
              modules={[Navigation, EffectFade, Autoplay, Pagination]}
              effect="slide"
              speed="1000"
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              spaceBetween={40}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide>
                <div className=" text-secondary ">
                  <h1 className="cy cardHomecy">
                    <b>+20</b>
                  </h1>
                  <h5>years of experience</h5>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className=" text-secondary border-start ">
                  <h1 className="cy cardHomecy">
                    <b>24/7</b>
                  </h1>
                  <h5>available urgently</h5>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className=" text-secondary border-start ">
                  <h1 className="cy cardHomecy">
                    <b>+20K</b>
                  </h1>
                  <h5>osteopathic care</h5>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" text-secondary border-start ">
                  <h1 className="cy cardHomecy">
                    <b>+90%</b>
                  </h1>

                  <h5>satisfied customers</h5>
                </div>{" "}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/*home tan or links*/}
        <div className="container-fluid bgTB  my-5 pt-5">
          <Fade bottom>
            <div className="container bg-white shadow rounded-3 my-5 py-2">
              <div className="row px-md-5  ">
                <div className="col-md-6 col-12 mb-4 ">
                  <h1 className="cg fw-bold fs-1 py-3 ">
                    Restore Your Mobility And Well-Being
                  </h1>
                  <p className="  fs-5 py-4">
                    We are dedicated to providing high quality osteopathic care
                    to our clients. We are a team of qualified and experienced
                    osteopathic professionals who are passionate about our work
                    and committed to helping our clients achieve optimal health.
                  </p>

                  <Link
                    className="nav-link d-inline-block mt-4 fs-5 cg    ps-0"
                    to=""
                    aria-current="page"
                  >
                    About Us<i className="cy fs-6 ps-2 fa fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="col-md-6 col-12 mb-4 ps-md-5 px-2 ">
                  <Zoom duration={1000}>
                    <img
                      className="img-fluid "
                      src={imgHome1}
                      alt="IMg Home 1"
                    />
                  </Zoom>
                </div>
              </div>
            </div>
          </Fade>
          {/* Home_NavPages */}
          <Home_NavPages />

          {/* testimonials */}
          <Testimonials />
        </div>
      </div>

      {/* Article */}
      <Article />
      <Practitioners />
    </Layout>
  );
};

export default Home;
