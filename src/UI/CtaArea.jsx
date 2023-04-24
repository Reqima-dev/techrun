import React from "react";
import "../styles/ctaArea.css";
import shape3 from "../assets/shape-3.png";
import { Link } from "react-router-dom";

const CtaArea = () => {
  return (
    <div className="cta-area">
      <div className="cta-row">
        <div className="cta-content">
          <h5>We Offer Quality Service</h5>
          <h2>IT Solutions And Technology Services</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content <br /> of a page when looking at its layout.
          </p>

          <Link className="cta-btn">CONTACT US</Link>
        </div>
      </div>
      <div className="cta-shape">
        <img src={shape3} alt="" />
      </div>
    </div>
  );
};

export default CtaArea;
