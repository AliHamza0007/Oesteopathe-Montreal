import Layout from "../components/Layout";
import "../styles/About.css";
import team from "../assets/imgAbout/teamAbout.jpeg";
import ql from "../assets/imgAbout/quoteLeft.webp";
import qr from "../assets/imgAbout/quoteRight.webp";
import imgAbout from "../assets/imgAbout/imgAbout.webp";
import { FaAngleDown } from "react-icons/fa6";
import { Fade, Zoom } from "react-reveal";

const AboutUs = () => {
  return (
    <Layout>
      <div className="container py-5 ">
        <div className="row justify-content-md-between pt-5 mt-5 px-3">
          <Fade bottom>
            <div className="col-md-8 col-12  pe-md-5 text-secondary">
              <h1 className="fontbold display-1  cg mt-5">About Us</h1>
              <h5 className="py-4  fw-bold">
                Your Auxilium Integrative Health Clinic
              </h5>
              <h5>
                Welcome to our Montreal osteopathic clinic! We are delighted to
                welcome you to our space dedicated to health and well-being.
              </h5>
              <h5>
                Allow us to introduce you to our dedicated team of osteopaths
                who are ready to offer you quality care and help you achieve a
                healthy and balanced life.
              </h5>
            </div>
          </Fade>
          <Zoom duration={1500}>
            <div className="col-md-4 col-12 m-auto justify-content-center align-items-center px-4 ">
              <div className="row px-2 text-center py-5 rounded-4 bgg text-white">
                <div className=" col-12  mb-2 ">
                  <h1 className="cy cardHomecy">
                    <b>+20</b>
                  </h1>
                  <h5>years of experience</h5>
                </div>{" "}
                <div className="col-12  ">
                  <h1 className="cy cardHomecy">
                    <b>+20K</b>
                  </h1>
                  <h5>osteopathic care</h5>
                </div>
              </div>
            </div>
          </Zoom>
        </div>

        <div className="px-md-5 mx-md-5 px-3">
          <div className="text-center  py-4 mb-5">
            <img className="img-fluid rounded-1" src={team} alt="teamImg" />
          </div>
          <div className="contentTeam py-4   text-secondary">
            <h1 className="cg  fontbold">Meet Our Team</h1>
            <h5>
              My name is Luc, a passionate osteopath, and ten years ago, I had
              the pleasure of meeting Michael, another talented and dedicated
              osteopath in Montreal.
            </h5>
            <h5>
              Our meeting was the starting point of a wonderful adventure which
              resulted in the opening of our osteopathy clinic.
            </h5>
            <h5>
              Together, we have joined forces and knowledge to create a warm and
              professional environment where our clients can find lasting relief
              their pain and achieve optimal well-being.
            </h5>{" "}
          </div>
          <div className="contentTeam py-4   text-secondary">
            <h3 className="cg fontbold ">
              Our complementary osteopathic approaches
            </h3>
            <h5>
              Michael and I each have our own osteopathic techniques, acquired
              through many years of study and practice.
            </h5>
            <h5>
              Our individual skills allow us to offer a comprehensive,
              complementary as well as holistic approach, while taking into
              account the needs and preferences of each person
            </h5>
          </div>

          <div className="bg-light py-5 position-relative my-5 text-center">
            <img src={ql} className="img-fluid ql" alt="img" />
            <img src={qr} className="img-fluid qr" alt="img" />

            <h3 className="px-5 fs-2 quoteText">
              By sharing our know-how, we have been able to
              <br /> help many customers resolve their health problems
              <br /> and regain an optimal quality of life.
            </h3>
          </div>
          <div className="contentTeam py-4   text-secondary">
            <h3 className="cg  fontbold">Listening and professionalism</h3>
            <h5>
              At our company, we attach great importance to listening
              attentively to our customers. Each person is unique, with their
              own health journey and specific concerns.
              <br />
              We firmly believe that the key to effective care lies in a
              thorough understanding of each patient and their individual needs.
            </h5>
            <h5>
              When you walk through the doors of our clinic, you will be greeted
              by a warm and caring team. We take the time to get to know you,
              listen to your concerns and answer all your questions.
              <br />
              Our personalized approach allows us to develop a treatment plan
              tailored to your unique situation, providing you with the best
              solutions for your overall well-being.
            </h5>
          </div>
          <div className="text-center">
            <img
              src={imgAbout}
              alt="img "
              className="img-fluid  imgAbout py-4"
            />
          </div>

          <div className="contentTeam py-4   text-secondary">
            <h3 className="cg  fontbold">Excellence in osteopathic care</h3>
            <h5>
              We are deeply passionate about our profession and committed to
              providing superior quality care to our clients. To achieve this,
              we are committed to keeping our skills up to date by following the
              latest research and advances in osteopathy.
              <br />
              We regularly participate in continuing education and professional
              conferences in order to expand our knowledge and offer the most
              advanced and adapted care to our clients.
            </h5>
            <h5>
              Whether you suffer from chronic pain, back pain, migraines or are
              simply looking to improve your overall well-being, we are here to
              support you.
            </h5>
            <h5 className="py-4">
              Through our osteopathic techniques and comprehensive approach, we
              can help you return to a pain-free life and achieve your long-term
              health goals.
            </h5>
          </div>
          <div className="contentTeam py-4   text-secondary">
            <h3 className="cg fontbold ">Make an appointment today</h3>
            <h5>
              We look forward to meeting you and helping you improve your
              quality of life through our osteopathic care. Make an appointment
              today and let our knowledgeable team support you on your wellness
              journey.
            </h5>
          </div>

          <div className="bg-light py-5 position-relative my-5 text-center">
            <img src={ql} className="img-fluid ql" alt="img" />
            <img src={qr} className="img-fluid qr" alt="img" />

            <h3 className="px-5 fs-2 quoteText">
              Please do not hesitate to contact us if you have any <br />{" "}
              questions or would like to know more about our <br /> services. We
              are here to help you live a happy, <br /> healthy, pain-free life.
            </h3>
          </div>
          <h5 className="py-2 mb-5">
            The team at your Auxilium Integrative Health clinic in Montreal
          </h5>
        </div>
      </div>

      <div className="bgg py-5 text-bg-danger">
        <div className="container-fluid px-md-5 py-5">
          <Fade bottom duration={1000}>
            <div className="row py-5 px-3">
              <div className="col-md-5 col-12 mb-3">
                <h1 className="fw-normal ">
                  Frequently Asked <br />
                  Questions About
                  <br /> Osteopathy
                </h1>
              </div>
              <div className="col-md-7 dropdownCol col-12">
                <div className="dropdown mb-3 drdopt ">
                  <div
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    type="button"
                    className="d-flex justify-content-between dropdownButton"
                  >
                    <h5 className="fw-bold">
                      Ostteopathy for joint and muscle pain
                    </h5>
                    <FaAngleDown className="fs-4 angle" />
                  </div>
                  <h5 className="pt-3  fs-5  dropdown-menu">
                    Osteopathy offers a holistic and effective approach to
                    relieving joint and muscle pain. Osteopathic practitioners
                    use gentle manual techniques to restore balance and mobility
                    to the body. Through precise manipulations, osteopathy
                    promotes natural healing and improves patients quality of
                    life. This therapeutic discipline is attracting renewed
                    interest due to its global approach and its positive results
                    in relieving musculoskeletal pain.
                  </h5>
                </div>
                <Fade bottom duration={2000}>
                  <div className="dropdown mb-3   drdopt ">
                    <div
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      type="button"
                      className="d-flex justify-content-between dropdownButton"
                    >
                      <h5 className="fw-bold">
                        Ostteopathy for headaches and migraines
                      </h5>
                      <FaAngleDown className="fs-4 angle" />
                    </div>
                    <h5 className="pt-3  fs-5  dropdown-menu">
                      Osteopathy offers a promising approach to relieving
                      headaches and migraines. Osteopathic practitioners work on
                      tensions and imbalances in the body, which can be
                      triggering factors for these disorders. Using gentle and
                      targeted manual techniques, osteopathy promotes muscle
                      relaxation, blood circulation and the release of blockages
                      that can contribute to pain. Many patients have
                      experienced a significant reduction in the frequency and
                      intensity of their headaches with this natural,
                      non-invasive approach.
                    </h5>
                  </div>
                </Fade>

                <Fade bottom duration={3000}>
                  <div className="dropdown mb-3   drdopt">
                    <div
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      type="button"
                      className="d-flex justify-content-between dropdownButton"
                    >
                      <h5 className="fw-bold">
                        Osteopathy for digestive disorders
                      </h5>
                      <FaAngleDown className="fs-4 angle" />
                    </div>
                    <h5 className="pt-3  fs-5  dropdown-menu">
                      Osteopathy is proving to be an encouraging solution for
                      people suffering from digestive disorders. Osteopaths use
                      manual techniques to assess and restore balance to the
                      digestive system, thus promoting better digestion. By
                      working on tension and imbalances in the body, they can
                      help reduce symptoms such as bloating, acid reflux and
                      abdominal pain. This natural and non-invasive approach
                      offers patients a promising alternative to improve their
                      digestive comfort and overall well-being.
                    </h5>
                  </div>
                </Fade>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
