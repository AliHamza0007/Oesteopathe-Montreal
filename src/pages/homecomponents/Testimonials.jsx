import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import u1 from "../../assets/imgsHome/users/u1.jpg";
import u3 from "../../assets/imgsHome/users/u3.jpg";
import u4 from "../../assets/imgsHome/users/u4.jpg";
import u5 from "../../assets/imgsHome/users/u5.jpg";
import u6 from "../../assets/imgsHome/users/u6.jpg";
import u7 from "../../assets/imgsHome/users/u7.jpg";
import u2 from "../../assets/imgsHome/users/u2.webp";
import userRating from "../../assets/imgsHome/users/userRating.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Fade } from "react-reveal";

const Testimonials = () => {
  return (
    <div className="container cg mt-5 py-5">
      <Fade bottom duration={1000}>
        <div className="row pb-5 ">
          <div className="col-md-5 col-12 pe-md-5 px-2">
            <h5 className="py-1 bgyb d-inline px-3 rounded-pill">
              <i className="bullet fa fa-circle pe-2"></i>
              Testimonials
            </h5>

            <h1 className="fontbold  cg   my-4">
              Customers Satisfied With Our Tailor-
              <br />
              Made Osteopathic Services
            </h1>
            <Fade bottom duration={2000}>
              <p className="fs-5 pe-md-3">
                We are proud to have a long list of happy clients who have
                benefited from our personalized osteopathic services in
                Montreal. Each client is unique and we make sure to listen
                carefully to their needs to quickly provide appropriate and
                effective treatment.
              </p>
            </Fade>
            <Fade bottom duration={3000}>
              <div className="row px-2 text-start pt-5">
                <div className=" col-6 text-secondary  ">
                  <h1 className="cy cardHomecy">
                    <b>+90%</b>
                  </h1>
                  <h5>satisfied customers</h5>
                </div>{" "}
                <div className="col-6 text-secondary ">
                  <h1 className="cy cardHomecy">
                    <b>+20</b>
                  </h1>
                  <h5>years of experience</h5>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-md-7 col-12 pt-3">
            <Swiper
              className="Swiper "
              modules={[Navigation, EffectFade, Autoplay, Pagination]}
              effect="slide"
              speed="1000"
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={20}
              navigation={{
                prevEl: ".leftArrow",
                nextEl: ".rightArrow",
              }}
            >
              <SwiperSlide>
                <h1 className="fontbold fs-3 ">
                  <q>
                    The blend of gentleness and strength combined with the deep
                    knowledge of the human body makes this a wonderful
                    treatment. They immediately targeted the trouble spots in
                    the area affected by a sciatic nerve injury. I really
                    enjoyed my session and I can't wait to go back
                  </q>
                </h1>
                <div className="d-flex align-items-center  py-5  ">
                  <img
                    src={u2}
                    alt="imgesUser"
                    className="img-fluid rounded-circle userImg"
                  />
                  <div className="ps-3">
                    <span className="fs-5">Matt</span>
                    <img
                      src={userRating}
                      alt="imgesUser"
                      className="img-fluid  d-block"
                    />
                  </div>
                </div>
                <div className="fs-5 d-flex">
                  01 <hr className="w15 mx-2" />
                  07
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h1 className="fontbold fs-3 ">
                  <q>
                    Very discreet and professional and attentive to the client.
                    A complete and beneficial treatment. I saw benefits quickly.
                  </q>
                </h1>
                <div className="d-flex align-items-center  py-5  ">
                  <img
                    src={u3}
                    alt="imgesUser"
                    className="img-fluid rounded-circle userImg"
                  />
                  <div className="ps-3">
                    <span className="fs-5">Isabel.</span>
                    <img
                      src={userRating}
                      alt="imgesUser"
                      className="img-fluid  d-block"
                    />
                  </div>
                </div>
                <div className="fs-5 d-flex">
                  02 <hr className="w15 mx-2" />
                  07
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h1 className="fontbold fs-3 ">
                  <q>
                    I feel like wrapping myself in cotton wool so that nothing
                    will change. It's been so long since I had a respite from
                    pain. I thought I would have to endure this forever. It's
                    like a little miracle!
                  </q>
                </h1>
                <div className="d-flex align-items-center  py-5  ">
                  <img
                    src={u4}
                    alt="imgesUser"
                    className="img-fluid rounded-circle userImg"
                  />
                  <div className="ps-3">
                    <span className="fs-5">Denis M., Firefighter</span>
                    <img
                      src={userRating}
                      alt="imgesUser"
                      className="img-fluid  d-block"
                    />
                  </div>
                </div>
                <div className="fs-5 d-flex">
                  03 <hr className="w15 mx-2" />
                  07
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h1 className="fontbold fs-3 ">
                  <q>
                    Luc has this great ability to provide care while maintaining
                    a calm and trusting environment. With each treatment, I
                    understood what was happening, he always took the time to
                    answer my many questions. Today, I walk on my two legs, I
                    have never hesitated to recommend Luc Gagnon to my friends
                    and family and they all rave about it. thanked.
                  </q>
                </h1>
                <div className="d-flex align-items-center  py-5  ">
                  <img
                    src={u5}
                    alt="imgesUser"
                    className="img-fluid rounded-circle userImg"
                  />
                  <div className="ps-3">
                    <span className="fs-5">
                      Constance R., Group facilitator and trainer
                    </span>
                    <img
                      src={userRating}
                      alt="imgesUser"
                      className="img-fluid  d-block"
                    />
                  </div>
                </div>
                <div className="fs-5 d-flex">
                  04 <hr className="w15 mx-2" />
                  07
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h1 className="fontbold fs-3">
                  <q>
                    I recently underwent osteopathic treatment and I am
                    absolutely delighted with the results! My osteopath was
                    incredibly knowledgeable and caring, and was able to relieve
                    my pain and improve my mobility significantly.
                  </q>
                </h1>
                <div className="d-flex align-items-center  py-5  ">
                  <img
                    src={u1}
                    alt="imgesUser"
                    className="img-fluid rounded-circle userImg"
                  />
                  <div className="ps-3">
                    <span className="fs-5">Maria B.</span>
                    <img
                      src={userRating}
                      alt="imgesUser"
                      className="img-fluid  d-block"
                    />
                  </div>
                </div>
                <div className="fs-5 d-flex">
                  05 <hr className="w15 mx-2" />
                  07
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h1 className="fontbold fs-3 ">
                  <q>
                    I must say that I am pleasantly surprised by the results of
                    my osteopathy treatment! My osteopath immediately put me at
                    ease and took the time to listen to my concerns. After the
                    session, I felt a great relief from my pain and a feeling of
                    general relaxation. I feel like I'm on cloud nine!
                  </q>
                </h1>
                <div className="d-flex align-items-center  py-5  ">
                  <img
                    src={u6}
                    alt="imgesUser"
                    className="img-fluid rounded-circle userImg"
                  />
                  <div className="ps-3">
                    <span className="fs-5">Alan T.</span>
                    <img
                      src={userRating}
                      alt="imgesUser"
                      className="img-fluid  d-block"
                    />
                  </div>
                </div>
                <div className="fs-5 d-flex">
                  06 <hr className="w15 mx-2" />
                  07
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h1 className="fontbold fs-3 ">
                  <q>
                    I tried osteo for the first time and I must say that it was
                    really effective! I could feel an immediate improvement in
                    my pain and my posture, and my osteo was super friendly and
                    attentive. I recommend can't wait!
                  </q>
                </h1>
                <div className="d-flex align-items-center  py-5  ">
                  <img
                    src={u7}
                    alt="imgesUser"
                    className="img-fluid rounded-circle userImg"
                  />
                  <div className="ps-3">
                    <span className="fs-5">Carlos Gomez</span>
                    <img
                      src={userRating}
                      alt="imgesUser"
                      className="img-fluid  d-block"
                    />
                  </div>
                </div>
                <div className="fs-5 d-flex">
                  07 <hr className="w15 mx-2" />
                  07
                </div>
              </SwiperSlide>

              <div className="text-end ">
                {" "}
                <div className="leftArrow bgy rounded-circle d-inline-block p-3">
                  <FaArrowLeft className="text-white fs-3" />
                </div>
                <div className="rightArrow   bgy ms-2 rounded-circle d-inline-block p-3">
                  <FaArrowRight className="text-white fs-3" />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Testimonials;
