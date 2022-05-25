import React from "react";
import useTextTyping from "../hooks/useTextTyping";
import style from "../styles/AboutSection.module.css";
import CODTextEffect from "./CODTextEffect";

const AboutSection = () => {
  const Transition1: string = "Mhdqp vq";
  const Transition2: string = "Kjrsw th";
  const Transition3: string = "About me";
  const AboutText: string =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos dolorumfuga iure et? Exercitationem, molestiae magnam placeat laboriosameaque inventore deleniti provident similique excepturi cum laborumillo et explicabo nihil sequi delectus animi non voluptatem quo quibusdam! Eos, expedita sit!";
  const AboutTextTyping = useTextTyping(AboutText, 10);

  return (
    <div className={style.ContentContainer}>
      <CODTextEffect
        Transition1={Transition1}
        Transition2={Transition2}
        Transition3={Transition3}
      ></CODTextEffect>
      <div className={style.TextContainer}>
        <p className={style.Text}>{AboutTextTyping} </p>
        <div className={style.MyGIF}></div>
      </div>
    </div>
  );
};

export default AboutSection;
