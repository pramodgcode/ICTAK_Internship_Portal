import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero ">
      <div className="hero-text">
        <h1>Welcome to ICT Acadamy of Kerala</h1>
        <p>
          We know that finding a meaningful and rewarding job can be a long
          journey. Our goal is to make that process as easy as possible for you,
          and to create a work environment that's satisfying - one where you'll
          look forward to coming to every day. Start your journey with us by
          browsing available jobs.
        </p>
        <button className="btn2">Join us</button>
      </div>
    </div>
  );
};

export default Hero;