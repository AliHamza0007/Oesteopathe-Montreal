import { Link } from "react-router-dom";
import { useStep } from "../../context/UseStep";

const NewClient = () => {
  const { step, setStep, formData, setFormData } = useStep();
  return (
    <div className="fadeRight">
      <div className=" py-2">
        <Link
          // to="/appointment/"
          onClick={() => setStep(0)}
          className=" mapLink border-0 py-1 px-3"
        >
          <i className="fa   fw-bold fa-angle-left fs-4"></i>
        </Link>
      </div>

      <div className="p-2 mt-5">
        <h4 className="text-center text-secondary fw-normal mb-3">
          Choose a Location
        </h4>

        <Link
          // to="/appointment/auxiliumProfessional"
          onClick={() => {
            setStep(step + 1);
            setFormData({ ...formData, location: "2100 Rue Moaie-Victorin" });
          }}
          className="text-decoration-none"
        >
          <div className="locationLink   p-2">
            <div className="d-flex justify-content-between align-items-center p-3">
              <div>
                <p>
                  <span className="fs-5 fw-light py-2 d-block">
                    Luc Gognon chez Momentum Performace St-Bruno
                  </span>
                  <span className="ul Quicksand">
                    {" "}
                    2100 Rue Moaie-Victorin
                    <br />
                    Saint-Bruno-De-Montarville Quebec Canada <br />
                    J3VOM2
                  </span>
                </p>
              </div>
              <div>
                {" "}
                <i className="fa cyd  fw-bold fa-angle-right fs-4"></i>
              </div>
            </div>
          </div>
        </Link>
        <Link
          // to="/appointment/lucProfessional"
          onClick={() => {
            setFormData({ ...formData, location: "5130 Rue Saint-Hubert" });
            setStep(step + 2);
          }}
          className="text-decoration-none"
        >
          <div className="locationLink mb-3 p-2">
            <div className="d-flex justify-content-between align-items-center p-3">
              <div>
                <p>
                  <span className="fs-5 fw-light py-2 d-block">
                    Auxilium Sante Integrative Daras-Gognon Osteopathes
                  </span>
                  <span className="ul Quicksand">
                    {" "}
                    5130 Rue Saint-Hubert
                    <br />
                    Montreal Quebec Canada
                    <br />
                    H2J2Y3
                  </span>
                </p>
              </div>
              <div>
                {" "}
                <i className="fa cyd  fw-bold fa-angle-right fs-4"></i>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NewClient;
