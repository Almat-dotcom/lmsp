import React from "react";

const MinusSvgComponent = (props: any) => {
  return <svg width="15pt" height="15pt"
              viewBox="0 0 15 15" version="1.1">
    <g id="surface1">
      <path fill={"none"} strokeWidth={20} strokeLinecap={"butt"} strokeLinejoin={"miter"} stroke={"rgb(0, 0, 0"}
            strokeOpacity={1} strokeMiterlimit={4} d="M 10 10 L 590 10 L 590 590 L 10 590 Z M 10 10 "
            transform="matrix(0.025,0,0,0.025,0,0)"/>
      <path
        fill={"none"} strokeWidth={20} strokeLinecap={"butt"} strokeLinejoin={"miter"} stroke={"rgb(0, 0, 0)"}
        strokeOpacity={1} strokeMiterlimit={4} d="M 100 300 L 500 300 " transform="matrix(0.025,0,0,0.025,0,0)"/>
    </g>
  </svg>
};

export default MinusSvgComponent;