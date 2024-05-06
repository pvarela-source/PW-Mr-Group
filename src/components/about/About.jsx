import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function About() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 3000, // Autoplay duration in milliseconds
      },
      breakpoints: {
        280: {
          slidesPerView: 2,
        },
        386: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <div className="about-secion pl-110 pr-110 pt-120" id="about">
      <div className="container-fluid about-five-quote">
        <div className="row align-items-start justify-content-center">
          <div className="col-xl-5 col-lg-6 order-lg-1 order-2">
            <div className="about-five-image">
              <img src="assets/images/MrConsultingGroup/acercaDe/MRCGR.jpg" alt="image" />
              <div className="about-five-quote">
                <h4>
                  Nuestro objetivo es la solución y desarrollo empresarial. <span className="solid-line" />
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 ps-xl-5 ps-lg-3 order-lg-2 order-1">
            <div className="section-title-four style-two text-start mb-15">
              <span className="linear-text-two">MR Consulting Group</span>
              <h2>
                Cambia la{" "}
                <span className="linear-text-two"> Estrategia</span>{" "}
                de tu empresa{" "}
              </h2>
            </div>
            <p className="mb-30">
              
              Nuestra empresa de consultoría cuenta con una trayectoria sólida y exitosa en el mercado, 
              respaldada por un equipo de profesionales altamente calificados y con amplia 
              experiencia en diversas áreas. Desde nuestra fundación, 
              nos hemos destacado por ofrecer soluciones innovadoras y a medida para nuestros clientes, 
              ayudándoles a alcanzar sus objetivos y superar sus desafíos empresariales.
              <br />
              Nos avalan nuestra experiencia trabajando con empresas de diversos tamaños y sectores, 
              lo que nos ha permitido desarrollar un profundo conocimiento de las necesidades y tendencias del mercado. 
              Nuestro compromiso con la excelencia y la calidad en el servicio nos ha convertido en socios estratégicos de confianza para nuestros clientes, 
              quienes han encontrado en nosotros un aliado comprometido con su éxito.
              <br />
              En cada proyecto que emprendemos, buscamos superar las expectativas de nuestros clientes, 
              ofreciendo soluciones creativas, eficientes y orientadas a resultados. 
              Nuestra reputación se basa en la satisfacción y fidelidad de nuestros clientes.
            </p>
            {/* <h4 className="achivement-title">Our Achievements:</h4>
            <Swiper {...slider} className="swiper achievement-slider mb-60">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img
                      src="assets/images/company/achieve-1.png"
                      alt="image"
                    />
                    <h6>Human Agency -22</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img
                      src="assets/images/company/achieve-2.png"
                      alt="image"
                    />
                    <h6>Best Quality Service</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img
                      src="assets/images/company/achieve-1.png"
                      alt="image"
                    />
                    <h6>Human Agency -22</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img
                      src="assets/images/company/achieve-3.png"
                      alt="image"
                    />
                    <h6>International Award</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img
                      src="assets/images/company/achieve-1.png"
                      alt="image"
                    />
                    <h6>Human Agency -22</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img
                      src="assets/images/company/achieve-1.png"
                      alt="image"
                    />
                    <h6>Galaxy Award-18</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img
                      src="assets/images/company/achieve-2.png"
                      alt="image"
                    />
                    <h6>Human Agency -22</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="achievement-single">
                    <img
                      src="assets/images/company/achieve-1.png"
                      alt="image"
                    />
                    <h6>Human Agency -22</h6>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="explore-button style-two">
              <Link legacyBehavior href="/service-details">
                <a>
                  <img
                    src="assets/images/icons/button-arro-linear-big.svg"
                    alt="image"
                  />{" "}
                  Explore More
                </a>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
