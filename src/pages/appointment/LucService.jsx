import { Link } from "react-router-dom";
import { useStep } from "../../context/UseStep";
const LucService = () => {
  const { step, setStep, formData, setFormData } = useStep();
  return (
    <div className="fadeLeft">
      <div className=" py-2">
        <Link
          // to="/appointment/lucProfessional"
          onClick={() => setStep(step - 1)}
          className=" mapLink border-0 py-1 px-3"
        >
          <i className="fa   fw-bold fa-angle-left fs-4"></i>
        </Link>
      </div>

      <div className="p-2 mt-5">
        <h4 className="text-center text-secondary fw-normal mb-3">
          Choose a Service
        </h4>

        <Link
          // to="/appointment/newForm"
          onClick={() => {
            setFormData({
              ...formData,
              service: " Auxilium Sainte Integrative Luc Gognon",
            });
            setStep(step + 1);
          }}
          className="text-decoration-none"
        >
          <div className="locationLink text-dark p-2">
            <div className="d-flex justify-content-between align-items-center p-3">
              <div className="fs-5 fw-light p-2">
                Auxilium Sainte Integrative Luc Gognon
              </div>
              <div>
                <i className="fa cyd  fw-bold fa-angle-right fs-4"></i>
              </div>
            </div>
          </div>
        </Link>
        <Link
          // to="/appointment/newForm"
          onClick={() => {
            setFormData({ ...formData, service: "Osteopathe" });
            setStep(step + 1);
          }}
          className="text-decoration-none"
        >
          <div className="locationLink text-dark p-2">
            <div className="d-flex justify-content-between align-items-center p-3">
              <div className="fs-5 fw-light p-2">Osteopathe</div>
              <div>
                <i className="fa cyd  fw-bold fa-angle-right fs-4"></i>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LucService;
