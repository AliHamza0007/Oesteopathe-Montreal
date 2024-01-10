import { Link } from "react-router-dom";
import { useStep } from "../../context/UseStep";
import { useState } from "react";

const Form = () => {
  const { setStep, formData, setFormData } = useStep();
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    if (fname === "" && lname === "" && email === "") {
      alert("All Field required");
    } else {
      console.log(formData);
      alert("your Details are Send");
      setTimeout(() => {
        setFName("");
        setLName("");
        setEmail("");
      }, 2000);
    }
  };
  return (
    <div className="fadeRight">
      <div className=" py-2">
        <Link
          // to="/appointment"
          onClick={() => setStep(0)}
          className=" mapLink border-0 py-1 px-3"
        >
          <i className="fa   fw-bold fa-angle-left fs-4"></i>
        </Link>
      </div>
      <div className="container">
        <h3 className="text-center text-secondary fs-4">Your Information</h3>
        <form className="form border mt-3 border-secondary rounded-3 p-5">
          <div className="form-group mb-2">
            <label>First Name</label>
            <input
              required
              value={fname}
              onChange={(e) => {
                setFName(e.target.value);
                setFormData({ ...formData, fname: e.target.value });
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group mb-2">
            <label>Last Name</label>
            <input
              required
              value={lname}
              onChange={(e) => {
                setLName(e.target.value);
                setFormData({ ...formData, lname: e.target.value });
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group mb-2">
            <label>Email</label>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setFormData({ ...formData, email: e.target.value });
              }}
              type="email"
              className="form-control"
              placeholder="Ex: your.name@gmail.com"
            />
          </div>
          <div className="form-check my-3">
            <label className="form-check-label">Remember me</label>
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              defaultChecked
            />
          </div>
          <div className="mt-2 pt-5  text-center">
            {" "}
            <Link onClick={submitForm} className="mapLink  py-1  p-2 ">
              continue
            </Link>
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default Form;
