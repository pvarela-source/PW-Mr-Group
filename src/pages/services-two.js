import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import serviceData from "../data/service-data.json";
import MainLayout from "../layout/MainLayout";

function serviceTwo() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Servicios" pageTitle="Servicios" />
      <div className="service-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title-six text-center mb-60">
                <span>MR Consulting Group</span>
                <h2>
                  Conoce <span>Mas</span> Sobre Nuestros Servicios
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {serviceData.map((item) => {
              return (
                <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-two-single">
                    <div className="service-two-icon">
                      <img src={item.img_2} alt="" />
                      <span />
                      <div className="serial-number">{item.id}</div>
                    </div>
                    <div className="service-two-content">
                      <h3>
                        {/* <Link legacyBehavior href="/service-details"> */}
                        <Link legacyBehavior href="/contact">
                          <a>{item.title}</a>
                        </Link>
                      </h3>
                      <div className="container">
                        <p>{item.description_two}</p>
                      </div>
                      {/* <Link legacyBehavior href="/service-details"> */}
                      <Link legacyBehavior href="/contact">
                        <a className="explore-btn">Contáctanos</a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default serviceTwo;
