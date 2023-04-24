import React, { useEffect } from "react";

import Helmet from "../components/Helmet/Helmet";

import PageHero from "../components/PageHero/PageHero";
import AboutArea from "../UI/AboutArea";
import CounterArea from "../UI/CounterArea";
import Testimonials from "../UI/Testimonials";
import TeamArea from "../UI/TeamArea";
import Partners from "../UI/Partners";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title="About US">
      <main>
        <PageHero pageTitle={"About US"} currentPage={"About"} />
        <AboutArea />
        <CounterArea />
        <Testimonials />
        <TeamArea />
        <Partners />
      </main>
    </Helmet>
  );
};

export default About;
