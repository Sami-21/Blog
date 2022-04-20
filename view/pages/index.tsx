import type { NextPage } from "next";
import IntroText from "../Components/IntroText";
import NavBar from "../Components/NavBar";
// import Intro from '../Components/Intro'
// import intro from '../styles/Intro.module.css'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center">
      <NavBar />
      {/* <Intro/> */}
      <IntroText />
    </div>
  );
};

export default Home;
