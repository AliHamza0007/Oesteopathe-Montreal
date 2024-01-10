import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import "../styles/Care.css";
import careImg1 from "../assets/imgCare/img1.jpeg";
import s1 from "../assets/imgsHome/stoachAches.jpg";
import s2 from "../assets/imgCare/careNav1.jpeg";
import s3 from "../assets/imgCare/careNav2.jpeg";
import s4 from "../assets/imgCare/careNav3.jpeg";
import s5 from "../assets/imgsHome/neckPain.jpg";
import painLegs from "../assets/imgCare/careNav2.jpeg";
import CareNavTabs from "./careComp/CareNavTabs";

import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade, Zoom } from "react-reveal";
const Care = () => {
  return (
    <Layout>
      {/* our care */}
      <div className="py-5 bgg">
        <div className="container my-5 py-5 text-center justify-content-center align-items-center ">
          <h1 className="display-1  text-white h1">
            <Fade bottom duration={1000}>
              <b>Our Cares</b>
            </Fade>
          </h1>
        </div>
      </div>

      {/* dedicated Team */}
      <Fade bottom duration={1000}>
        <div className="container-fluid text-center my-3 py-5">
          <h1 className="cg display-4 fw-bold mb-2">A Dedicated Team</h1>
          <h5>
            Osteopathy is a global therapy, which addresses mobility and <br />
            flexibility restrictions affecting the human body.
          </h5>
          <div className="d-flex mt-5 py-3  justify-content-center align-items-center ">
            <Link
              to="/appointment"
              className="text-decoration-none rounded-pill me-3 fs-5 bgy text-white p-4 careLink1"
            >
              <b>Make an Appointment</b>
            </Link>
            <Link
              to="/blog"
              className="text-decoration-none rounded-pill fs-5 bg-white  text-dark p-4 careLink1"
            >
              <b>Our Blog</b>
            </Link>
          </div>
        </div>
      </Fade>
      <Zoom>
        <img src={careImg1} alt="careImg1" className="img-fluid  h-100 w-100" />
      </Zoom>
      <div className="container my-5 py-5 text-center">
        <Fade bottom duration={1000}>
          <h5 className="cb Inter mt-5 pt-3">BENEFITS OF OSTEOPATHY</h5>
          <h1 className="pt-3 cg fw-bold mb-5">
            Physical Pain Relief | Stress And <br /> Anxiety Management
          </h1>
        </Fade>
        <Fade bottom duration={2000}>
          <CareNavTabs />
        </Fade>
      </div>
      <div className="bgg my-5 py-5">
        <Swiper
          modules={[Navigation, EffectFade, Autoplay, Pagination]}
          effect="slide"
          speed="1000"
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          className="swiper px-3 my-5"
        >
          <SwiperSlide>
            <img
              src={s1}
              alt="SwiperCareImg"
              className="img-fluid rounded-4  imgCareSwiper"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={s2}
              alt="SwiperCareImg"
              className="img-fluid rounded-4  imgCareSwiper"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={s3}
              alt="SwiperCareImg"
              className="img-fluid rounded-4  imgCareSwiper"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={s4}
              alt="SwiperCareImg"
              className="img-fluid rounded-4  imgCareSwiper"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={s5}
              alt="SwiperCareImg"
              className="img-fluid rounded-4  imgCareSwiper"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="container my-5 py-5">
        <div className="row px-3 align-items-center">
          <Fade bottom duration={1000}>
            <div className="col-md-6 pe-lg-5">
              <h1 className="cg fontbold">Pain In My Legs</h1>
              <h5 className=" pt-3 text-secondary">
                Of muscular, vascular, and/or neurological origins, heaviness,
                radiation, tingling, calf pain, can be relieved by your
                osteopath.
                <br />
                <Link
                  className="nav-link d-inline-block cg  text-dark fs-5    ps-0 "
                  to=""
                >
                  Learn more
                </Link>
              </h5>
            </div>
          </Fade>
          <Zoom duration={2000}>
            <div className="col-md-6 ps-md-5">
              <img
                src={painLegs}
                className="img-fluid  rounded-2"
                alt="legImg Care"
              />
            </div>
          </Zoom>
        </div>
      </div>
    </Layout>
  );
};

export default Care;
