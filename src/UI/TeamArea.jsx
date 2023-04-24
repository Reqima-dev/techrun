import React from "react";
import "../styles/teamArea.css";
import "../styles/servicearea.css";
import { teamData } from "../data/teamData";
import { Link } from "react-router-dom";

const TeamArea = () => {
  return (
    <>
      <div className="service_area teamArea">
        <div className="service_areaContent">
          <div className="headArea">
            <span className="site-title-tagline">TEAM</span>
            <h2 className="site-title">
              Meet <span>Experts</span>
            </h2>
            <div className="heading-divider"></div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="teamBox">
            {teamData.map((item, id) => {
              return (
                <div className="team-item" key={id}>
                  <img src={item.picutre} alt={item.name} />
                  <div className="team-social">
                    <Link to="#.">
                      <i class="bx bxl-facebook"></i>
                    </Link>
                    <Link to="#.">
                      <i class="bx bxl-twitter"></i>
                    </Link>
                    <Link to="#.">
                      <i class="bx bxl-instagram"></i>
                    </Link>
                    <Link to="#.">
                      <i class="bx bxl-linkedin"></i>
                    </Link>
                    <Link to="#.">
                      <i class="bx bxl-github"></i>
                    </Link>
                  </div>
                  <div className="team-content">
                    <div className="team-bio">
                      <h5>{item.name}</h5>
                      <span>{item.profession}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamArea;
