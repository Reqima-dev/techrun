import React from "react";
import "../styles/choseArea.css";
import { Link } from "react-router-dom";
import SkillsAreaImg2 from "../assets/01 (2).png";

const CHooseArea = () => {
  return (
    <div className="choice_area">
      <div className="choice_areaContainer">
        <div className="choiceLeft">
          <div className="site-heading">
            <span>Why Choose Us</span>
            <h2>
              We Highlight <span> Your Business </span>World Market
            </h2>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even.
          </p>
          <ul className="choose-content">
            <li>
              <span class="material-icons-sharp"> check_circle </span>
              <div className="chooseBOx">
                <h5>Our experience</h5>
                <p>
                  It is a long established fact that a reader will be
                  distracted.
                </p>
              </div>
            </li>
            <li>
              <span class="material-icons-sharp"> check_circle </span>
              <div className="chooseBOx">
                <h5>Certified Company</h5>
                <p>
                  It is a long established fact that a reader will be
                  distracted.
                </p>
              </div>
            </li>
            <li>
              <span class="material-icons-sharp"> check_circle </span>
              <div className="chooseBOx">
                <h5>Lifetime Update</h5>
                <p>
                  It is a long established fact that a reader will be
                  distracted.
                </p>
              </div>
            </li>
          </ul>

          <button className="theme-btn">
            <Link to="#.">START PROJECT</Link>
          </button>
        </div>
        <div className="choiceRight">
          <img src={SkillsAreaImg2} alt="SkillsAreaImg2" />
        </div>
      </div>
    </div>
  );
};

export default CHooseArea;
