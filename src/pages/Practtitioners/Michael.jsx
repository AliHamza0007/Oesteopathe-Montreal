import Layout from "../../components/Layout";
import "../../styles/Practitioners.css";
import micheal from "../../assets/Practitioners/micheal.jpeg";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import careNav3 from "../../assets/imgCare/careNav3.jpeg";
import { Fade, Zoom } from "react-reveal";

const Michael = () => {
  return (
    <Layout>
      <div className="py-5 bgg">
        <div className="container my-5 py-5 text-center justify-content-center align-items-center ">
          <Fade duration={2000} bottom>
            <h1 className="display-1 fontbold  text-white h1">Michael Daras</h1>
          </Fade>
          <img
            className="img-fluid rounded-5 Michael"
            src={micheal}
            alt="Michael"
          />
        </div>
      </div>

      <div className="container py-5 px-lg-0 px-3 ">
        <div className="py-5 justify-content-center align-items-center text-center">
          <Fade bottom duration={1000}>
            <h1 className="cg fontbold">
              Osteopath – Naturopath – Massage
              <br /> Therapist
            </h1>
            <p className="pt-5 text-secondary h5">
              Before becoming an osteopath Michaël worked in the legal, banking
              and <br />
              educational fields. He arrived in Montreal with a suitcase and
              chronic sciatica for
              <br /> more than 5 years.
            </p>
          </Fade>
          <Fade bottom delay>
            <Link
              className="nav-link d-inline-block mt-4 bgy mb-3  fw-bold rounded-pill py-1 px-4  text-dark"
              to="/appointment"
            >
              Click here to make an appointment
            </Link>
          </Fade>
        </div>
        <div className="contentTeam    text-secondary">
          <h2 className="cg fontbold ">
          Suffering
          </h2>
          <h5>
            <q>Unfortunately</q> after treatment with cortisone injections and
            physiotherapy sessions, the pain was still present and his quality
            of life was still just as difficult. A friend offers to accompany
            her to a tree-picker in a village after Trois-Rivières.
          </h5>
        </div>
        <div className="contentTeam py-2   text-secondary">
          <h2 className="cg fontbold ">
            Retraining
          </h2>
          <h5>
            Following the first treatment with the therapist, Michaël felt
            immediate relief. Shaken by the simplicity with which he helped him,
            he returns to see him for a second session. This time, he wants to
            learn more about his profession. If it was not a gift from heaven
            with which he treated him, he would in turn like to train himself to
            help suffering and desperate people as he was before.
          </h5>
          <h5>
            The tree picker simply told him to learn Shiatsu and Osteopathy.
          </h5>
          <h5>
            <b>
              Michaël trained in Shiatsu for 1 year and Osteopathy for 6 years.
              In addition to this basic training, he has completed postgraduate
              training which allows him to help people of all ages effectively,
              quickly and without risk.
            </b>
          </h5>
        </div>

        <div className="contentTeam py-5   text-secondary">
          <h2 className="cg fontbold ">
            Consecration
          </h2>
          <h5>
            In cases of osteopathic dysfunction, Michaël provides treatment with
            results in a fairly short time. He states that if the person does
            not have a clear improvement in their pain in 3 sessions he is
            convinced that there is something more serious. He directs people to
            a doctor when the symptoms require a diagnosis or medical treatment
            or when he notes a persistence or worsening of symptoms or when the
            disorders presented exceed his field of expertise.
          </h5>
          <h5>
            In addition to osteopathic care, Michaël provides vital hygiene
            advice with the aim of ensuring that the client maintains health and
            independence in the long term. He favors typical approaches such as
            nutritional therapy and lifestyle changes.{" "}
          </h5>
          <h5>
            The different approaches that allow it to achieve its objectives
            include Naturopathy , Trigger Point , Deep tissue massage, DNM ,
            Dorn Therapy and Niromathé . In addition, Michaël also studied
            Pediatric and Obstetric Osteopathy for children and adolescents.
            This allows it to detect and correct possible imbalances which can
            strongly impact the quality of life of children at certain periods
            of their development.
          </h5>
          <h5>
            <b>
              It is equipped with software, BHA ( Body Health Analyzer) which
              makes it possible to estimate heart rate variability and stress
              level as well as a person's biological age. If the person would
              like to know a practice that would allow them to better manage
              their condition, Michaël approaches Cardiac Coherence to be able
              to optimally manage stress and emotions. This is the best way to
              achieve physical and emotional balance quickly.
            </b>
          </h5>
        </div>
      </div>

      <div className="bg-light">
        <div className="container-fluid  p-md-5 p-3">
          <div className="row py-5">
            <div className="col-md-6 col-12 pe-lg-5">
              <Zoom duration={2000}>
                <img
                  src={careNav3}
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

                <h5 className="text-secondary">
                  Osteopathy considers the body as a whole, taking into account
                  the complex interactions between the different parts.
                  <br /> The practitioner seeks to identify the underlying
                  causes of symptoms rather than just treating the symptoms
                  themselves.
                </h5>
                <Fade bottom duration={1000}>
                  <div className="d-flex pt-5 align-items-center">
                    <i className="fa fa-phone text-white ps-2 fs-1"> </i>
                    <div className="ps-5 fs-5">
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

      <div className="bgg py-5 text-white">
        <div className="container-fluid p-md-5 p-3">
          <Fade bottom duration={1000}>
            <div className="row px-3 d-flex justify-content-between ">
              <div className="col-md-5 col-12 mb-3">
                <h1 className="fw-normal">
                  Your Professional
                  <br /> Osteopath In
                  <br /> Montreal
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
                    <h5 className="fw-bold">What is an Osteopath?</h5>
                    <FaAngleDown className="fs-4 angle" />
                  </div>
                  <h5 className="pt-3  fs-5  dropdown-menu">
                    An osteopath is a health professional who practices
                    osteopathy, a therapeutic approach based on gentle manual
                    manipulations.
                    <br /> <br />
                    Its role is to diagnose, treat and prevent dysfunctions of
                    the body by promoting balance and mobility of the different
                    anatomical structures.
                    <br />
                    The osteopath works closely with the subject to understand
                    their medical history, assess their symptoms and perform a
                    thorough physical examination.
                    <br />
                    Using their hands, the osteopath applies specific techniques
                    to restore the body's functionality, relieve pain, promote
                    healing and optimize the subject's overall well-being.
                  </h5>
                </div>
                <Fade bottom delay>
                  <div className="dropdown mb-3 drdopt ">
                    <div
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      type="button"
                      className="d-flex justify-content-between dropdownButton"
                    >
                      <h5 className="fw-bold">
                        Definition and origins of osteopathy
                      </h5>
                      <FaAngleDown className="fs-4 angle" />
                    </div>
                    <h5 className="pt-3  fs-5  dropdown-menu">
                      Osteopathy is a therapeutic approach based on the
                      principle that the body has an innate capacity to
                      self-heal and maintain optimal balance.
                      <br /> <br />
                      It is based on gentle and precise manual manipulations
                      aimed at treating body dysfunctions and promoting general
                      well-being.
                      <br />
                      The origins of osteopathy date back to the 19th century,
                      when American physician Andrew Taylor Still developed this
                      alternative medical discipline. He questioned conventional
                      medical treatments of the time and sought more natural,
                      non-invasive methods to treat patients.
                      <br />
                      The basic concept of osteopathy is that health depends on
                      the proper functioning of all structures in the body,
                      including bones, muscles, joints, nerves and organs.
                      <br />
                      The osteopathic practitioner uses their hands to assess
                      and treat imbalances or movement restrictions that may
                      cause health problems.
                    </h5>
                  </div>
                </Fade>
                <Fade bottom duration={2000}>
                  <div className="dropdown mb-3 drdopt ">
                    <div
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      type="button"
                      className="d-flex justify-content-between dropdownButton"
                    >
                      <h5 className="fw-bold">
                        How Long does an osteopathy session last?
                      </h5>
                      <FaAngleDown className="fs-4 angle" />
                    </div>
                    <h5 className="pt-3  fs-5  dropdown-menu">
                      The duration of an osteopathy session can vary depending
                      on the practitioner and the specific needs of the person.
                      Generally, an osteopathy session lasts between 45 minutes
                      and an hour.
                      <br /> <br />
                      During the first consultation, the time may be slightly
                      longer, as the practitioner will perform a thorough
                      assessment of the patient's health, collect their medical
                      history and perform a detailed physical examination. This
                      initial step allows us to understand the subject's health
                      problems and establish an appropriate treatment plan.
                      Follow-up sessions can be shorter, generally around 45
                      minutes. <br />
                      During the session, the osteopath uses manual techniques
                      to assess and treat dysfunctions in the body, focusing on
                      the musculoskeletal, nervous and circulatory systems.
                      <br /> <br />
                      The practitioner works with their hands to perform
                      manipulations, mobilizations and specific techniques aimed
                      at restoring balance and mobility to the body. It is
                      important to note that the exact duration of a session may
                      vary depending on the needs of the subject, the complexity
                      of the condition being treated and the working method of
                      the practitioner. <br />
                      Some topics may require longer sessions, while others can
                      achieve satisfactory results in less time. It is
                      recommended to discuss the approximate duration of the
                      sessions with the osteopath when making an appointment.
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

export default Michael;
