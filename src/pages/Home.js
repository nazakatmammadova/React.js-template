import React from "react";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
function Home() {
  return (
    <>
     <Header/>
     <Portfolio />
     <About/>
     <Contact/>
    </>
  );
}

export default Home;
