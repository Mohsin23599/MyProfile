import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { BodyContent } from "./components/BodyContent/BodyContent";
import { Footer } from "./components/Pages/Footer";
import React, { useState } from "react";
import { ContactModal } from "./components/Utilities/ContactModal";
import { FaPen } from "react-icons/fa";
import Bounce from "react-reveal/Bounce";

function App() {
  const [mobileNavbarIsOpen, setMobileNavBarIsOpen] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);
  const handlerIsOpen = () => {
    setMobileNavBarIsOpen((prevState) => {
      return !prevState;
    });
  };
  return (
    <Router>
      <div className="App">
        <SideBar isOpen={mobileNavbarIsOpen} setIsOpen={handlerIsOpen} />
        <Header
          mobileNavBarIsOpen={mobileNavbarIsOpen}
          setMobileNavBarIsOpen={handlerIsOpen}
        />
        <BodyContent isOpen={mobileNavbarIsOpen} />
        <Footer />
        <Bounce top duration={5000}>
          <button
            className="Contact-button"
            onClick={() => {
              setOpenContactModal((prevState) => {
                return !prevState;
              });
            }}
          >
            <p className="button-name">Contact Me</p>
            <FaPen className="button-icon" size={20} />
          </button>
        </Bounce>
        <ContactModal
          openContactModal={openContactModal}
          setOpenContactModal={setOpenContactModal}
        />
      </div>
    </Router>
  );
}

export default App;
