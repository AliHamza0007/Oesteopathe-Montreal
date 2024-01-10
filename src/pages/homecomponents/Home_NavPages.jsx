import { Link } from "react-router-dom";
import backPain from "../../assets/imgsHome/backpain.jpg";
import legPain from "../../assets/imgsHome/legPain.jpg";
import stomachAches from "../../assets/imgsHome/stoachAches.jpg";
import migraines from "../../assets/imgsHome/migraines.jpg";
import shoulderPain from "../../assets/imgsHome/shoulderPain.jpg";
import neckPain from "../../assets/imgsHome/neckPain.jpg";
import { Fade } from "react-reveal";

const Home_NavPages = () => {
  return (
    <>
      <div className="tab-content cg pt-5">
        <div role="tabpanel" id="tab-1" className="tab-pane  show fade  ">
          {" "}
          <div className="container mt-5 py-5">
            <div className="row px-md-5   ">
              <div className="col-md-6 col-12 mb-4">
                <img
                  className="img-fluid  rounded-3"
                  src={backPain}
                  alt="IMg Home 1"
                />
              </div>{" "}
              <div className="col-md-6 col-12 mb-4  ps-md-5 px-3 py-5">
                <div className="px-3 py-1 justify-content-center rounded-pill  bgy d-inline">
                  <strong className="fs-2"> &#8226;</strong>
                  <strong className="fs-5 ps-2">Our cares</strong>
                </div>
                <h1 className=" fw-bolder pt-2">Back Pain</h1>
                <p className="display-6 fs-5 pt-3">
                  Blockages, spasms, discharges, lumbar sprain, localized or
                  radiating pain, herniated discs, sciatica, osteoarthritis...
                  are ailments that affect the back.
                </p>

                <Link className="nav-link d-inline-block  fs-5    ps-0 " to="">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div role="tabpanel" id="tab-2" className="tab-pane  show fade  ">
          {" "}
          <div className="container mt-5 py-5">
            <div className="row px-md-5   ">
              <div className="col-md-6 col-12 mb-4">
                <img
                  className="img-fluid  rounded-3"
                  src={legPain}
                  alt="IMg Home 1"
                />
              </div>{" "}
              <div className="col-md-6 col-12 mb-4  ps-md-5 px-3 py-5">
                <div className="px-3 py-1 justify-content-center rounded-pill  bgy d-inline">
                  <strong className="fs-2"> &#8226;</strong>
                  <strong className="fs-5 ps-2">Our cares</strong>
                </div>
                <h1 className=" fw-bolder pt-2">Leg Pain</h1>
                <p className="display-6 fs-5 pt-3">
                  Of muscular, vascular, and/or neurological origins, heaviness,
                  radiation, tingling, calf pain, can be relieved by your
                  osteopath.
                </p>

                <Link className="nav-link d-inline-block  fs-5    ps-0 " to="">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div role="tabpanel" id="tab-3" className="tab-pane  show fade  ">
          {" "}
          <div className="container mt-5 py-5">
            <div className="row px-md-5   ">
              <div className="col-md-6 col-12 mb-4">
                <img
                  className="img-fluid  rounded-3"
                  src={stomachAches}
                  alt="IMg Home 1"
                />
              </div>{" "}
              <div className="col-md-6 col-12 mb-4  ps-md-5 px-3 py-5">
                <div className="px-3 py-1 justify-content-center rounded-pill  bgy d-inline">
                  <strong className="fs-2"> &#8226;</strong>
                  <strong className="fs-5 ps-2">Our cares</strong>
                </div>
                <h1 className=" fw-bolder pt-2">Stomach Aches</h1>
                <p className="display-6 fs-5 pt-3">
                  Irritable bowel syndrome, stress and anxiety, constipation,
                  food intolerances, bloating, menstrual cramps can lead to
                  abdominal pain.
                </p>

                <Link className="nav-link d-inline-block  fs-5    ps-0 " to="">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div role="tabpanel" id="tab-4" className="tab-pane  show fade  ">
          {" "}
          <div className="container mt-5 py-5">
            <div className="row px-md-5   ">
              <div className="col-md-6 col-12 mb-4">
                <img
                  className="img-fluid  rounded-3"
                  src={migraines}
                  alt="IMg Home 1"
                />
              </div>{" "}
              <div className="col-md-6 col-12 mb-4  ps-md-5 px-3 py-5">
                <div className="px-3 py-1 justify-content-center rounded-pill  bgy d-inline">
                  <strong className="fs-2"> &#8226;</strong>
                  <strong className="fs-5 ps-2">Our cares</strong>
                </div>
                <h1 className=" fw-bolder pt-2">Migraines</h1>
                <p className="display-6 fs-5 pt-3">
                  Of muscular or vascular origin, migraines and headaches can be
                  linked to neck pain, jaw tension and pain, or digestive
                  disorders.
                </p>

                <Link className="nav-link d-inline-block  fs-5    ps-0 " to="">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div role="tabpanel" id="tab-5" className="tab-pane  show fade  ">
          <div className="container mt-5 py-5">
            <div className="row px-md-5   ">
              <div className="col-md-6 col-12 mb-4">
                <img
                  className="img-fluid  rounded-3"
                  src={shoulderPain}
                  alt="IMg Home 1"
                />
              </div>{" "}
              <div className="col-md-6 col-12 mb-4  ps-md-5 px-3 py-5">
                <div className="px-3 py-1 justify-content-center rounded-pill  bgy d-inline">
                  <strong className="fs-2"> &#8226;</strong>
                  <strong className="fs-5 ps-2">Our cares</strong>
                </div>
                <h1 className=" fw-bolder pt-2">Shoulder Pain</h1>
                <p className="display-6 fs-5 pt-3">
                  Sustained and repetitive work, sports, trauma, the shoulder
                  tendinitis, bursitis, capsulitis, dislocation, radiating, etc.
                </p>

                <Link className="nav-link d-inline-block  fs-5    ps-0 " to="">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div role="tabpanel" id="tab-6" className="tab-pane  show fade active ">
          {" "}
          <div className="container mt-5 py-5">
            <div className="row px-md-5   ">
              <div className="col-md-6 col-12 mb-4">
                <img
                  className="img-fluid  rounded-3"
                  src={neckPain}
                  alt="IMg Home 1"
                />
              </div>{" "}
              <div className="col-md-6 col-12 mb-4  ps-md-5 px-3 py-5">
                <div className="px-3 py-1 justify-content-center rounded-pill  bgy d-inline">
                  <strong className="fs-2"> &#8226;</strong>
                  <strong className="fs-5 ps-2">Our cares</strong>
                </div>
                <h1 className=" fw-bolder pt-2">Neck Pain</h1>
                <p className="display-6 fs-5 pt-3">
                  Repeated bad working position, osteoarthritis, stiff neck,
                  associated or not with headaches, neck pain can be relieved by
                  your osteopath.
                </p>

                <Link className="nav-link d-inline-block  fs-5    ps-0 " to="">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Fade bottom duration={1000}>
        <div className="container border  border-primary borderNone rounded-pill p-1  ">
          <ul className="nav d-flex flex-md-row flex-column p-1 justify-content-center align-items-center ">
            <li className="nav-item  mb-lg-0 mb-2 border  border-warning rounded-pill">
              <Link
                className="fs-5 nav-link px-4 cg  py-3 rounded-pill "
                data-bs-toggle="pill"
                to="#tab-1"
              >
                <b>BACK PAIN</b>{" "}
              </Link>
            </li>
            <li className="nav-item ms-3 mb-lg-0 mb-2 border  border-warning rounded-pill">
              <Link
                className="fs-5 nav-link px-4 cg py-3 rounded-pill "
                data-bs-toggle="pill"
                to="#tab-2"
              >
                <b>LEG PAIN</b>{" "}
              </Link>
            </li>
            <li className="nav-item ms-3 mb-lg-0 mb-2 border  border-warning rounded-pill">
              <Link
                className="fs-5 nav-link px-4 cg  py-3 rounded-pill "
                data-bs-toggle="pill"
                to="#tab-3"
              >
                <b>STOMACH ACHES</b>{" "}
              </Link>
            </li>
            <li className="nav-item ms-3 mb-lg-0 mb-2 border  border-warning rounded-pill">
              <Link
                className="fs-5 nav-link px-4 cg py-3 rounded-pill "
                data-bs-toggle="pill"
                to="#tab-4"
              >
                <b>MIGRAINES</b>{" "}
              </Link>
            </li>
            <li className="nav-item ms-3 mb-lg-0 mb-2 border  border-warning rounded-pill">
              <Link
                className="fs-5 nav-link cg px-4 py-3 rounded-pill"
                data-bs-toggle="pill"
                to="#tab-5"
              >
                <b>SHOULDER PAIN</b>{" "}
              </Link>
            </li>
            <li className="nav-item ms-3 mb-lg-0 mb-2 border  border-warning rounded-pill">
              <Link
                className="fs-5 nav-link cg px-4  py-3  rounded-pill active"
                data-bs-toggle="pill"
                to="#tab-6"
              >
                <b>NECK PAIN</b>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </Fade>
    </>
  );
};

export default Home_NavPages;
