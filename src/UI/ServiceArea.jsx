import React from "react";
import "../styles/servicearea.css";
import { service } from "../data/serviceData";
import { Link } from "react-router-dom";

export function ServiceContent() {
  return (
    <div className="serviceContent">
      {service.map((item, id) => {
        return (
          <div className="service_item" key={id}>
            <div className="service-icon">
              <img src={item.icon} alt={item.title} />
            </div>
            <div className="service-title">
              <Link to="#.">{item.title} </Link>
            </div>
            <p>{item.paragraph}</p>
            <div className="service-arrow">
              <Link to="#." class="service-read-btn">
                Learn More
                <span class="material-icons-sharp"> trending_flat </span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const ServiceArea = () => {
  return (
    <>
      <div className="service_area">
        <div className="service_areaContent">
          <div className="headArea">
            <span className="site-title-tagline">SERVICES</span>
            <h2 className="site-title">
              What We <span>Offer</span>
            </h2>
            <div className="heading-divider"></div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <ServiceContent />
        </div>
      </div>
    </>
  );
};

export default ServiceArea ;
