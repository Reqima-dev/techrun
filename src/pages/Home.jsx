import React, { useEffect } from "react";

import Hero from "../UI/Hero";
import Feature from "../UI/Feature";
import AboutArea from "../UI/AboutArea";
import ServiceArea from "../UI/ServiceArea";
import Skills from "../UI/Skills";
import CounterArea from "../UI/CounterArea";
import CasesArea from "../UI/CasesArea";
import CHooseArea from "../UI/CHooseArea";
import VideoArea from "../UI/VideoArea";
import WorkingProcess from "../UI/WorkingProcess";
import TeamArea from "../UI/TeamArea";
import PricingPlan from "../UI/PricingPlan";
import Testimonials from "../UI/Testimonials";
import BLogArea from "../UI/BLogArea";
import CtaArea from "../UI/CtaArea";
import Partners from "../UI/Partners";
import Helmet from "../components/Helmet/Helmet";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="TECHRUN - Technology Services Company">
      <main>
        <Hero />
        <Feature />
        <AboutArea />
        <ServiceArea />
        <Skills />
        <CounterArea />
        <CasesArea />
        <CHooseArea />
        <VideoArea />
        <WorkingProcess />
        <TeamArea />
        <PricingPlan />
        <Testimonials />
        <BLogArea />
        <CtaArea />
        <Partners />
      </main>
    </Helmet>
  );
};

export default Home;
