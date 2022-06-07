import React, { useState } from "react";
import "./SideBar.css";
import SideBarHeader from "./SideBarHeader";
import logo from "../../assets/images/side-bar_logo.png";

const SideBar = () => {
  const [sideBarWidth, setSideBarWidth] = useState("15vw");
  const onChangeCompressIconHandler = (compressed) =>{
    if (compressed){
      setSideBarWidth("15vw");
    }
    else{
      setSideBarWidth("5vw");
    }
  }

  return (
    <div className="Side-bar" style={{minWidth: sideBarWidth}}>
      <SideBarHeader onChangeCompressIcon={onChangeCompressIconHandler}/>
      {/* <FaEllipsisV className="Compress-icon"/> */}
      {/* <h1>Side Bar</h1> */}
      <img src={logo} alt="My Logo" className="Side-bar__logo" style={{width: (sideBarWidth === "5vw")? "4vw" : "8vw", }}/>
    </div>
  );
};

export default SideBar;
