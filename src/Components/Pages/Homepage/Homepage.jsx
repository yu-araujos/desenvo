/* eslint-disable react/jsx-no-comment-textnodes */

import Hero from "../../Hero/Hero";
import About from "../../About/About";
import Slider from "../../Slider-Text/slider";
import Portfolio from "../../Portfolio/Portfolio";
import Contact from "../../Contact/Contact";
import Navbar from "../../Navbar/Navbar";
import Services from "../../Services/Services";
import Footer from "../../Footer/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Slider />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
