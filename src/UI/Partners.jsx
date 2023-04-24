import React from "react";
import "../styles/partners.css";
import "../styles/servicearea.css";

import part01 from "../assets/parteners/partenrs1.png";
import part02 from "../assets/parteners/partenrs2.png";
import part03 from "../assets/parteners/partenrs3.png";
import part04 from "../assets/parteners/partenrs4.png";
import part05 from "../assets/parteners/partenrs5.png";
import part06 from "../assets/parteners/partenrs6.png";
import part07 from "../assets/parteners/partenrs7.png";
import part08 from "../assets/parteners/partenrs8.png";
import part09 from "../assets/parteners/partenrs9.png";

const parteners = [
  part01,
  part02,
  part03,
  part04,
  part05,
  part06,
  part07,
  part08,
  part09,
];

const Partners = () => {
  return (
    <>
      <div className="service_area partners_area">
        <div className="service_areaContent">
          <div className="headArea">
            <span className="site-title-tagline">PARTNERS</span>
            <h2 className="site-title">
              Our <span>Partners</span>
            </h2>
            <div className="heading-divider"></div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="parteners_container container">
            {parteners.map((img, index) => (
              <div className="partenrsItem" key={index}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
