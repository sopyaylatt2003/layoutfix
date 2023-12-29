import React from "react";
import LineWrapper from "../UI/LineWrapper";
import Header from "../UI/Header";
import About from "../About/About";

const Home = () => {
  return (
    <div className="  min-h-screen relative">
      <LineWrapper />
      <Header />
      <About />
    </div>
  );
};

export default Home;
