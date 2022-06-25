import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import React, { useState } from "react";

function App() {
  const [mobileNavbarIsOpen, setMobileNavBarIsOpen] = useState(false);
  const handlerIsOpen = () =>
    setMobileNavBarIsOpen((prevState) => {
      return !prevState;
    });

  return (
    <Router className="App">
      <SideBar isOpen={mobileNavbarIsOpen} setIsOpen={handlerIsOpen} />
      <Header
        mobileNavBarIsOpen={mobileNavbarIsOpen}
        setMobileNavBarIsOpen={handlerIsOpen}
      />
    </Router>
  );
}

export default App;
