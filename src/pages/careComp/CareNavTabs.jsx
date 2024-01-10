import { Link } from "react-router-dom";
import careNav1 from "../../assets/imgCare/careNav1.jpeg";
import careNav2 from "../../assets/imgCare/careNav2.jpeg";
import careNav3 from "../../assets/imgCare/careNav3.jpeg";
import careNav4 from "../../assets/imgsHome/migraines.jpg";

const CareNavTabs = () => {
  return (
    <>
      <div className="container">
        <div className="row px-3 align-items-center">
          <div className="col-md-4 col-12">
            <ul className="nav careNav d-flex text-md-start text-center flex-column p-1  ">
              <Link
                className="text-decoration-none careLink rounded-4  fs-5 px-4  py-3 "
                data-bs-toggle="pill"
                to="#tab-1"
              >
                <b>Back pain</b>
              </Link>

              <Link
                className="text-decoration-none careLink rounded-4 mt-2 fs-5 px-4  py-3  "
                data-bs-toggle="pill"
                to="#tab-2"
              >
                <b>Stomach aches</b>
              </Link>

              <Link
                className="text-decoration-none careLink rounded-4 mt-2 fs-5 px-4  py-3  "
                data-bs-toggle="pill"
                to="#tab-3"
              >
                <b>Shoulder pain</b>
              </Link>

              <Link
                className="text-decoration-none careLink active rounded-4 mt-2 fs-5 px-4  py-3 "
                data-bs-toggle="pill"
                to="#tab-4"
              >
                <b>Mirgraines</b>
              </Link>
            </ul>
          </div>
          <div className="col-md-8 col-12">
            <div className="tab-content text-start border border-secondary rounded-4 p-md-5 p-3">
              <div role="tabpanel" id="tab-1" className="tab-pane show fade  ">
                <h3 className="cg fw-bold">Back pain</h3>
                <h6 className=" pt-3 text-secondary">
                  Blockages, spasms, discharges, lumbar sprain, localized or
                  radiating pain, herniated discs, sciatica, osteoarthritis...
                  are ailments that affect the back.
                  <br />
                  <Link
                    className="nav-link d-inline-block  text-dark fs-5    ps-0 "
                    to=""
                  >
                    Learn more
                  </Link>
                </h6>
                <div className="text-center mt-5">
                  <img
                    src={careNav1}
                    alt="img"
                    className="img-fluid rounded-4 h-100 w-100"
                  />
                </div>
              </div>
              <div role="tabpanel" id="tab-2" className="tab-pane show fade  ">
                <h3 className="cg fw-bold">Stomach aches</h3>
                <h6 className=" pt-3 text-secondary">
                  Irritable bowel syndrome, stress and anxiety, constipation,
                  food intolerances, bloating, menstrual cramps can lead to
                  abdominal pain.
                  <br />
                  <Link
                    className="nav-link d-inline-block  text-dark fs-5    ps-0 "
                    to=""
                  >
                    Learn more
                  </Link>
                </h6>
                <div className="text-center mt-5">
                  <img
                    src={careNav2}
                    alt="img"
                    className="img-fluid rounded-4 h-100 w-100"
                  />
                </div>
              </div>
              <div role="tabpanel" id="tab-3" className="tab-pane  show fade  ">
                <h3 className="cg fw-bold">Shoulder pain</h3>
                <h6 className=" pt-3 text-secondary">
                  Sustained and repetitive work, sports, trauma, the shoulder
                  can be subject to several types of pain: impingement,
                  tendinitis, bursitis, capsulitis, dislocation, radiating pain,
                  etc.
                  <br />
                  <Link
                    className="nav-link d-inline-block  text-dark fs-5    ps-0 "
                    to=""
                  >
                    Learn more
                  </Link>
                </h6>
                <div className="text-center mt-5">
                  <img
                    src={careNav3}
                    alt="img"
                    className="img-fluid rounded-4 h-100 w-100"
                  />
                </div>
              </div>
              <div
                role="tabpanel"
                id="tab-4"
                className="tab-pane  show fade active "
              >
                <h3 className=" cg fw-bold">Migraines</h3>
                <h6 className=" pt-3 text-secondary">
                  Of muscular or vascular origin, migraines and headaches can be
                  linked to neck pain, jaw tension and pain, or digestive
                  disorders.
                  <br />
                  <Link
                    className="nav-link d-inline-block  text-dark fs-5    ps-0 "
                    to=""
                  >
                    Learn more
                  </Link>
                </h6>
                <div className="text-center mt-5">
                  <img
                    src={careNav4}
                    alt="img"
                    className="img-fluid rounded-4 h-100 w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareNavTabs;
