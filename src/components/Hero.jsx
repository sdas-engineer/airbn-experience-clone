import React from "react";
import hero from "../images/photo-grid.png";

const Hero = () => {
  return (
    <section className="hero">
      {/* <img
        src={hero}
        className="hero--image"
        alt="Banner Image Displaying Experiences"
      /> */}
      <p className="hero--text">HOST AN EXPERIENCE IN AIRBNB</p>
      <h1 className="hero--header">
        Earn money leading people on activities you love.
      </h1>
      <a href="#" className="hero--btn">
        Learn more
      </a>
    </section>
  );
};

export default Hero;
