import React, { useEffect } from "react";
import PageHero from "../components/PageHero/PageHero";
import { FilterContainer } from "../UI/CasesArea";
import Helmet from "../components/Helmet/Helmet";

const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="Our Projects">
      <main>
        <PageHero pageTitle={"Project"} currentPage={"Project"} />
        <br />
        <br />
        <br />
        <br />
        <div className="cases_areaContent">
          <FilterContainer />
        </div>
        <br />
        <br />
        <br />
        <br />
      </main>
    </Helmet>
  );
};

export default Project;
