import React, { useEffect } from "react";
import "./SideBar.css";
import SideBarHeader from "./SideBarHeader";
import logo from "../../assets/images/side-bar_logo.png";
import SideBarItem from "./SideBarItem";
import SideBarFooter from "./SideBarFooter";

function setMobileIsOpen(newTop) {
  document.documentElement.style.setProperty("--mobile-top", newTop);
}

const SideBar = (props) => {
  useEffect(() => {
    props.isOpen ? setMobileIsOpen("0%") : setMobileIsOpen("-100%");
  }, [props.isOpen]);

  const onChangeCompressIconHandler = () => {
    props.setIsOpen();
    props.isOpen ? setMobileIsOpen("-100%") : setMobileIsOpen("0%");
  };

  return (
    <div
      className="Side-bar"
      id="Side-bar_id"
      style={{ width: props.isOpen ? "180px" : "60px" }}
    >
      <SideBarHeader
        isOpen={props.isOpen}
        onChangeCompressIcon={onChangeCompressIconHandler}
      />
      <img
        src={logo}
        alt="My Logo"
        className="Side-bar__logo"
        style={{ height: props.isOpen ? "20vmin" : "7vmin" }}
      />
      <SideBarItem isOpen={props.isOpen} />
      <SideBarFooter isOpen={props.isOpen} />
    </div>
  );
};

export default SideBar;
