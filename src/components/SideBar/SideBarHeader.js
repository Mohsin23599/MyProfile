import React, { useState } from "react";
import { FaEllipsisV, FaBars } from "react-icons/fa";
import "./SideBarHeader.css";

const SideBarHeader = (props) => {
  const [sideBarCompressIcon, setSideBarCompressIcon] = useState(false);

  const toggleSideBarIcon = ()=>{
    setSideBarCompressIcon((prevState)=>{
      return !prevState;
    });
    props.onChangeCompressIcon(sideBarCompressIcon);
  }

  return (
    <div className="Side-bar__header">
      {!sideBarCompressIcon && <FaEllipsisV className = "Side-bar__icon" onClick={toggleSideBarIcon} style={{flex: 0.1}}/>}
      {sideBarCompressIcon && <FaBars className = "Side-bar__icon" onClick={toggleSideBarIcon} style={{flex: 0.2}}/>}
      <h1 className="Side-bar__header_text" style={{flex: sideBarCompressIcon? 0.8: 0.9,}}>MMA</h1>
    </div>
  );
};

export default SideBarHeader;
