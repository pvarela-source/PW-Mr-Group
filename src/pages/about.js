import React from "react";
import Customar from "../components/clientSection/Customar";
import Breadcrumb from "../components/common/Breadcrumb";
import Team5 from "../components/team/Team5";
import Testimonial5 from "../components/testimonial/Testimonial5";
import Video5 from "../components/video/Video5";
import WorkProcess5 from "../components/workprocess/WorkProcess5";
import MainLayout from "../layout/MainLayout";
import About from "../components/about/About";

function AboutPage() {
  return (
    <MainLayout>
      <Breadcrumb pageName="About Us" pageTitle="About Us" />
      <About />
      <WorkProcess5 />
      <Video5 />
      <Testimonial5 />
      <Customar />
      <Team5 />
    </MainLayout>
  );
}

export default AboutPage;
