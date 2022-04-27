import React from "react";
import useTextTyping from "../hooks/useTextTyping";
import style from "../styles/AboutSection.module.css";
import CODTextEffect from "./CODTextEffect";

const AboutSection = () => {
  let Transition1: string = "Mhdqp";
  let Transition2: string = "Kjrsw";
  let Transition3: string = "About";
  return (
    <div className={style.TextContainer}>
      <h1 className={style.IntroText}>
        <CODTextEffect
          Transition1={Transition1}
          Transition2={Transition2}
          Transition3={Transition3}
        ></CODTextEffect>
      </h1>
    </div>
  );
};

export default AboutSection;
