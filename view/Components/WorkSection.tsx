import React from "react";
import CODTextEffect from "./CODTextEffect";
import style from "../styles/WorkSection.module.css";
import ProjectContainer from "./ProjectContainer";

const WorkSection: React.FC = () => {
  const Transition1: string = "Mnut";
  const Transition2: string = "Plwr";
  const Transition3: string = "Work";

  return (
    <div className={style.ContentContainer}>
      <CODTextEffect
        Transition1={Transition1}
        Transition2={Transition2}
        Transition3={Transition3}
      ></CODTextEffect>
    </div>
  );
};

export default WorkSection;
