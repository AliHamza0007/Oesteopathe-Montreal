import { Link } from "react-router-dom";
import { useStep } from "../../context/UseStep";
import { useState } from "react";

const NewForm = () => {
  const { step, setStep, formData, setFormData } = useStep();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [h_No, setH_No] = useState("");
  const [m_No, setM_No] = useState("");
  const [appointmentfor, setAppointmentFor] = useState(
    "The appointment is for child or dependent"
  );

  const submitForm = (e) => {
    e.preventDefault();
    if (
      fName === "" &&
      lName === "" &&
      h_No === "" &&
      m_No === "" &&
      email === ""
    ) {
      alert(" All Field required");
    } else {
      console.log(formData);
      alert("your Appointment Fix Here Details");
      setTimeout(() => {
        Reset();
      }, 2000);
    }
    const Reset = () => {
      setFormData({});
      setLName("");
      setFName("");
      setEmail("");
      setH_No("");
      setM_No("");
    };
  };
  return (
    <div className="fadeRight ">
      <div className=" py-2">
        <Link
          //  to="/appointment/service"
          onClick={() => setStep(step - 1)}
          className=" mapLink border-0 py-1 px-3"
        >
          <i className="fa   fw-bold fa-angle-left fs-4"></i>
        </Link>
      </div>

      <div className="container">
        <div className="userDetails my-3 border border-secondary rounded-3 p-3">
          <h4>Your Selection</h4>
          <p>
            Date:<span className="ps-5">{formData.date}</span>
            <br />
            Time:<span className="ps-5">{formData.time}</span>
            <br />
            Service:<span className="ps-4">{formData.service}</span>
            <br />
            With:<span className="ps-5">{formData.with}</span>
            <br />
            Location:<span className="ps-3">{formData.location}</span>
          </p>
        </div>
        <form className="form border border-secondary rounded-3 p-3">
          <div className="row">
            <div className="form-group col-6 mb-2">
              <label>First Name</label>
              <input
                required
                value={fName}
                onChange={(e) => {
                  setFName(e.target.value);
                  setFormData({ ...formData, fName: e.target.value });
                }}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group col-6 mb-2">
              <label>Last Name</label>
              <input
                required
                value={lName}
                onChange={(e) => {
                  setLName(e.target.value);
                  setFormData({ ...formData, lName: e.target.value });
                }}
                type="text"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group mb-2">
            <label>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setFormData({ ...formData, email: e.target.value });
              }}
              className="form-control"
              placeholder="Ex: your.name@gmail.com"
            />
          </div>
          <div className="row">
            <div className="form-group col-6 mb-2">
              <label>
                Mobile Number
                <input
                  type="text"
                  value={m_No}
                  required
                  onChange={(e) => {
                    setM_No(e.target.value);
                    setFormData({ ...formData, m_No: e.target.value });
                  }}
                  className="form-control"
                />
              </label>
            </div>
            <div className="form-group col-6 mb-2">
              <label>
                Home Number
                <input
                  required
                  value={h_No}
                  onChange={(e) => {
                    setH_No(e.target.value);
                    setFormData({ ...formData, h_No: e.target.value });
                  }}
                  type="text"
                  className="form-control"
                />
              </label>
            </div>
          </div>

          <div className="form-check my-3">
            <label className="form-check-label">
              <input
                name="appointmentFor"
                className="form-check-input"
                type="radio"
                required
                value={appointmentfor}
                onChange={() => {
                  setFormData({
                    ...formData,
                    appointmentfor: "The appointment is for myself",
                  });

                  setAppointmentFor("The appointment is for myself");
                }}
              />
              The appointment is for myself
            </label>
            <br />
            <label className="form-check-label">
              <input
                name="appointmentFor"
                className="form-check-input"
                type="radio"
                value={appointmentfor}
                onChange={() => {
                  setFormData({
                    ...formData,
                    appointmentfor: "The appointment is for child or dependent",
                  });
                  setAppointmentFor(
                    "The appointment is for child or dependent"
                  );
                }}
                defaultChecked
              />
              The appointment is for child or dependent
            </label>
          </div>
        </form>
        <div className=" my-3 border d-flex justify-content-center flex-column align-items-center text-center border-secondary rounded-3 p-3">
          <div>
            <div className="form-check my-3">
              <label className="form-check-label">
                By completing the resevation you agree to the{" "}
                <span className="text-decoration-underline">
                  Terms of Service
                </span>
                <br /> and{" "}
                <span className="text-decoration-underline">
                  Privacy Notice
                </span>{" "}
                of GOrendezous.
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                defaultChecked
              />
            </div>
          </div>
          <div className="mt-2 py-3  text-center">
            {" "}
            <Link onClick={submitForm} className="mapLink  py-1  p-2 ">
              continue
            </Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default NewForm;
