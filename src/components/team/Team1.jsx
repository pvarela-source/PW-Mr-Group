import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade]);
function Team1() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 10,

      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
      },
      navigation: {
        nextEl: ".casestudy-one-next",
        prevEl: ".casestudy-one-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        540: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
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
    <div className="team-one-section pt-90 pb-120 mobile-padding">
      <div className="container">
        <div className="row align-items-center mb-60">
          <div className="col-lg-9">
            <div className="section-title-one">
              <div className="section-subtitle">
                <img src="assets/images/icons/title-shape-before.svg" alt="" />
                Techio Experties
                <img src="assets/images/icons/title-shape-after.svg" alt="" />
              </div>
              <h2>
                Expert Team <span>Available</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-end">
            <div className="slider-arrows arrow-style-one text-center d-lg-flex d-none flex-row justify-content-center align-items-center gap-4">
              <div
                className="casestudy-one-next swiper-next-arrow"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                <i className="bi bi-arrow-left" />
              </div>
              <div
                className="casestudy-one-prev swiper-prev-arrow"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <i className="bi bi-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper {...slider} className="swiper team-one">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="team-one-single">
                    <div className="team-one-image">
                      <img
                        src="assets/images/team/team-one-1.png"
                        alt="image"
                      />
                      <div className="team-social-area gap-3">
                        <div className="social-plus">
                          <i className="bx bx-plus" />
                        </div>
                        <ul className="social-links d-flex justify-content-center align-items-center flex-row gap-2">
                          <li>
                            <a href="https://www.linkedin.com/">
                              <i className="bx bxl-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="bx bxl-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="bx bxl-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com/">
                              <i className="bx bxl-twitter" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-one-info">
                      <h4>Robert Mile</h4>
                      <p>CEO &amp; Founder</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="team-one-single">
                    <div className="team-one-image">
                      <img
                        src="assets/images/team/team-one-2.png"
                        alt="image"
                      />
                      <div className="team-social-area gap-3">
                        <div className="social-plus">
                          <i className="bx bx-plus" />
                        </div>
                        <ul className="social-links d-flex justify-content-center align-items-center flex-row gap-2">
                          <li>
                            <a href="https://www.linkedin.com/">
                              <i className="bx bxl-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="bx bxl-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="bx bxl-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com/">
                              <i className="bx bxl-twitter" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-one-info">
                      <h4>Karrena Moly</h4>
                      <p>Ract Developer</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="team-one-single">
                    <div className="team-one-image">
                      <img
                        src="assets/images/team/team-one-3.png"
                        alt="image"
                      />
                      <div className="team-social-area gap-3">
                        <div className="social-plus">
                          <i className="bx bx-plus" />
                        </div>
                        <ul className="social-links d-flex justify-content-center align-items-center flex-row gap-2">
                          <li>
                            <a href="https://www.linkedin.com/">
                              <i className="bx bxl-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="bx bxl-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="bx bxl-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com/">
                              <i className="bx bxl-twitter" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-one-info">
                      <h4>Karrena Bowmik</h4>
                      <p>WordPress Developer</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="team-one-single">
                    <div className="team-one-image">
                      <img
                        src="assets/images/team/team-one-4.png"
                        alt="image"
                      />
                      <div className="team-social-area gap-3">
                        <div className="social-plus">
                          <i className="bx bx-plus" />
                        </div>
                        <ul className="social-links d-flex justify-content-center align-items-center flex-row gap-2">
                          <li>
                            <a href="https://www.linkedin.com/">
                              <i className="bx bxl-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="bx bxl-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="bx bxl-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com/">
                              <i className="bx bxl-twitter" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-one-info">
                      <h4>Jonathon Smith</h4>
                      <p>UI/UX Designer</p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team1;
