import Layout from "../../components/Layout";
import "../../styles/Practitioners.css";
import chirterlle from "../../assets/Practitioners/chirterlle.png";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ql from "../../assets/imgAbout/quoteLeft.webp";
import qr from "../../assets/imgAbout/quoteRight.webp";
import { Fade, Zoom } from "react-reveal";
const Christelle = () => {
  return (
    <Layout>
      <div className="py-5 bgg">
        <div className="container my-5 py-5 text-center justify-content-center align-items-center ">
          <h1 className="display-1 fontbold   text-white h1">
            <Fade bottom duration={2000}>
              Christelle Binga
            </Fade>
          </h1>
          <img
            className="img-fluid rounded-5  christelle"
            src={chirterlle}
            alt="Michael"
          />
        </div>
      </div>

      <div className="container py-5 px-lg-0 px-3 ">
        <div className="py-5 justify-content-center align-items-center text-center">
          <h1 className="cg fontbold">Massage Therapist</h1>
          <p className="pt-5 text-secondary h5">
            Christelle is passionate about her work and devoted to the people
            who come to
            <br /> consult her.
          </p>
          <Fade bottom duration={2000} delay>
            <Link
              className="nav-link d-inline-block mt-1 bgy mb-3  rounded-pill py-1 px-4  text-dark"
              to="/appointment"
            >
              {" "}
              Click here to make an appointment
            </Link>
          </Fade>{" "}
        </div>
        <div className="contentTeam    text-secondary">
          <h2 className="cg  fontbold ">Professional</h2>
          <h5>
            <b>
              Endowed with a certain humanism, we quickly feel confident and
              secure with her.
            </b>
          </h5>
          <h5>
            <i>
              Mixing the vibrations of Korean relaxation, the pressure of Zen
              shiatsu and the slow, encompassing movements of oil massage, the
              massages offered can, at your request:
            </i>
          </h5>
          <h6 className="px-3 d-flex  align-items-center  rounded-pill">
            <span className="fs-2 cy"> &#8226;</span>
            <i className="fs-5 ps-3 ">
              Start with a brief meditation to calm your mind{" "}
            </i>
          </h6>
          <h6 className="px-3 d-flex  align-items-center  rounded-pill">
            <span className="fs-2 cy"> &#8226;</span>
            <i className="fs-5 ps-3 ">
              Be enhanced with essential oils which increase the effects of
              relaxation by reducing nervous and muscular tension{" "}
            </i>
          </h6>
          <h5 className="pt-5 ">
            <i className="Quicksand">
              Do not wait any longer ! and treat yourself to your relaxation
              bubble: it will be my pleasure to help you regain your serenity.
              <br />
              <br />
              Looking forward to welcoming you !
              <br />
              <br />
              Christelle Binga: 438 543-0428
              <br />
              <br />
              Monday evenings from 7:00 p.m. to 9:30 p.m.
              <br />
              <br />
              Friday from 1:30 p.m. to 5 p.m.
            </i>
          </h5>
          <div className="bg-light px-4 py-5 position-relative my-5 text-center">
            <img src={ql} className="img-fluid ql" alt="img" />
            <img src={qr} className="img-fluid qr" alt="img" />

            <h3 className="px-4 cg fs-2 quoteText fontbold">
              The role of the massage therapist goes beyond a simple relaxation
              <br />
              massage.
            </h3>
          </div>
        </div>
        <div className="contentTeam py-2   text-secondary">
          <h1 className="cg py-1 fontbold ">
            The Role Of The Massage Therapist
          </h1>
          <h5>
            goes beyond a simple relaxation massage. As a trained practitioner,
            the massage therapist assesses the specific needs of each client and
            adapts their approach accordingly. It uses a variety of techniques
            and pressures to meet individual needs, such as Swedish massage,
            deep tissue massage, sports massage, lymphatic massage, etc.
          </h5>
        </div>
        <div className="contentTeam    text-secondary">
          <h3 className="cg  fontbold">
            The objectives of the massage therapist
          </h3>
          <h5>
            may vary depending on customer needs. They may include reducing
            stress, relieving muscle pain, improving blood circulation,
            promoting recovery from injury, increasing flexibility and mobility,
            and promoting well-being general.
          </h5>
        </div>
        <div className="contentTeam    text-secondary">
          <h3 className="cg  fontbold">In addition to massage techniques,</h3>
          <h5>
            The massage therapist may also recommend stretching exercises,
            postural advice, breathing techniques and lifestyle advice to help
            clients maintain and improve their health.
          </h5>
        </div>{" "}
      </div>

      <div className="bg-light">
        <div className="container-fluid  p-md-5 p-3">
          <div className="row py-5">
            <div className="col-md-6 col-12 pe-lg-5 position-relative">
              <Zoom duration={2000}>
                <img
                  src={chirterlle}
                  alt="img "
                  className="img-fluid  rounded-4 h-100 w-100"
                />

                <div className="rounded-4 playDiv shadow">
                  <div className="d-flex  align-items-center">
                    <div className="iconPLay me-4">
                      <i className=" fa fa-play"></i>
                    </div>
                    <h6 className="fw-bold cg">See the Vedio</h6>
                  </div>
                </div>
              </Zoom>
            </div>{" "}
            <div className="col-md-6 col-12 ps-lg-5 ">
              <Fade bottom duration={1000}>
                {" "}
                <h1 className="cg fontbold py-3">
                  Prevention & <br /> Appropriate Treatments
                </h1>
                <h5 className="text-secondary">
                  A massage therapist is a health professional specializing in
                  the practice of therapeutic massage.
                  <br />
                  <br />
                  The massage therapist uses manual techniques to manipulate the
                  body's soft tissues, such as muscles, tendons, ligaments and
                  fascia, with the goal of promoting relaxation, stress
                  reduction and relief of muscular tension.{" "}
                </h5>
                <Fade bottom delay duration={1000}>
                  <div className="d-flex pt-5 align-items-center ">
                    <i className="fa fa-phone text-white ps-2 fs-1"> </i>
                    <div className="ps-5 fs-5">
                      Christell Binga
                      <br />
                      <span className="email cg fontbold">
                        eleahmassage@gmail.com
                      </span>
                    </div>
                  </div>
                </Fade>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div className="bgg py-5 px-md-3 text-white">
        <div className="container-fluid p-md-5 p-3">
          <Fade bottom duration={1000}>
            <div className="row px-3 d-flex justify-content-between ">
              <div className="col-md-5 col-12 mb-3">
                <h1 className="display-6">
                  <b>
                    {" "}
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
                    <h5 className="fontbold">
                      what happens during a session of osteopahy?
                    </h5>
                    <FaAngleDown className="fs-4 angle" />
                  </div>
                  <h5 className="pt-3  fs-5  dropdown-menu">
                    An Osteopathy session generally takes place in several
                    stages, with a personalized approach based on the specific
                    needs of each patient.
                    <br />
                    <br />
                    Here is an overview of what you can expect during an
                    Osteopathy session:
                    <br />
                    <br />
                    1. History: The Osteopath will begin by asking you detailed
                    questions about your medical history, your current symptoms,
                    your health history, your lifestyle of life, etc. This helps
                    gather important information to better understand your
                    condition and tailor treatment accordingly.
                    <br />
                    <br />
                    2. Assessment: The Osteopath will then carry out a thorough
                    physical assessment. He will examine your posture, your
                    mobility, your alignment and palpation of different parts of
                    your body to detect imbalances, movement restrictions and
                    tensions. This assessment may also include specific tests to
                    assess musculoskeletal and neurological function.
                    <br />
                    <br />
                    3. Treatment: Once the assessment is complete, the Osteopath
                    will use specific manual techniques to treat areas of the
                    body exhibiting dysfunctions or imbalances. These techniques
                    may include gentle joint manipulations, mobilizations,
                    stretching, rhythmic pressing, myofascial release
                    techniques, etc. The Osteopath will adapt the techniques
                    according to your individual needs and comfort.
                    <br />
                    <br />
                    4. Advice and recommendations: At the end of the session,
                    the Osteopath can provide you with advice on posture,
                    physical exercise, ergonomics, stress management, injury
                    prevention, etc. These recommendations are intended to
                    optimize treatment results and support your overall
                    well-being.
                    <br />
                    <br />
                    The duration of an Osteopathy session can vary, but it
                    generally lasts between 45 minutes and 1 hour. The frequency
                    and number of sessions needed will depend on the nature of
                    your condition, its severity and your individual response to
                    treatment. Your Osteopath will be able to guide you on the
                    optimal duration and frequency of sessions.
                    <br />
                    <br />
                    Throughout the session, it is important to communicate
                    openly with your Osteopath and let them know of any
                    discomfort, pain or concerns you may feel. This allows the
                    Osteopath to adjust the techniques and offer you a treatment
                    adapted to your needs.
                    <br />
                    <br />
                    It should be noted that each Osteopath may have slightly
                    different approaches, but overall the aim of the session is
                    to promote balance, mobility and overall health of the body.
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
                        Osteopathy for anxiety and stress disorders
                      </h5>
                      <FaAngleDown className="fs-4 angle" />
                    </div>
                    <h5 className="pt-3  fs-5  dropdown-menu">
                      Osteopathy can be a useful complementary approach to help
                      manage anxiety and stress disorders. Although it cannot
                      replace appropriate medical treatment, Osteopathy can
                      offer physical and emotional benefits to relieve the
                      symptoms associated with these disorders.
                      <br />
                      <br />
                      Here is how Osteopathy can help manage anxiety and stress:
                      <br />
                      <br />
                      1. Reduction of muscle tension: Anxiety and stress can
                      lead to excessive muscle tension, particularly in the
                      shoulders, neck and back . Manual techniques used in
                      Osteopathy, such as gentle manipulations, stretching and
                      myofascial releases, can help release this muscular
                      tension, thus promoting relaxation and relief of
                      associated pain.
                      <br />
                      <br />
                      2. Improved breathing: When we are anxious or stressed,
                      our breathing tends to become more shallow and rapid.
                      Osteopathy can help improve mobility of the ribs, rib cage
                      and diaphragm, thus promoting deeper and more regular
                      breathing. Calmer breathing can help calm the mind and
                      reduce anxiety.
                      <br />
                      <br />
                      3. Balance of the autonomic nervous system: Osteopathy can
                      influence the autonomic nervous system, which is
                      responsible for regulating stress. Osteopathic
                      manipulations can help rebalance the sympathetic and
                      parasympathetic responses of the nervous system, thereby
                      promoting relaxation and reducing anxiety.
                      <br />
                      <br />
                      4. Improved blood circulation: The techniques used in
                      Osteopathy can help stimulate blood circulation throughout
                      the body. This promotes the delivery of oxygen and
                      essential nutrients to the tissues, contributing to muscle
                      relaxation and a better response to stress.
                      <br />
                      <br />
                      5. Promotion of overall well-being: Osteopathy aims to
                      treat the body as a whole, seeking to restore balance and
                      harmony. Osteopathy sessions can promote a state of deep
                      relaxation, reduce physical and emotional tension, and
                      improve overall well-being. This can contribute to better
                      management of anxiety and stress on a daily basis.
                      <br />
                      <br />
                      It is important to emphasize that Osteopathy does not
                      replace conventional medical approaches for the treatment
                      of anxiety and stress. If you suffer from anxiety
                      disorders or chronic stress, it is recommended that you
                      consult a qualified healthcare professional for an
                      accurate diagnosis and appropriate treatment plan.
                      <br />
                      <br />
                      Osteopathy can be used in addition to medical treatment,
                      under the supervision and coordination of the health
                      professionals concerned.
                    </h5>
                  </div>
                </Fade>

                <Fade bottom duration={3000}>
                  {" "}
                  <div className="dropdown mb-3 drdopt ">
                    <div
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      type="button"
                      className="d-flex justify-content-between dropdownButton"
                    >
                      <h5 className="fontbold">
                        Osteopathy for sleep disorders
                      </h5>
                      <FaAngleDown className="fs-4 angle" />
                    </div>
                    <h5 className="pt-3  fs-5  dropdown-menu">
                      Osteopathy can be a beneficial approach to help improve
                      sleep disorders. Although it cannot solve all sleep
                      problems, Osteopathy can help create favorable conditions
                      for more restful sleep.
                      <br />
                      <br />
                      Here is how Osteopathy can be used to help treat sleep
                      disorders:
                      <br />
                      <br />
                      1. Muscle relaxation: Osteopathy can help relieve
                      accumulated muscular tension in the body, thereby
                      promoting relaxation and relaxation. Manual techniques
                      used in Osteopathy, such as gentle manipulations,
                      stretching and myofascial releases, can help release
                      muscular tension that can disrupt sleep.
                      <br />
                      <br />
                      2. Balance of the nervous system: Osteopathy can act on
                      the nervous system by helping to rebalance sympathetic and
                      parasympathetic responses. By promoting activation of the
                      parasympathetic system, responsible for relaxation and
                      rest, Osteopathy can help induce a state of relaxation
                      conducive to falling asleep and quality sleep.
                      <br />
                      <br />
                      3. Improved Blood Circulation: Osteopathic techniques can
                      help stimulate blood circulation throughout the body,
                      including the brain. This promotes the delivery of oxygen
                      and essential nutrients to the brain, which can help
                      regulate sleep cycles and promote deeper, more restful
                      sleep.
                      <br />
                      <br />
                      4. Structural alignment: Osteopathy aims to restore
                      balance and structural alignment to the body. Imbalances
                      in body structure, such as postural problems or joint
                      tension, can disrupt sleep. The Osteopath can work on
                      these imbalances using specific techniques to help restore
                      alignment and promote better quality sleep.
                      <br />
                      <br />
                      5. Stress management: Osteopathy can also help manage
                      stress, which is often a contributing factor to sleep
                      disorders. Osteopathic manipulative techniques, combined
                      with stress management counseling, can help reduce stress
                      levels and promote a state of relaxation conducive to
                      sleep.
                      <br />
                      <br />
                      It is important to note that Osteopathy does not replace
                      conventional medical approaches for the treatment of sleep
                      disorders. If you suffer from persistent sleep disorders,
                      it is recommended that you consult a healthcare
                      professional who specializes in sleep disorders for an
                      accurate diagnosis and appropriate treatment plan.
                      <br />
                      <br />
                      Osteopathy can be used in addition to medical treatment,
                      under the supervision and coordination of the health
                      professionals concerned.
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

export default Christelle;
