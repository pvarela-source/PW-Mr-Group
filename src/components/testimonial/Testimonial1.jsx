import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import SwiperCore, {
  Autoplay,
  EffectFade,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper";

SwiperCore.use([
  Navigation,
  Autoplay,
  Navigation,
  Pagination,
  FreeMode,
  Thumbs,
  EffectFade,
]);

function Testimonial1() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slider = useMemo(() => {
    return {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 10,
      speed: 1500,
      navigation: {
        nextEl: ".testi-one-next",
        prevEl: ".testi-one-prev",
      },
    };
  }, []);

  const thumbs = useMemo(() => {
    return {
      loop: true,
      spaceBetween: 10,
      slidesPerView: "auto",
      speed: 1500,
      freeMode: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: ".testi-one-next",
        prevEl: ".testi-one-prev",
      },
      watchSlidesProgress: true,
    };
  }, []);
  return (
    <div className="testimonial-section mobile-padding pb-120">
      <div className="container">
        <div className="row justify-content-center text-center mb-50">
          <div className="col-lg-10">
            <div className="section-title-one">
              <div className="section-subtitle d-flex justify-content-center">
                <img src="assets/images/icons/title-shape-before.svg" alt="" />
                Testimonials
                <img src="assets/images/icons/title-shape-after.svg" alt="" />
              </div>
              <h2>
                What’s The <span>Client</span> Say
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 mb-40">
            <Swiper {...slider} className="swiper testi-content-slider">
              <div className="quote-icon">
                <img src="assets/images/icons/quote-icon1.svg" alt="image" />
              </div>
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testi-single-one">
                    <p>
                      I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testi-single-one">
                    <p>
                      I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testi-single-one">
                    <p>
                      I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testi-single-one">
                    <p>
                      I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness.
                    </p>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-3 order-lg-1 order-3">
              <div className="user-list-wrapper">
                <ul className="user-list">
                  <li>
                    <a href="#">
                      <img
                        src="assets/images/testimonial/user1.png"
                        alt="image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/images/testimonial/user2.png"
                        alt="image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/images/testimonial/user3.png"
                        alt="image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/images/testimonial/user4.png"
                        alt="image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/images/testimonial/user5.png"
                        alt="image"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <div className="user-number">
                        <h6>
                          {" "}
                          <span>20k</span>Users
                        </h6>
                      </div>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 order-lg-2 order-1 d-flex justify-content-center">
              <Swiper
                {...thumbs}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiper testi-image-slider"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="testi-one-author">
                      <img
                        src="assets/images/testimonial/testi1-1.png"
                        alt="image"
                      />
                      <h4>Holyona Jacky</h4>
                      <p>XYZ Company</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testi-one-author">
                      <img
                        src="assets/images/testimonial/testi1-2.png"
                        alt="image"
                      />
                      <h4>John Marcel</h4>
                      <p>XYZ Company</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testi-one-author">
                      <img
                        src="assets/images/testimonial/testi1-3.png"
                        alt="image"
                      />
                      <h4>Angelina Sena</h4>
                      <p>XYZ Company</p>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
            <div className="col-lg-3 order-lg-3 order-2 d-flex justify-content-lg-end justify-content-center my-lg-0 my-5">
              <div className="slider-arrows arrow-style-one text-center d-flex  flex-row justify-content-center align-items-center gap-4">
                <div
                  className="testi-one-next swiper-next-arrow"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                >
                  <i className="bi bi-arrow-left" />
                </div>
                <div
                  className="testi-one-prev swiper-prev-arrow"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                >
                  <i className="bi bi-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial1;
