import React, { useEffect } from "react";
import PageHero from "../components/PageHero/PageHero";

import Helmet from "../components/Helmet/Helmet";
import { ServiceContent } from "../UI/ServiceArea";

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="Our Service">
      <main>
        <PageHero pageTitle={"Service"} currentPage={"Service"} />
        <br />
        <br />
        <br />
        <br />
        <div className="service_areaContent">
          <ServiceContent />
        </div>
        <br />
        <br />
        <br />
        <br />
      </main>
    </Helmet>
  );
};

export default Service;
