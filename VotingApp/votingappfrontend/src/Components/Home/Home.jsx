import React from "react";
import LandingSection1 from "../../Pages/Home/LandingSection1";
import LandingSection2 from "../../Pages/Home/LandingSection2";
import LandingSection3 from "../../Pages/Home/LandingSection3";
// import Navbar from "../../CommonSection/Navbar";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols">
        <LandingSection1/>
        <LandingSection2/>
        <LandingSection3/>
      </div>
    </>
  );
};

export default Home;
