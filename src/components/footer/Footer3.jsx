import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function Footer3() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
      freeMode: true,
      speed: 5000,
      freemodemomentum: false,
      breakpoints: {
        280: {
          slidesPerView: 2,
        },
        // 386: {
        //   slidesPerView: 3,
        // },
        // 576: {
        //   slidesPerView: 3,
        // },
        // 768: {
        //   slidesPerView: 4,
        // },
        // 992: {
        //   slidesPerView: 4,
        // },
        // 1200: {
        //   slidesPerView: 3,
        // },
        // 1400: {
        //   slidesPerView: 4,
        // },
        // 1600: {
        //   slidesPerView: 5,
        // },
      },
    };
  }, []);
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <iframe
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.32809515636!2d90.3665091154322!3d23.806929392530332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee9c8c30!2sMirpur%2010%20Roundabout%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1671510521035!5m2!1sen!2sbd"
                //src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFwATaNGiDpZEb9Rz0x-QNLZpw1RIYZiA&q=3QMX+G5 Tegucigalpa"
                //src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBFwATaNGiDpZEb9Rz0x-QNLZpw1RIYZiA&center=14.0833,-87.2018&zoom=18&maptype=roadmap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1150.5214507996923!2d-87.20262473211889!3d14.084420007336583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa2b553ab8f95%3A0x3fee288df7337208!2sColonia%20Humuya%2C%20Tegucigalpa%2C%20Francisco%20Moraz%C3%A1n!5e0!3m2!1ses-419!2shn!4v1705963571924!5m2!1ses-419!2shn"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-sibling-three">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-4 order-sm-1 order-2">
              <div className="footer-info">
                <div className="footer-logo">
                  <img src="assets/images/MrConsultingGroup/logo/MRCGR3.png" alt="image" />
                  {/* <img src="assets/images/bg/footer3-logo.svg" alt="image" /> */}
                </div>
                <span>
                  <img
                    src="assets/images/icons/title-vector3.svg"
                    alt="image"
                  />
                </span>
                <p>
                  Soluciones inteligentes para desafíos complejos.
                </p>
                <ul className="footer-social sibling-three">
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </li>
                  {/* <li>
                    <a href="https://www.pinterest.com/">
                      <i className="bx bxl-pinterest-alt" />
                    </a>
                  </li> */}
                  <li>
                    <a href="https://www.facebook.com/mrconsultinggroup" target="_blank">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/mr_consulting_group/ " target="_blank">
                      <i className="bx bxl-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 pt-90 order-sm-2 order-1">
              <div className="row mb-70 gy-5">
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="footer-list-area">
                    <h3 className="footer-list-title">Nuestros servicios</h3>
                    <ul className="footer-list sibling-three">
                      <li>
                        <a href="#">Website Design</a>
                      </li>
                      <li>
                        <a href="#">Content Writing</a>
                      </li>
                      <li>
                        <a href="#">SEO Marketing</a>
                      </li>
                      <li>
                        <a href="#">Video Editing</a>
                      </li>
                      <li>
                        <a href="#">Copy Writing</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-6">
                  <div className="footer-list-area">
                    <h3 className="footer-list-title">Dirección Oficina</h3>
                    <ul className="footer-address-list sibling-three">
                      <li>
                        <div className="icon">
                          <i className="bi bi-envelope" />
                        </div>
                        <div className="address">
                          <a href="mailto:info@example1.com">
                            servicioalcliente@mrcgr.com
                          </a>
                          {/* <a href="mailto:info@example2.com">
                            info@example2.com
                          </a> */}
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="bi bi-geo-alt" />
                        </div>
                        <div className="address">
                          <a href="#">NewYork City, Office-01, Road-01</a>
                          <a href="#">House-3A/B, Section-B</a>
                        </div>
                      </li>
                    </ul>
                    <a
                      className="eg-btn btn--lg btn--primary-outline style-two"
                      data-bs-toggle="modal"
                      href="#exampleModalToggle"
                      role="button"
                    >
                      Obtener mapa del sitio
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="footer-list-area">
                    <h3 className="footer-list-title">Más información</h3>
                    <ul className="footer-list sibling-three">
                      <li>
                        <Link legacyBehavior href="/contact">
                          <a>Contact Us</a>
                        </Link>
                      </li>
                      <li>
                        <a href="#">Privacy &amp; Policy</a>
                      </li>
                      <li>
                        <a href="#">Cookie Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row pb-90 g-4 align-items-center justify-content-center">
                <div className="col-xxl-2 col-xl-3 col-lg-3 text-lg-start text-center">
                  <h3 className="footer-award-title">Partner:</h3>
                </div>
                <div className="col-xxl-10 col-xl-9 col-lg-9">
                  <Swiper
                    {...slider}
                    className="swiper footer-award-slider"
                    data-cursor="Drag"
                  >
                    <div className="swiper-wrapper swiper-wrapper align-items-center">
                      <SwiperSlide className="swiper-slide">
                        <div className="achievement-single">
                          <img
                            //src="assets/images/company/foot-award1.png"
                            src="assets/images/MrConsultingGroup/partner/Logo-Grupo-Asica.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="achievement-single">
                          <img
                            src="assets/images/MrConsultingGroup/partner/Logo-Microsoft.png"
                            // src="assets/images/company/foot-award2.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      {/* <SwiperSlide className="swiper-slide">
                        <div className="achievement-single">
                          <img
                            src="assets/images/company/foot-award3.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="achievement-single">
                          <img
                            src="assets/images/company/foot-award4.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="achievement-single">
                          <img
                            src="assets/images/company/foot-award2.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="achievement-single">
                          <img
                            src="assets/images/company/foot-award2.png"
                            alt=""
                          />
                        </div>
                      </SwiperSlide> */}
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="row copyright-area">
            <div className="col-lg-12 text-center">
              <p>
                ©copyright 2024 Mr Consulting Group | Diseñado por{" "}
                <a href="#" className="linear-text-three">
                  Mr Consulting Group
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer3;
