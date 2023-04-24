import React from "react";
import "../styles/aboutArea.css";
import AboutAreaImg from "../assets/01.png";
import { Link } from "react-router-dom";

const AboutArea = () => {
  return (
    <section className="container">
      <div className="about_area ">
        <div className="contentArea">
          <div className="left_area">
            <img src={AboutAreaImg} alt="AboutAreaImg" />
          </div>
          <div className="right_area">
            <div className="site-heading">
              <span>ABOUT US</span>
              <h2>
                We Offer Professional <span> IT Solutions </span>For Business
              </h2>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even.
            </p>
            <ul>
              <li>
                <span class="material-icons-sharp"> check_circle </span>
                <p>Take a look at our round up of the best shows</p>
              </li>
              <li>
                <span class="material-icons-sharp"> check_circle </span>
                <p>It has survived not only five centuries</p>
              </li>
              <li>
                <span class="material-icons-sharp"> check_circle </span>
                <p>Lorem Ipsum has been the ndustry standard dummy text</p>
              </li>
            </ul>
            <button className="theme-btn">
              <Link to="#.">DISCOVER MORE</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
