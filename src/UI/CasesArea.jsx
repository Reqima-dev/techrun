import React, { useState } from "react";
import "../styles/caseArea.css";
import { caseData } from "../data/casesData";
import { Link } from "react-router-dom";

export function FilterContainer() {
  const [categorieFiltre, setCategorieFiltre] = useState("tous");
  const [transition, setTransition] = useState(false);
  const filtrerParCategorie = (categ) => {
    setCategorieFiltre(categ);
    setTransition(true);
    setTimeout(() => {
      setTransition(false);
    }, 500);
  };
  const produitsFiltres =
    categorieFiltre === "tous"
      ? caseData
      : caseData.filter((caseData) => caseData.categ === categorieFiltre);

  return (
    <div className="caseFilterContainer">
      <div className="filterBtn">
        <button
          onClick={() => filtrerParCategorie("tous")}
          className={categorieFiltre === "tous" ? "current" : "btn"}
        >
          Tout voir
        </button>
        <button
          onClick={() => filtrerParCategorie("DESIGN")}
          className={categorieFiltre === "DESIGN" ? "current" : "btn"}
        >
          DESIGN
        </button>
        <button
          onClick={() => filtrerParCategorie("DEVELOPMENT")}
          className={categorieFiltre === "DEVELOPMENT" ? "current" : "btn"}
        >
          DEVELOPMENT
        </button>
        <button
          onClick={() => filtrerParCategorie("NETWORKING")}
          className={categorieFiltre === "NETWORKING" ? "current" : "btn"}
        >
          NETWORKING
        </button>
        <button
          onClick={() => filtrerParCategorie("ANALYTICS")}
          className={categorieFiltre === "ANALYTICS" ? "current" : "btn"}
        >
          ANALYTICS
        </button>
      </div>
      <div className="caseFilterContext">
        {produitsFiltres.map((item) => {
          return (
            <div
              className={
                transition ? " filter-item filter-item-active" : "filter-item"
              }
              key={item.id}
            >
              <div className="case_img">
                <img src={item.img} alt={item.Title} />
              </div>
              <div className="case_content">
                <div className="case-content-info">
                  <small>{item.categ}</small>
                  <Link to="#." className="case-title">
                    {item.Title}
                  </Link>
                </div>
                <Link to="#." className="case-arrow">
                  <span class="material-icons-sharp">arrow_forward</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const CasesArea = () => {
  return (
    <>
      <div className="service_area">
        <div className="cases_areaContent">
          <div className="headArea">
            <span className="site-title-tagline">CASES</span>
            <h2 className="site-title">
              Featured <span>Projects</span>
            </h2>
            <div className="heading-divider"></div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <FilterContainer />
        </div>
      </div>
    </>
  );
};

export default CasesArea;
