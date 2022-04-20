import { NextPage } from "next";
import React from "react";
import intro from "../styles/Intro.module.css";

const Intro: NextPage = () => {
  return (
    <div className={intro.Pre_Start_Screen}>
      <span className={intro.flash}></span>
      <span className={intro.flash}></span>
      <span className={intro.flash}></span>
    </div>
  );
};

export default Intro;
