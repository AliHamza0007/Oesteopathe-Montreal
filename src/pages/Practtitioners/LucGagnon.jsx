import Layout from "../../components/Layout";
import "../../styles/Practitioners.css";
import lucgagnon from "../../assets/Practitioners/lucgagnon.jpeg";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import careNav2 from "../../assets/imgCare/careNav2.jpeg";

import ql from "../../assets/imgAbout/quoteLeft.webp";
import qr from "../../assets/imgAbout/quoteRight.webp";
import { Fade, Zoom } from "react-reveal";
const LucGagnon = () => {
  return (
    <Layout>
      <div className="py-5 bgg">
        <div className="container my-5 py-5 text-center justify-content-center align-items-center ">
          <Fade bottom duration={2000}>
            <h1 className="display-fontbold  text-white h1">Luc Gagnon</h1>
          </Fade>
          <img
            className="img-fluid rounded-5 Michael"
            src={lucgagnon}
            alt="Michael"
          />
        </div>
      </div>

      <div className="container py-5 px-lg-0 px-3 ">
        <div className="py-5 justify-content-center align-items-center text-center">
          <Fade bottom>
            <h1 className="cg fontbold">Osteopath</h1>
            <p className="pt-5 text-secondary h5">
              Before becoming an osteopath in 2007, Luc explored different
              manual approaches <br /> in order to understand the role that
              manual therapy could play in pain <br /> management.
            </p>
          </Fade>
          <Fade delay duration={1000}>
            {" "}
            <Link
              className="nav-link d-inline-block mt-4 bgy mb-3  rounded-pill py-1 px-4  text-dark"
              to="/appointment"
            >
              Click here to make an appointment
            </Link>
          </Fade>
        </div>
        <div className="contentTeam    text-secondary">
          <h2 className="cg fontbold ">Professional</h2>
          <h5>
            Physiotherapy, shiatsu, approach to pregnant women, trigger points,
            fasciatherapy, DNM and specialized exercises for the back have,
            among other things, enriched her professional experience. On an
            annual basis, Luc invests in various continuing education courses in
            osteopathy in order to broaden his horizons, for the benefit of the
            people who consult him.
          </h5>
        </div>
        <div className="contentTeam py-2   text-secondary">
          <h2 className="cg fontbold  ">Fellowship</h2>
          <h5>
            In addition to teaching in different colleges, Luc pursued a
            FELLOWSHIP in Belgium EVOST from 2013 to 2017. This FELLOWSHIP
            allowed him to better understand how and why, for similar pains,
            care needs to be adapted and personalized to each person who
            consults.
          </h5>
        </div>

        <div className="contentTeam pt-5   text-secondary">
          <h2 className="cg fontbold">Certainty</h2>
          <h5>
            Finally, through the various training courses that Luc has
            completed, he has become certain that pain can only be managed
            effectively if there is a therapeutic alliance between the patient
            and the caregiver. Also, it encourages discussions in order to
            clearly identify the different aspects that could justify and/or
            hinder a return to normal.
          </h5>
        </div>
        <div className="bg-light px-4 py-5 position-relative my-5 text-center">
          <img src={ql} className="img-fluid ql" alt="img" />
          <img src={qr} className="img-fluid qr" alt="img" />

          <h3 className="px-4 cg fs-2 quoteText fontbold">
            “Time fixes things, my role is to make this interval as comfortable
            as possible. » LG
          </h3>
        </div>
      </div>

      <div className="bg-light">
        <div className="container-fluid  p-md-5 p-3">
          <div className="row py-5">
            <div className="col-md-6 col-12 pe-lg-5">
              <Zoom duration={1000}>
                <img
                  src={careNav2}
                  alt="img "
                  className="img-fluid rounded-4 h-100 w-100"
                />
              </Zoom>
            </div>
            <Fade bottom duration={1000}>
              <div className="col-md-6 col-12 ps-lg-5 ">
                <h1 className="cg fontbold py-3">
                  Prevention & <br /> Appropriate Treatments
                </h1>

                <h5 className="text-secondary pe-md-4">
                  Osteopathy considers the body as a whole, taking into account
                  the complex interactions between the different parts.
                  <br /> The practitioner seeks to identify the underlying
                  causes of symptoms rather than just treating the symptoms
                  themselves.
                </h5>

                <Fade bottom duration={2000}>
                  {" "}
                  <div className="d-flex pt-5 align-items-center">
                    <i className="fa fa-phone text-white ps-2 fs-1"> </i>
                    <div className="ps-5 cg fs-5 Inter">
                      Auxilium Integrative Health
                      <br />
                      514 295-0488
                    </div>
                  </div>
                </Fade>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="bgg py-5 px-md-4 text-white">
        <div className="container-fluid p-md-5 p-3">
          <Fade delay bottom duration={1000}>
            <div className="row px-3 d-flex justify-content-between ">
              <div className="col-md-5 col-12 mb-3">
                <h1 className=" display-6">
                  <b>
                    Your Professional
                    <br /> Osteopath In
                    <br /> Montreal
                  </b>
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
                    <h5 className="fontbold">Is Osteopathy Painful?</h5>
                    <FaAngleDown className="fs-4 angle" />
                  </div>
                  <h5 className="pt-3  fs-5  dropdown-menu">
                    Osteopathy is generally a practice that aims to relieve pain
                    and promote overall health without causing excessive pain.
                    However, it is important to note that each person may react
                    differently to the techniques used by the Osteopath, and
                    certain manipulations or pressures may sometimes be slightly
                    uncomfortable.
                    <br />
                    <br />
                    It is common to feel a feeling of slight tension or pressure
                    during osteopathic manipulations. This may feel like a
                    feeling of stretching or loosening of muscle tissue and
                    joints. However, Osteopaths are trained to work within the
                    patient's comfort limits and to adapt their techniques
                    accordingly.
                    <br />
                    <br />
                    It is important to communicate openly with your Osteopath
                    and let them know of any pain or discomfort you may feel
                    during treatment. They will be able to adjust their
                    techniques and approach to ensure your comfort and safety.
                    <br />
                    <br />
                    In some cases, slight bruising may appear after an
                    Osteopathy session, but they are generally benign and
                    disappear quickly. If you have any particular concerns
                    regarding pain or discomfort during an Osteopathy session,
                    please do not hesitate to discuss them with your
                    practitioner.
                    <br />
                    <br />
                    It is also important to choose a qualified and experienced
                    Osteopath, as this can help to minimize the risk of
                    excessive pain or discomfort during treatment. Do not
                    hesitate to ask questions about the approach and techniques
                    used by the Osteopath before starting treatment, to ensure
                    that you are comfortable with their approach.
                    <br />
                    <br />
                    It should be noted that Osteopathy is a gentle practice and
                    generally well tolerated by most patients.
                    <br />
                    <br />
                    If you have specific concerns regarding pain or discomfort,
                    it is recommended to consult us to discuss your needs and
                    expectations before beginning treatment.
                  </h5>
                </div>
                <Fade bottom duration={2000}>
                  <div className="dropdown mb-3 drdopt ">
                    <div
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      type="button"
                      className="d-flex justify-content-between dropdownButton"
                    >
                      <h5 className="fontbold">
                        What are thet health benifits of Osteopathy?
                      </h5>
                      <FaAngleDown className="fs-4 angle" />
                    </div>
                    <h5 className="pt-3  fs-5  dropdown-menu">
                      Osteopathy offers many health benefits. Here are some of
                      the main benefits:
                      <br />
                      <br />
                      1. Pain relief: Osteopathy is often sought to relieve
                      muscle and joint pain, whether chronic or acute.
                      Osteopaths use manual techniques to help reduce
                      discomfort, improve mobility and promote healing.
                      <br />
                      <br />
                      2. Improved mobility: Osteopathy can help restore and
                      improve mobility of the joints and tissues of the body.
                      This can be especially beneficial for people with
                      stiffness, movement limitations, or posture problems.
                      <br />
                      <br />
                      3. Stress management: The techniques used in Osteopathy
                      can help relax the body and reduce muscle tension, which
                      can contribute to stress management. Balance and harmony
                      between body and mind can be promoted through regular
                      osteopathy sessions.
                      <br />
                      <br />
                      4. Promoting Blood Circulation: Osteopathic manipulations
                      can help stimulate blood circulation throughout the body.
                      This promotes the delivery of oxygen and essential
                      nutrients to the tissues, which can contribute to healing
                      and regeneration.
                      <br />
                      <br />
                      5. Strengthening the immune system: Osteopathy can help
                      strengthen the immune system by promoting balance and
                      overall health of the body. By improving circulation and
                      reducing tension, Osteopathy can help the body better
                      defend itself against infections and illnesses.
                      <br />
                      <br />
                      6. Injury Prevention: By identifying and treating
                      imbalances and dysfunctions in the body, Osteopathy can
                      help prevent long-term injuries. By improving mobility and
                      optimizing musculoskeletal functioning, Osteopathy helps
                      maintain a more resilient and flexible body.
                      <br />
                      <br />
                      7. Improvement of general well-being: Osteopathy aims to
                      treat the body as a whole and to promote a state of
                      overall well-being. By balancing the different parts of
                      the body, Osteopathy can improve quality of life, stress
                      management and general health.
                      <br />
                      <br />
                      It should be noted that the specific benefits of
                      Osteopathy may vary from person to person, and it is
                      important to consult with us to discuss your needs and
                      determine how Osteopathy may benefit you individually.
                    </h5>
                  </div>
                </Fade>{" "}
                <Fade bottom duration={3000}>
                  <div className="dropdown mb-3 drdopt ">
                    <div
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      type="button"
                      className="d-flex justify-content-between dropdownButton"
                    >
                      <h5 className="fontbold">Is Osteopathy safe?</h5>
                      <FaAngleDown className="fs-4 angle" />
                    </div>
                    <h5 className="pt-3  fs-5  dropdown-menu">
                      Osteopathy is considered a safe practice when carried out
                      by qualified and competent professionals.
                      <br />
                      <br />
                      Osteopaths are extensively trained to understand how the
                      human body works, manipulation techniques and appropriate
                      indications for each person.
                      <br />
                      <br />
                      During an Osteopathy session, the Osteopath carries out a
                      thorough assessment of your state of health, your medical
                      history and your specific symptoms.
                      <br />
                      <br />
                      This allows him to personalize treatment based on your
                      individual needs. It is essential to communicate clearly
                      with your Osteopath and let them know of any health
                      issues, pain or concerns before and during the session.
                      This allows the Osteopath to adapt the techniques used and
                      ensure that the treatment is safe and appropriate for you.
                      <br />
                      <br />
                      It is important to note that although Osteopathy is
                      generally safe, there may be contraindications or
                      limitations in some cases. For example, if you have an
                      underlying medical condition, a recent injury, bone
                      fragility or if you are pregnant, the Osteopath will need
                      to take these factors into account during treatment.
                      <br />
                      <br />
                      If in doubt, it is recommended to consult your healthcare
                      professional, your attending physician or seek the advice
                      of a qualified osteopath.
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

export default LucGagnon;
