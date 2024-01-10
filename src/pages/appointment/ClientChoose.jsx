import { Link } from "react-router-dom";
import { useStep } from "../../context/UseStep";

const ClientChoose = () => {
  const { step, setStep } = useStep();
  return (
    <>
      <div className="container fadeLeft d-flex flex-column mt-y py-5 text-center p-md-5 px-3">
        <h4 className="mt-5 fw-normal pt-5">Appointment Booking</h4>

        <div className="links py-4 mt-3">
          <Link
            // to="newClient"
            onClick={() => {
              setStep(step + 2);
            }}
            className="mapLink rounded-2 px-3  p-2 "
          >
            i`m a new client
          </Link>
        </div>
        <div className="links  py-1">
          <Link
            // to="returningClient"
            onClick={() => {
              setStep(step + 1);
            }}
            className="mapLink rounded-2 px-3  p-2 "
          >
            i`m a returning client
          </Link>
        </div>
      </div>
    </>
  );
};

export default ClientChoose;
