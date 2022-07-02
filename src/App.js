import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { BodyContent } from "./components/BodyContent/BodyContent";
import React, { useEffect, useState } from "react";

function App() {
  const sideBarDOM = document.getElementById("Side-bar_id");
  const [mobileNavbarIsOpen, setMobileNavBarIsOpen] = useState(false);

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
      </div>
    </Router>
  );
}

export default App;
