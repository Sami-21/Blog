import React from "react";
import style from "../styles/Noisebackground.module.css";

const Noisebackground = () => {
  return (
    <div className={style.Noise}>
      <svg>
        <filter id="noise">
          <feTurbulence id="turbulence">
            <animate
              attributeName="baseFrequency"
              dur="1.5s"
              values="0.9 0.9; 0.6 0.6 ; 0.9 0.9"
              repeatCount={"indefinite"}
            ></animate>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="60"></feDisplacementMap>
        </filter>
      </svg>
    </div>
  );
};

export default Noisebackground;
