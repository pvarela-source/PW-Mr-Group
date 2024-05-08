import React from "react";
import Header3 from "../components/header/Header3";
import About3 from "../components/about/About3";
import Banner3 from "../components/banner/Banner3";
import Blog3 from "../components/blog/Blog3";
import CaseStudy3 from "../components/caseStudy/CaseStudy3";
import Contacte3 from "../components/contact/Contacte3";
import Customar3 from "../components/customar/Customar3";
import Footer3 from "../components/footer/Footer3";
import Service3 from "../components/service/Service3";
import Team3 from "../components/team/Team3";
import Testimonial3 from "../components/testimonial/Testimonial3";
import Video3 from "../components/video/Video3";
import Head from "next/head";

function IndexTechnology() {
  return (
    <>
      <Head>
         <title>MrGroup - MR Consulting Group</title>
         <meta name="description" content="Soluciones inteligentes para desafíos complejos." />
         <link rel="icon" href="assets/images/MrConsultingGroup/icono/mrcgr_svg01.svg" />
      </Head>
      <Header3 />
      <Banner3 />
      <About3 />
      <Video3 />
      <Service3 />
      {/* <Customar3 />
      <Testimonial3 /> */}
      <Contacte3 />
      {/* <CaseStudy3 /> */}
      {/* <Team3 /> */}
      {/* <Blog3 /> */}
      <div className="servcie-section pt-120 overflow-hidden"></div>
      <Footer3 />
    </>
  );
}

export default IndexTechnology;
