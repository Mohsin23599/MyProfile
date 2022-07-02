import React from "react";
import "./TimelineCard.css";

export const TimelineCard = (props) => {
  console.log(props.left);
  return (
    <div className="TimelineCard">
      <span className="Timeline-bar" style={{ order: props.left ? 2 : 1 }}>
        <span
          className="Vertical"
          style={props.left ? { left: "-2px" } : { right: "-2px" }}
        />
        <span
          className="Circle"
          style={props.left ? { left: "-16px" } : { right: "-16px" }}
        />
      </span>
      <div className="Timeline-content" style={{ order: props.left ? 1 : 2 }}>
        {props.children}
      </div>
    </div>
  );
};
