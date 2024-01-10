import { createContext, useContext, useState } from "react";

const StepContext = createContext();

const StepProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  return (
    <StepContext.Provider value={{ step, setStep, formData, setFormData }}>
      {children}
    </StepContext.Provider>
  );
};
const useStep = () => useContext(StepContext);
export { useStep, StepProvider };
