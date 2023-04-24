import React, { useEffect } from "react";
import PageHero from "../components/PageHero/PageHero";

import Helmet from "../components/Helmet/Helmet";
import { BlogContent } from "../UI/BLogArea";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="Our Blog">
      <PageHero pageTitle={"Our Blog"} currentPage={"Our Blog"} />
      <br />
      <br />
      <br />
      <br />
      <div className="service_areaContent">
        <BlogContent />
        <BlogContent />
      </div>
      <br />
      <br />
      <br />
      <br />
    </Helmet>
  );
};

export default Blog;
