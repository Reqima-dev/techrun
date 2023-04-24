import React from "react";
import "../styles/feature.css";
import { feature } from "../data/featureData";

const Feature = () => {
  return (
    <section className="feature_area container">
      <div className="featureContainer">
        {feature.map((item, i) => {
          if (i === 2) {
            return (
              <div className="content featu_active" key={i}>
                <div className="feature-icon">
                  <span> {item.icon} </span>
                </div>
                <div className="feature-content">
                  <h5 className="title"> {item.title} </h5>
                  <p>{item.paragraph}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div className="content " key={i}>
                <div className="feature-icon">
                  <span> {item.icon} </span>
                </div>
                <div className="feature-content">
                  <h5 className="title"> {item.title} </h5>
                  <p>{item.paragraph}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Feature;
