import React from "react";
import "../PageHero/pageHero.css";
import { useNavigate } from "react-router-dom";
import shape4 from "../../assets/shape-4.svg";

const PageHero = ({ pageTitle, content, currentPage }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/home");
  };
  return (
    <div className="site-breadcrumb">
      <div className="page_heroContent">
        <h2 className="breadcrumb-title">{pageTitle}</h2>
        <p>{content}</p>
        <div className="heroBackLink">
          <button onClick={handleGoBack}>
            <i class="bx bx-home"></i>
            Home
          </button>
          <span className="currentPage">
            <i class="bx bx-chevrons-right"></i>
            {currentPage}
          </span>
        </div>
      </div>
      <div className="breadcrumb-shape">
        <img src={shape4} alt="" />
      </div>
    </div>
  );
};

export default PageHero;
