import React from "react";
import "./PopUp.css";

const PopUp = (props) => {
  return props.showPopUp ? (
    <div className="pop-up">
      <div className="inner-popUp">
        <p>{props.message}</p>
        <button
          className="close-btn"
          onClick={() => {
            props.setShowPopUp(false);
          }}
        >
          okay
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default PopUp;
