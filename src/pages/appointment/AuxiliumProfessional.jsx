import { Link } from "react-router-dom";
import lucImg from "../../assets/Practitioners/lucgagnon.jpeg";
import micheal from "../../assets/Practitioners/micheal.jpeg";
import { useStep } from "../../context/UseStep";
const AuxiliumProfessional = () => {
  const { step, setStep, formData, setFormData } = useStep();

  return (
    <div className="fadeRight">
      <div className=" py-2">
        <Link
          // to="/appointment/newClient"
          onClick={() => {
            setStep(step - 2);
          }}
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
          // to="/appointment/service"
          onClick={() => {
            setFormData({
              ...formData,
              with: "   Michael Daras .DO MSC 1 Ost",
            });
            setStep(step + 1);
          }}
          className="text-decoration-none"
        >
          {" "}
          <div className="locationLink p-2">
            <div className="d-flex justify-content-between align-items-center p-3">
              <div className="d-flex">
                <img
                  src={micheal}
                  className="img-fluid professionalImg pe-3"
                  alt="Luc Img"
                />
                <p>
                  <span className="fs-5 fw-light  d-block">
                    Michael Daras .DO MSC 1 Ost
                  </span>
                  Osteopathe du sport Osteopathe durgence ,douleurs chroniques
                  <span className="ul py-2">
                    Michaël est un passionné par son travail et dévoué aux
                    personnes qui viennent le consulter. Doté d’un humanisme
                    certain, on se sent rapidement en confiance et en sécurité
                    avec lui. Ayant à cœur le rét
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
          // to="/appointment/service"
          onClick={() => {
            setFormData({ ...formData, with: " Luc Gagnon, Ostéopathe" });
            setStep(step + 1);
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
                  <span className="fs-5 fw-light  d-block">
                    Luc Gagnon, Ostéopathe{" "}
                  </span>
                  douleur, urgence, support{" "}
                  <span className="ul py-2">
                    Luc est un ostéopathe curieux, sympathique, et intéressé par
                    chaque personne qui vient le consulter. Rempli d’humanisme
                    et d'empathie, c'est un professionnel compétent avec lequel
                    vous établirez une c
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

export default AuxiliumProfessional;
1;
