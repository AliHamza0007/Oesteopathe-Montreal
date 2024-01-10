import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { StepProvider } from "./context/UseStep.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StepProvider>
    <App />
  </StepProvider>
);
