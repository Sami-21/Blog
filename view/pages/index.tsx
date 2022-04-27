import type { NextPage } from "next";
import AboutSection from "../Components/AboutSection";
import IntroText from "../Components/IntroText";
import NavBar from "../Components/NavBar";
import Noisebackground from "../Components/Noisebackground";

// import Intro from '../Components/Intro'
// import intro from '../styles/Intro.module.css'

const Home: NextPage = () => {
  return (
    <div className="relative min-h-screen w-screen flex flex-col justify-center items-center">
      <Noisebackground />
      <NavBar />
      {/* <Intro/>  */}
      <IntroText />
      {/* <AboutSection /> */}
    </div>
  );
};

export default Home;
