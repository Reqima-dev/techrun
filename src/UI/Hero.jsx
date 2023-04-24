import React from "react";
import "../styles/hero.css";
import { Link } from "react-router-dom";
import herobg from "../assets/hero.png";
import shape from "../assets/shape-1.png";

const Hero = () => {
  return (
    <section className="sectionHero">
      <div class="hero_wrapper">
        <div class="heroContainer container">
          <div class="left">
            <h6>BEST IT SOLUTIONS FOR YOU</h6>
            <h1>IT SOLUTIONS AND TECHNOLOGY SERVICES COMPANY</h1>
            <p>
              There are many variations of passages available but the majority
              have suffered alteration in some form by injected humour or
              randomised words.
            </p>
            <div class="heroBTN">
              <Link to="#." className="btnTheme2 theme-btn">
                Contact US
              </Link>
              <Link to="#." className="btnTheme theme-btn">
                About US
              </Link>
            </div>
          </div>
          <div class="right">
            <img src={herobg} alt="Hero" />
          </div>
        </div>
        <div class="hero-shape">
          <img src={shape} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
