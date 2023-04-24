import React from "react";
import "../styles/pricingPlan.css";
import "../styles/servicearea.css";
import { pricingData } from "../data/PricingData";
import { Link } from "react-router-dom";

const PricingPlan = () => {
  return (
    <>
      <div className="service_area pricing_area">
        <div className="service_areaContent">
          <div className="headArea">
            <span className="site-title-tagline">PRICING</span>
            <h2 className="site-title">
              Pricing <span>Plan</span>
            </h2>
            <div className="heading-divider"></div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="pricingBOX">
            {pricingData.map((item, id) => {
              return (
                <div className="pricing-item" key={id}>
                  <div className="pricing-header">
                    <h5>{item.typePlan}</h5>
                  </div>
                  <div className="pricing-amount">
                    <strong>{item.pricePlan}</strong>
                  </div>
                  <div className="pricing-amount-type">
                    <span>/{item.frequence}</span>
                  </div>
                  <div className="pricing-feature">
                    <ul>
                      <li>
                        <i class="bx bx-check"></i> Data Analysis
                      </li>
                      <li>
                        <i class="bx bx-check"></i> Web Application
                      </li>
                      <li>
                        <i class="bx bx-check"></i> Content Marketing
                      </li>
                      <li>
                        <i class="bx bx-check"></i> SEO Optimizing
                      </li>
                      <li>
                        <i class="bx bx-check"></i> 24/7 Support
                      </li>
                    </ul>
                  </div>
                  <button className="pricing-footer theme-btn">
                    <Link>Get Started</Link>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
