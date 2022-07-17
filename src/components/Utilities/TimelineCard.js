import React from "react";
import "./TimelineCard.css";
import { Fade, Bounce } from "react-reveal";

export const TimelineCard = (props) => {
  return (
    <div className="TimelineCard" id={props.id}>
      <span
        className="Timeline-bar"
        style={{
          order: props.left ? 2 : 1,
          textAlign: props.left ? "end" : "start",
        }}
      >
        <span
          className="Vertical"
          style={
            props.left
              ? { left: "-2px", backgroundColor: props.style.verticalColor }
              : { right: "-2px", backgroundColor: props.style.verticalColor }
          }
        />
        <Bounce duration={2000}>
          <span
            className="Circle"
            style={
              props.left
                ? { left: "-16px", backgroundColor: props.style.outCircleColor }
                : {
                    right: "-16px",
                    backgroundColor: props.style.outCircleColor,
                  }
            }
          />
          <span
            className="Mobile-Circle"
            style={
              props.left
                ? { left: "-6px", backgroundColor: props.style.inCircleColor }
                : { right: "-6px", backgroundColor: props.style.inCircleColor }
            }
          />
        </Bounce>
      </span>

      <Fade left={props.left ? true : false} right={props.left ? false : true}>
        <div className="Timeline-content" style={{ order: props.left ? 1 : 2 }}>
          {props.children}
        </div>
      </Fade>
    </div>
  );
};
