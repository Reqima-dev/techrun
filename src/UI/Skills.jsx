import React from "react";
import "../styles/aboutArea.css";
import SkillsAreaImg from "../assets/01 (1).png";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <section className="container">
      <div className="about_area">
        <div className="contentArea">
          <div className="left_area">
            <img src={SkillsAreaImg} alt="SkillsAreaImg" />
          </div>
          <div className="right_area">
            <div class="site-heading">
              <span>OUR SKILLS</span>
              <h2>
                We Offers You <span> Best IT And Technology </span>Service
              </h2>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even.
            </p>
            <div class="skills-section">
              <div class="progress-box">
                <h5>
                  IT Consulting
                  <span>85%</span>
                </h5>
                <div class="progressbar"></div>
              </div>
              <div class="progress-box">
                <h5>
                  Web Development <span>65%</span>
                </h5>
                <div class="progressbar bar2"></div>
              </div>
              <div class="progress-box">
                <h5>
                  Software Development <span>75%</span>
                </h5>
                <div class="progressbar bar3"></div>
              </div>
            </div>
            <button className="theme-btn">
              <Link to="#.">LEARN MORE</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
