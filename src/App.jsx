import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Care from "./pages/Care";
import Prices from "./pages/Prices";
import Blog from "./pages/Blog";
import Michael from "./pages/Practtitioners/Michael";
import LucGagnon from "./pages/Practtitioners/LucGagnon";
import Christelle from "./pages/Practtitioners/Christelle";
import "./styles/Animation.css";
import Appointment from "./pages/Appointment";
// import ClientChoose from "./pages/appointment/ClientChoose";
// import Form from "./pages/appointment/Form";
// import NewForm from "./pages/appointment/NewForm";
// import NewClient from "./pages/appointment/NewClient";
// import LucProfessional from "./pages/appointment/LucProfessional";
// import LucService from "./pages/appointment/LucService";
// import AuxiliumProfessional from "./pages/appointment/AuxiliumProfessional";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/care" element={<Care />} />
        <Route path="/price" element={<Prices />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/michael" element={<Michael />} />
        <Route path="/luc" element={<LucGagnon />} />
        <Route path="/christelle" element={<Christelle />} />
        <Route path="/appointment" element={<Appointment />}>
          {/* <Route path="" element={<ClientChoose />} />
          <Route path="newClient" element={<NewClient/>} />
          <Route path="auxiliumProfessional" element={<AuxiliumProfessional/>} />
          <Route path="service" element={<LucService/>} />
          <Route path="newForm" element={<NewForm/>} />
          <Route path="lucProfessional" element={<LucProfessional/>} />
          <Route path="returningClient" element={<Form />} />
        */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
