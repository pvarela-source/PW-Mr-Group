import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade, Pagination]);

function PortfolioSlider() {
  const slider = useMemo(()=>{
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 10,
      centerslides: true,
      loop: true,
      autoplay: true,
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 2
        },
        1400: {
          slidesPerView: 2
        },
      }
      }
    },[])
  return (
    <div className="portfolio-slider-section pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Swiper {...slider} className="swiper portfolio-sldier">
              <div className="swiper-wrapper" data-cursor="Drag">
                <SwiperSlide className="swiper-slide">
                  <div className="portfolio-three-single">
                    <div className="portfolio-three-image">
                      <img
                        src="assets/images/portfolio/port-slider1.jpg"
                        alt=""
                      />
                      <div className="portfolio-three-content">
                        <div className="subtitle">
                          <p>Digital Marketing</p>
                        </div>
                        <div className="title">
                          <h3>
                            <Link legacyBehavior href="/portfolio-details">
                              <a>Marketing Stranger Change.</a>
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="portfolio-three-single">
                    <div className="portfolio-three-image">
                      <img
                        src="assets/images/portfolio/port-slider2.jpg"
                        alt=""
                      />
                      <div className="portfolio-three-content">
                        <div className="subtitle">
                          <p>Business Startup</p>
                        </div>
                        <div className="title">
                          <h3>
                            <Link legacyBehavior href="/portfolio-details">
                              <a>Make Sure Startup Agency.</a>
                            </Link>
                          </h3>
                        </div>
                      </div>
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

export default PortfolioSlider;
