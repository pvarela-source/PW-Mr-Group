import React from "react";
import Newslatter from "../components/common/Newslatter";
import Footer from "../components/footer/Footer";
import LayoutHeader from "../components/header/LayoutHeader";
import Topbar1 from "../components/topbar/Topbar1";
import Header3 from "../components/header/Header3";
import Head from "next/head";
import Footer3 from "../components/footer/Footer3";

function MainLayout({ children }) {
  return (
    <>
      <Head>
       <title>MrGroup - MR Consulting Group</title>
       <meta name="description" content="Soluciones inteligentes para desafíos complejos." />
       <link rel="icon" href="assets/images/MrConsultingGroup/icono/mrcgr_svg01.svg" />
      </Head>
      {/* <Topbar1 /> */}
      <Header3 />
      {/* <LayoutHeader /> */}
      {children}
      {/* <Newslatter /> */}
      <Footer3 />
      {/* <Footer /> */}
    </>
  );
}

export default MainLayout;
