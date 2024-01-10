import { Link } from "react-router-dom";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import c1 from "../../assets/imgsHome/backpain.jpg";
import c2 from "../../assets/imgsHome/team.png";
import c3 from "../../assets/imgsHome/neckPain.jpg";
import c4 from "../../assets/imgsHome/massage.gif";
import { Fade } from "react-reveal";
const Practitioners = () => {
  return (
    <div className="bgPractitioners">
      <div className="container py-5">
        <div className="text-center p-5 mx-md-5">
          <Fade bottom duration={1000}>
            <h5 className="py-1  bgy   cg d-inline px-3 rounded-pill align-items-center">
              <i className="bullet m-auto fa fa-circle pe-2"></i>
              Our Team
            </h5>

            <h1 className="mt-3">Our Practitioners</h1>
          </Fade>
          <Fade bottom duration={2000}>
            <div className="col-md-10 col-12 mx-auto">
              <h5 className="py-2 pt-4 ">
                Our team of osteopaths is highly qualified. Listening to the
                needs of each client for an effective and rapid resolution of
                their body pain.
              </h5>
              <h5 className="py-2 ">
                We put our expertise at your service and help you regain a
                better quality of life.
              </h5>
              <h5 className="py-2 ">
                Trust our team to support you in your healing process!
              </h5>
            </div>
          </Fade>
        </div>
        <Fade bottom duration={3000}>
          <div className="row px-3">
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
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide>
                <div className="card bgPractitioners border-0">
                  <img
                    className="img-fluid card-img-top "
                    alt="cardImg"
                    src={c1}
                  />
                  <div className="card-body ps-0">
                    <h3 className="card-title">Care</h3>
                    <h6 className="card-text fw-light fs-5">
                      Known as the “back pain therapist”, the osteopath can
                      treat much more than musculoskeletal pain.
                    </h6>{" "}
                    <Link
                      className="nav-link d-inline-block  fs-5    ps-0"
                      to=""
                      aria-current="page"
                    >
                      <i>Learn more</i>{" "}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card bgPractitioners border-0">
                  <img
                    className="img-fluid card-img-top c2"
                    alt="cardImg"
                    src={c2}
                  />
                  <div className="card-body ps-0">
                    <h3 className="card-title">Practitioners</h3>
                    <h6 className="card-text fw-light fs-5">
                      Michaël Daras and Luc Gagnon are experienced and certified
                      professionals in Quebec and France.
                    </h6>{" "}
                    <Link
                      className="nav-link d-inline-block  fs-5    ps-0"
                      to=""
                      aria-current="page"
                    >
                      <i>Learn more</i>{" "}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card bgPractitioners border-0">
                  <img
                    className="img-fluid card-img-top "
                    alt="cardImg"
                    src={c3}
                  />
                  <div className="card-body ps-0">
                    <h3 className="card-title">Session</h3>
                    <h6 className="card-text fw-light fs-5">
                      Michaël Daras and Luc Gagnon are experienced and certified
                      professionals in Quebec and France.
                    </h6>{" "}
                    <Link
                      className="nav-link d-inline-block  fs-5    ps-0"
                      to=""
                      aria-current="page"
                    >
                      <i>Find out more</i>{" "}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid " src={c4} alt="gif image " />{" "}
              </SwiperSlide>
            </Swiper>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Practitioners;
