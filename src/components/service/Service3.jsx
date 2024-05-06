import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function Service3() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 10,
      centerslides: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: ".blog-three-next",
        prevEl: ".blog-three-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        540: {
          slidesPerView: 1,
        },
        769: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <div className="servcie-section pt-120 overflow-hidden">
      <div className="container-fluid">
        <div className="row justify-content-center mb-50">
          <div className="col-lg-10">
            <div className="section-title-four sibling-two text-center">
              <span>MR Consulting Group</span>
              <h2>
                 Una muestra de nuestros <span> Servicios </span>{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper {...slider} className="swiper service-three-slider">
              <div className="swiper-wrapper">
                {/* Marketing */}
                <SwiperSlide className="swiper-slide">
                  <div className="service-three-single">
                    <div className="circle-border">
                      <img src="assets/images/bg/circle-vector2.svg" alt="" />
                    </div>
                    <div className="service-three-front">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-1.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Marketing</h4>
                      <p>
                        Se encargaran de plasmar tus ideas.
                      </p>
                      {/* <Link legacyBehavior href="/service-details"> */}
                      <Link legacyBehavior href="/services-two">
                        <a className="service-btn">
                          <img
                            src="assets/images/icons/btn-arrow3.svg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div
                      className="service-three-back"
                      style={{
                        background:
                          'linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)) ,url("assets/images/MrConsultingGroup/Img Servicios MR/Marketing.jpg")',
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    >
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-1.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Marketing</h4>
                      <Link legacyBehavior href="/services-two">
                        <a>Leer Más</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Publicidad */}
                <SwiperSlide className="swiper-slide">
                  <div className="service-three-single">
                    <div className="circle-border">
                      <img src="assets/images/bg/circle-vector2.svg" alt="" />
                    </div>
                    <div className="service-three-front">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-1.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Publicidad</h4>
                      <p>
                        Estamos listo para crear piezas visuales impresionantes.
                      </p>
                      <Link legacyBehavior href="/services-two">
                        <a className="service-btn">
                          <img
                            src="assets/images/icons/btn-arrow3.svg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div
                      className="service-three-back"
                      style={{
                        background:
                          'linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)) ,url("assets/images/MrConsultingGroup/Img Servicios MR/Publicidad.jpg")',
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    >
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-1.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Publicidad</h4>
                      <Link legacyBehavior href="/services-two">
                        <a>Leer Más</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                {/* servicios Cloud */}
                <SwiperSlide className="swiper-slide">
                  <div className="service-three-single">
                    <div className="circle-border">
                      <img src="assets/images/bg/circle-vector2.svg" alt="" />
                    </div>
                    <div className="service-three-front">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-3.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Servicios Cloud</h4>
                      <p>
                        No te quedes atrás en la era digital.
                      </p>
                      <Link legacyBehavior href="/services-two">
                        <a className="service-btn">
                          <img
                            src="assets/images/icons/btn-arrow3.svg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div
                      className="service-three-back"
                      style={{
                        background:
                          'linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)) ,url("assets/images/MrConsultingGroup/Img Servicios MR/Soluciones-en-la-nube.jpg")',
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    >
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-1.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Servicios Cloud</h4>
                      <Link legacyBehavior href="/services-two">
                        <a>Leer Más</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                {/* diseño pagina web */}
                <SwiperSlide className="swiper-slide">
                  <div className="service-three-single">
                    <div className="circle-border">
                      <img src="assets/images/bg/circle-vector2.svg" alt="" />
                    </div>
                    <div className="service-three-front">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-2.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Diseño Paginas Web</h4>
                      <p>
                        Impulsa tu negocio en línea con un sitio web profesional y efectivo.
                      </p>
                      <Link legacyBehavior href="/services-two">
                        <a className="service-btn">
                          <img
                            src="assets/images/icons/btn-arrow3.svg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div
                      className="service-three-back"
                      style={{
                        background:
                          'linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)) ,url("assets/images/MrConsultingGroup/Img Servicios MR/PaginaWeb.jpg")',
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    >
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-1.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Diseño Paginas Web</h4>
                      <Link legacyBehavior href="/services-two">
                        <a>Leer Más</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Cumplimiento tributario */}
                <SwiperSlide className="swiper-slide">
                  <div className="service-three-single">
                    <div className="circle-border">
                      <img src="assets/images/bg/circle-vector2.svg" alt="" />
                    </div>
                    <div className="service-three-front">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-2.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Cumplimiento tributario</h4>
                      <p>
                        Es crucial mantenerse informado sobre las leyes fiscales y
                        trabajar en estrecha colaboración con 
                        asesores fiscales.
                      </p>
                      <Link legacyBehavior href="/services-two">
                        <a className="service-btn">
                          <img
                            src="assets/images/icons/btn-arrow3.svg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div
                      className="service-three-back"
                      style={{
                        background:
                          'linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)) ,url("assets/images/MrConsultingGroup/Img Servicios MR/CumplimientoTri.jpg")',
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    >
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-1.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Cumplimiento tributario</h4>
                      <Link legacyBehavior href="/services-two">
                        <a>Leer Más</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="service-three-single">
                    <div className="circle-border">
                      <img src="assets/images/bg/circle-vector2.svg" alt="" />
                    </div>
                    <div className="service-three-front">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-3.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Capacitaciones Cumplimiento tributario</h4>
                      <p>
                        Estas capacitaciones ofrecen conocimientos actualizados sobre las leyes y regulaciones tributarias.
                      </p>
                      <Link legacyBehavior href="/services-two">
                        <a className="service-btn">
                          <img
                            src="assets/images/icons/btn-arrow3.svg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div
                      className="service-three-back"
                      style={{
                        background:
                          'linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)) ,url("assets/images/MrConsultingGroup/Img Servicios MR/CapacitacionTributaria.jpg")',
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    >
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-1.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Capacitaciones Cumplimiento tributario</h4>
                      <Link legacyBehavior href="/services-two">
                        <a>Leer Más</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                {/* <SwiperSlide className="swiper-slide">
                  <div className="service-three-single">
                    <div className="circle-border">
                      <img src="assets/images/bg/circle-vector2.svg" alt="" />
                    </div>
                    <div className="service-three-front">
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-4.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Block Chain</h4>
                      <p>
                        Power of choice is untrammelled and when nothing
                        prevents.
                      </p>
                      <Link legacyBehavior href="/service-details">
                        <a className="service-btn">
                          <img
                            src="assets/images/icons/btn-arrow3.svg"
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div
                      className="service-three-back"
                      style={{
                        background:
                          'linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)) ,url("assets/images/bg/service3-4.jpg")',
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    >
                      <div className="icon">
                        <img
                          src="assets/images/icons/service3-1.svg"
                          alt="image"
                        />
                      </div>
                      <h4>Block Chain</h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Conoce Más</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide> */}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service3;
