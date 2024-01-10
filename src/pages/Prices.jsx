import Layout from "../components/Layout";
import "../App.css";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade, Zoom } from "react-reveal";
const Prices = () => {
  return (
    <Layout>
      <div className="py-5 bgg">
        <div className="container my-5 py-5 text-center justify-content-center align-items-center ">
          <h1 className="display-1 text-white h1">
            <Fade bottom duration={2000}>
              <b>Our Prices</b>
            </Fade>
          </h1>
        </div>
      </div>

      <div className="container text-center py-5 my-5">
        <Fade bottom duration={2000}>
          <h5 className="py-1 bgy d-inline px-3 rounded-pill">
            <i className="bullet  fa fa-circle pe-2"></i>
            <span>Osteopathy prices in Montreal</span>
          </h5>

          <h1 className="cg   my-4 fontbold">Prices Of Consultations</h1>
          <q className="fs-5 fw-bold  text-secondary mb-2">
            An intelligent Osteopath quickly learns
            <i className="ps-1">
              that a light hand and a gentle movement can <br /> achieve the
              desired result.
            </i>
          </q>
          <i className="text-secondary fw-bold d-block py-2">AT Still, DO</i>
        </Fade>{" "}
      </div>

      <div className="container-fluid px-md-5 ">
        <Swiper
          modules={[Navigation, EffectFade, Autoplay, Pagination]}
          effect="slide"
          speed="1000"
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            769: {
              slidesPerView: 3,
            },
          }}
          className="swiper px-3 mt-5 "
        >
          <SwiperSlide>
            <Zoom>
              <div className="cardPrice my-3 p-md-5 text-secondary card text-center">
                <h2 className="py-4 fontbold cg">Osteopathy</h2>
                <h5 className="">
                  in Clinic
                  <br />
                  Monday - Friday
                </h5>
                <h1 className="py-3 fw-bold ">
                  <sup className="cy S  fs-4">$</sup>
                  <span className="display-4 position-relative fw-bold price  cg">
                    115.68
                  </span>
                  <span className="cy fs-5">+tax</span>
                </h1>
                <h6 className="px-3  d-flex justify-content-center align-items-center  rounded-pill">
                  <span className="fs-2 cy"> &#8226;</span>
                  <span className="fs-5 ps-3 ">45-60 mins.</span>
                </h6>
                <h6 className="px-3 d-flex justify-content-center align-items-center  rounded-pill">
                  <span className="fs-2 cy"> &#8226;</span>
                  <span className="fs-5 ps-3 ">9 a.m.-6p.m.</span>
                </h6>
                <div className="pt-5">
                  <button className="fw-bold btnContact btn  d-inline bgy  text-white rounded-pill  fs-5">
                    Contact us
                  </button>
                </div>
              </div>
            </Zoom>
          </SwiperSlide>
          <SwiperSlide>
            <Zoom>
              <div className="cardPrice my-3 p-md-5 text-secondary card text-center">
                <h2 className="py-4 fontbold cg">Osteopathy</h2>
                <h5 className="">
                  at Home
                  <br />
                  Monday - Friday
                </h5>
                <h1 className="py-3 fw-bold ">
                  <sup className="cy   fs-4">$</sup>
                  <span className="display-4 position-relative fw-bold price  cg">
                    155
                  </span>
                  <span className="cy fs-5">+tax</span>
                </h1>
                <h6 className="px-3  d-flex justify-content-center align-items-center  rounded-pill">
                  <span className="fs-2 cy"> &#8226;</span>
                  <span className="fs-5 ps-3 ">45-60 mins.</span>
                </h6>
                <h6 className="px-3 d-flex justify-content-center align-items-center  rounded-pill">
                  <span className="fs-2 cy"> &#8226;</span>
                  <span className="fs-5 ps-3 ">9 a.m.-6p.m.</span>
                </h6>
                <div className="pt-5">
                  <button className="fw-bold btnContact btn  d-inline bgy  text-white rounded-pill fs-5">
                    Contact us
                  </button>
                </div>
              </div>
            </Zoom>
          </SwiperSlide>
          <SwiperSlide>
            <Zoom>
              <div className="cardPrice my-3 p-md-5 text-secondary card text-center">
                <h2 className="py-4 fontbold cg">Massage therapy</h2>
                <h5 className="">
                  at Home
                  <br />
                  Monday - Friday
                </h5>
                <h1 className="py-3 fw-bold ">
                  <sup className="cy S  fs-4">$</sup>
                  <span className="display-4 position-relative fw-bold price  cg">
                    76
                  </span>
                  <span className="cy fs-5">+tax</span>
                </h1>
                <h6 className="px-3  d-flex justify-content-center align-items-center  rounded-pill">
                  <span className="fs-2 cy"> &#8226;</span>
                  <span className="fs-5 ps-3 ">45-60 mins.</span>
                </h6>
                <h6 className="px-3 d-flex justify-content-center align-items-center  rounded-pill">
                  <span className="fs-2 cy"> &#8226;</span>
                  <span className="fs-5 ps-3 ">9 a.m.-6p.m.</span>
                </h6>
                <div className="pt-5">
                  <button className="fw-bold btnContact btn  d-inline bgy  text-white rounded-pill  fs-5">
                    Contact us
                  </button>
                </div>
              </div>
            </Zoom>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container-fluid px-md-5 mb-5 pb-5">
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
            769: {
              slidesPerView: 3,
            },
          }}
          className="swiper px-3 mt-5 "
        >
          <SwiperSlide>
            <Zoom>
              <div className="cardPrice my-3 p-md-5 text-secondary card text-center">
                <h2 className="py-4 fontbold cg">Osteopathy</h2>
                <h5 className="">
                  in Clinic
                  <br />
                  Saturdays, Sundays and
                </h5>
                <h5 className="pt-5 pb-3">Public Hilidays</h5>
                <h1 className="py-3 fw-bold ">
                  <sup className="cy S  fs-4">$</sup>
                  <span className="display-4 position-relative fw-bold price  cg">
                    130.46
                  </span>
                  <span className="cy fs-5">+tax</span>
                </h1>
                <h6 className="px-3  d-flex justify-content-center align-items-center  rounded-pill">
                  <span className="fs-2 cy"> &#8226;</span>
                  <span className="fs-5 ps-3 ">45-60 mins.</span>
                </h6>
                <h6 className="px-3 d-flex justify-content-center align-items-center  rounded-pill">
                  <span className="fs-2 cy"> &#8226;</span>
                  <span className="fs-5 ps-3 ">9 a.m.-6p.m.</span>
                </h6>
                <div className="pt-5">
                  <button className="fw-bold btnContact btn bgy d-inline text-white rounded-pill  fs-5">
                    Contact us
                  </button>
                </div>
              </div>
            </Zoom>
          </SwiperSlide>
          <SwiperSlide>
            <Zoom>
              <div className="cardPrice my-3 p-md-5 text-secondary card text-center">
                <h2 className="py-4 fontbold cg">Osteopathy</h2>
                <h5 className="">
                  at Home
                  <br />
                  Saturdays, Sundays and
                </h5>
                <h5 className="pt-5 pb-3">Public Hilidays</h5>
                <h1 className="py-3 fw-bold ">
                  <sup className="cy   fs-4">$</sup>
                  <span className="display-4 position-relative fw-bold price  cg">
                    170
                  </span>
                  <span className="cy fs-5">+tax</span>
                </h1>
                <h6 className="px-3  d-flex justify-content-center align-items-center  rounded-pill">
                  <span className="fs-2 cy"> &#8226;</span>
                  <span className="fs-5 ps-3 ">45-60 mins.</span>
                </h6>
                <h6 className="px-3 d-flex justify-content-center align-items-center  rounded-pill">
                  <span className="fs-2 cy"> &#8226;</span>
                  <span className="fs-5 ps-3 ">9 a.m.-6p.m.</span>
                </h6>
                <div className="pt-5">
                  <button className="fw-bold btnContact btn  d-inline bgy  text-white rounded-pill  fs-5">
                    Contact us
                  </button>
                </div>
              </div>
            </Zoom>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Zoom>
              <div className="cardPrice my-3 p-md-5 text-secondary card text-center">
                <h5 className="">Home travel add</h5>
                <h1 className="py-5 fw-bold ">
                  <sup className="cy S  fs-4">$</sup>
                  <span className="display-4 position-relative fw-bold price  cg">
                    30
                  </span>
                </h1>
                <div className="lastCard">
                  <h2 className="py-4 fw-bold cg">Osteopathy</h2>

                  <h6 className="px-3  d-flex justify-content-center align-items-center  rounded-pill">
                    <span className="fs-2 cy"> &#8226;</span>
                    <span className="fs-5 ps-3 ">45-60 mins.</span>
                  </h6>
                  <h6 className="px-3 d-flex justify-content-center align-items-center  rounded-pill">
                    <span className="fs-2 cy"> &#8226;</span>
                    <span className="fs-5 ps-3 ">9 a.m.-6p.m.</span>
                  </h6>
                  <h6 className="px-3 d-flex justify-content-center align-items-center  rounded-pill">
                    <span className="fs-2 cy"> &#8226;</span>
                    <span className="fs-5 ps-3 ">9 a.m.-6p.m.</span>
                  </h6>
                  <div className="pt-5">
                    <button className="fw-bold btnContact btn  d-inline bgy border-white text-white rounded-pill  fs-5">
                      Contact us
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </SwiperSlide>
        </Swiper>
      </div>
    </Layout>
  );
};

export default Prices;
