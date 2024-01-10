import { Link } from "react-router-dom";
import { useStep } from "../../context/UseStep";

const DateTime = () => {
  const { step, setStep, formData, setFormData } = useStep();
  return (
    <div className="fadeLeft">
      {" "}
      <div className=" py-2">
        <Link
          //  to="/appointment/service"
          onClick={() => setStep(step - 1)}
          className=" mapLink border-0 py-1 px-3"
        >
          <i className="fa   fw-bold fa-angle-left fs-4"></i>
        </Link>
      </div>
      <div className="container d-flex flex-column mt-5 pt-5 text-center p-md-5 px-3">
        <h4 className="mt-5 fw-normal pt-5">Select Date and Time</h4>

        <form>
          <div className="my-3 form-group">
            <input
              onChange={(e) => {
                setFormData({ ...formData, date: e.target.value });
              }}
              type="date"
              className="form-control"
            />
          </div>
          <div className="mb-3 form-group">
            <input
              onChange={(e) => {
                setFormData({ ...formData, time: e.target.value });
              }}
              type="time"
              className="form-control"
            />
          </div>
        </form>
        <div className="links py-4 mt-3">
          <Link
            // to="newClient"
            onClick={() => {
              setStep(step + 1);
            }}
            className="mapLink rounded-2 px-3  p-2 "
          >
            next
          </Link>
        </div>
        <div className="links  py-1"></div>
      </div>
    </div>
  );
};

export default DateTime;
