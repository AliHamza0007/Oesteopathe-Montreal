import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/Blog.css";
import articleImg from "../assets/imgsHome/articleImg.jpg";
import u1 from "../assets/imgsHome/users/u1.jpg";
import u2 from "../assets/imgsHome/users/u2.webp";
import u3 from "../assets/imgsHome/users/u3.jpg";
import s1 from "../assets/imgsHome/legPain.jpg";
import s2 from "../assets/imgsHome/neckPain.jpg";
import s3 from "../assets/imgCare/careNav1.jpeg";
import s4 from "../assets/imgsHome/backpain.jpg";
import s5 from "../assets/imgsHome/shoulderPain.jpg";
import s6 from "../assets/imgsHome/stoachAches.jpg";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-reveal";
const Blog = () => {
  return (
    <Layout>
      <div className="py-5 bgg">
        <div className="container my-5 py-5 text-center justify-content-center align-items-center ">
          <Fade bottom duration={1000}>
            {" "}
            <h3 className="text-white fontbold pt-4 px-md-5">
              Health and Well-being:
              <br />
              Our Articles on Osteopathy for a better quality of life
            </h3>
          </Fade>
        </div>
      </div>

      <div className="container mt-5 pt-5">
        <Fade bottom duration={1000}>
          <div className="row p-3">
            <div className="col-md-4 col-12 pb-0 ">
              <div className="overflow-hidden rounded-3">
                <img src={articleImg} alt="img" className="img-fluid " />
              </div>

              <div className="align-items-center py-3">
                <h4 className="cg fontbold artText">
                  Osteopathy demystified: 20 essential information about this
                  manual approach
                </h4>
                <div className="d-flex my-5 justify-content-between align-items-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={u1}
                      width="50px"
                      className="img-fluid rounded-pill"
                      alt="userImg"
                    />
                    <h5 className="cg">Michael Daras</h5>
                  </div>
                  <div>
                    <Link
                      className="nav-link d-inline-block  fs-5    p-0"
                      to=""
                      aria-current="page"
                    >
                      Read<i className="cy fs-6 ps-2 fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-12 pb-0">
              <div className="row ">
                <div className="col-lg-6 col-12  py-3">
                  <h4 className="cg artText fontbold ">
                    When to consult an osteopath in Montreal?
                  </h4>
                  <div className="d-flex my-5 justify-content-between  ">
                    <h5 className="cg">Luc Gagnon</h5>

                    <Link
                      className="nav-link d-inline-block cg  fs-5    p-0"
                      to=""
                      aria-current="page"
                    >
                      Read<i className="cy fs-6 ps-2 fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-12  py-3">
                  <h4 className="cg artText fontbold ">
                    Osteopathy Montreal: an effective solution for the treatment
                    of tendinitis
                  </h4>
                  <div className="d-flex my-5 justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <h5 className="cg"></h5>
                    </div>
                    <div>
                      <Link
                        className="nav-link d-inline-block  fs-5 cg   p-0"
                        to=""
                        aria-current="page"
                      >
                        Read<i className="cy fs-6 ps-2 fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Fade bottom duration={1000}>
        <div className="container-fluid px-md-5 ">
          <Swiper
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
            }}
            className="swiper px-3 mt-5 "
          >
            <SwiperSlide>
              <div>
                <div className="overflow-hidden rounded-3">
                  <img
                    src={s1}
                    alt="img"
                    className="img-fluid blogSwiperImg "
                  />
                </div>

                <div className="align-items-center py-3">
                  <h4 className=" fontbold artText cg">
                    How osteopathy can help relieve stomach aches?
                  </h4>
                  <div className="d-flex my-5 justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={u1}
                        width="50px"
                        className="img-fluid rounded-pill"
                        alt="userImg"
                      />
                      <h5 className="cg">Michael Daras</h5>
                    </div>
                    <div>
                      <Link
                        className="nav-link cg d-inline-block  fs-5    p-0"
                        to=""
                        aria-current="page"
                      >
                        Read<i className="cy fs-6 ps-2 fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="overflow-hidden rounded-3">
                  <img
                    src={s2}
                    alt="img"
                    className="img-fluid blogSwiperImg "
                  />
                </div>

                <div className="align-items-center py-3">
                  <h4 className=" fontbold artText cg">
                    How osteopathy can help relieve stomach aches?
                  </h4>
                  <div className="d-flex my-5 justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={u2}
                        width="50px"
                        className="img-fluid rounded-pill"
                        alt="userImg"
                      />
                      <h5 className="cg">Michael Daras</h5>
                    </div>
                    <div>
                      <Link
                        className="nav-link cg d-inline-block  fs-5    p-0"
                        to=""
                        aria-current="page"
                      >
                        Read<i className="cy fs-6 ps-2 fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="overflow-hidden rounded-3">
                  <img
                    src={s3}
                    alt="img"
                    className="img-fluid blogSwiperImg "
                  />
                </div>

                <div className="align-items-center py-3">
                  <h4 className=" fontbold artText cg">
                    How osteopathy can help relieve stomach aches?
                  </h4>
                  <div className="d-flex my-5 justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={u3}
                        width="50px"
                        className="img-fluid rounded-pill"
                        alt="userImg"
                      />
                      <h5 className="cg">Michael Daras</h5>
                    </div>
                    <div>
                      <Link
                        className="nav-link cg d-inline-block  fs-5    p-0"
                        to=""
                        aria-current="page"
                      >
                        Read<i className="cy fs-6 ps-2 fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Fade>
      <Fade bottom duration={2000}>
        {" "}
        <div className="container-fluid px-md-5  ">
          <Swiper
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
            }}
            className="swiper px-3 mt-5 "
          >
            <SwiperSlide>
              <div>
                <div className="overflow-hidden rounded-3">
                  <img
                    src={s4}
                    alt="img"
                    className="img-fluid blogSwiperImg "
                  />
                </div>

                <div className="align-items-center py-3">
                  <h4 className=" fontbold artText cg">
                    How osteopathy can help relieve stomach aches?
                  </h4>
                  <div className="d-flex my-5 justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={u3}
                        width="50px"
                        className="img-fluid rounded-pill"
                        alt="userImg"
                      />
                      <h5 className="cg">Michael Daras</h5>
                    </div>
                    <div>
                      <Link
                        className="nav-link cg d-inline-block  fs-5    p-0"
                        to=""
                        aria-current="page"
                      >
                        Read<i className="cy fs-6 ps-2 fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="overflow-hidden rounded-3">
                  <img
                    src={s5}
                    alt="img"
                    className="img-fluid blogSwiperImg "
                  />
                </div>

                <div className="align-items-center py-3">
                  <h4 className=" fontbold artText cg">
                    How osteopathy can help relieve stomach aches?
                  </h4>
                  <div className="d-flex my-5 justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={u1}
                        width="50px"
                        className="img-fluid rounded-pill"
                        alt="userImg"
                      />
                      <h5 className="cg">Michael Daras</h5>
                    </div>
                    <div>
                      <Link
                        className="nav-link cg d-inline-block  fs-5    p-0"
                        to=""
                        aria-current="page"
                      >
                        Read<i className="cy fs-6 ps-2 fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="overflow-hidden rounded-3">
                  <img
                    src={s6}
                    alt="img"
                    className="img-fluid blogSwiperImg "
                  />
                </div>

                <div className="align-items-center py-3">
                  <h4 className=" fontbold artText cg">
                    How osteopathy can help relieve stomach aches?
                  </h4>
                  <div className="d-flex my-5 justify-content-between  align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={u2}
                        width="50px"
                        className="img-fluid rounded-pill"
                        alt="userImg"
                      />
                      <h5 className="cg">Michael Daras</h5>
                    </div>
                    <div>
                      <Link
                        className="nav-link cg d-inline-block  fs-5    p-0"
                        to=""
                        aria-current="page"
                      >
                        Read<i className="cy fs-6 ps-2 fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Fade>
    </Layout>
  );
};

export default Blog;
