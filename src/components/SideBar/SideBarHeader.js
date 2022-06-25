import React from "react";
import { FaEllipsisV, FaBars, FaPlus } from "react-icons/fa";
import "./SideBarHeader.css";

const SideBarHeader = (props) => {
  const toggleSideBarIcon = () => {
    props.onChangeCompressIcon();
  };
  return (
    <div className="Side-bar__header">
      {!props.isOpen && (
        <FaEllipsisV
          className="Side-bar__header_icon"
          onClick={toggleSideBarIcon}
        />
      )}
      {props.isOpen && (
        <FaBars className="Side-bar__header_icon" onClick={toggleSideBarIcon} />
      )}
      {
        <FaPlus
          className="Side-bar__mobile_header_icon"
          onClick={toggleSideBarIcon}
        />
      }
    </div>
  );
};

export default SideBarHeader;
