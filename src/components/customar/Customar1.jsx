import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, Pagination, EffectFade]);

function Customar1() {
  const slider = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
      freeMode: true,
      speed: 5000,
      freemodemomentum: false,
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
          slidesPerView: 2,
        },
        386: {
          slidesPerView: 2,
        },
        540: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
      },
    };
  }, []);
  return (
    <div className="customer-section pt-120 pb-120">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="section-title-small">
              <h5>Hey! 25K+ Customer Alreday Joined Our Company</h5>
            </div>
            <Swiper {...slider} className="swiper customer-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="customer-logo">
                    <a href="#">
                      <img
                        src="assets/images/company/customer-logo1.png"
                        alt="image"
                      />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="customer-logo">
                    <a href="#">
                      <img
                        src="assets/images/company/customer-logo2.png"
                        alt="image"
                      />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="customer-logo">
                    <a href="#">
                      <img
                        src="assets/images/company/customer-logo2.png"
                        alt="image"
                      />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="customer-logo">
                    <a href="#">
                      <img
                        src="assets/images/company/customer-logo4.png"
                        alt="image"
                      />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="customer-logo">
                    <a href="#">
                      <img
                        src="assets/images/company/customer-logo5.png"
                        alt="image"
                      />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="customer-logo">
                    <a href="#">
                      <img
                        src="assets/images/company/customer-logo6.png"
                        alt="image"
                      />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="customer-logo">
                    <a href="#">
                      <img
                        src="assets/images/company/customer-logo3.png"
                        alt="image"
                      />
                    </a>
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

export default Customar1;
