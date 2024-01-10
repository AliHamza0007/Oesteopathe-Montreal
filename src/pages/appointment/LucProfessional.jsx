import { Link } from "react-router-dom";
import lucImg from "../../assets/Practitioners/lucgagnon.jpeg";
import { useStep } from "../../context/UseStep";
import { Zoom } from "react-reveal";
const LucProfessional = () => {
  const { step, setStep, formData, setFormData } = useStep();
  return (
    <Zoom className="fadeRight">
      <div className=" py-2">
        <Link
          //  to="/appointment/newClient"
          onClick={() => setStep(step - 1)}
          className=" mapLink border-0 py-1 px-3"
        >
          <i className="fa   fw-bold fa-angle-left fs-4"></i>
        </Link>
      </div>

      <div className="p-2 mt-5">
        <h4 className="text-center text-secondary fw-normal mb-3">
          Choose a Professional
        </h4>

        <Link
          //  to="/appointment/service"
          onClick={() => {
            setStep(step + 2);

            setFormData({
              ...formData,
              with: "Luc Gognon chez Momentum Performace St-Bruno",
            });
          }}
          className="text-decoration-none"
        >
          {" "}
          <div className="locationLink p-2">
            <div className="d-flex justify-content-between align-items-center p-3">
              <div className="d-flex">
                <img
                  src={lucImg}
                  className="img-fluid professionalImg pe-3"
                  alt="Luc Img"
                />
                <p>
                  <span className="fs-5 fw-light py-2 d-block">
                    Luc Gognon chez Momentum Performace St-Bruno
                  </span>
                  <span className="ul Quicksand">
                    {" "}
                    2100 Rue Moaie-Victorin
                    <br />
                    Saint-Bruno-De-Montarville Quebec Canada <br />
                    J3VOM2                  </span>
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
    </Zoom>
  );
};

export default LucProfessional;
