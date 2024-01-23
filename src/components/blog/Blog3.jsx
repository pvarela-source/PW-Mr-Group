import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, Pagination, EffectFade]);
function Blog3() {
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
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2.3,
        },
        1600: {
          slidesPerView: 2.6,
        },
      },
    };
  }, []);
  return (
    <div className="blog-three-section pb-120">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title-five">
              <h2>TechGen LATEST BLOG &amp; ARTICLE.</h2>
              <p>
                Denouncing pleasure and praising pain was born and I will give
                you a complete account of the system.
              </p>
            </div>
            <div className="blog-three-arrow">
              <div className="slider-arrows arrow-style-two d-flex justify-content-lg-end justify-content-start gap-4">
                <div
                  className="blog-three-prev swiper-prev-arrow"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                >
                  <img src="assets/images/icons/arrow-left4.svg" alt="" />
                </div>
                <div className="swiper-pagination" />
                <div
                  className="blog-three-next swiper-next-arrow"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                >
                  <img src="assets/images/icons/arrow-right4.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <Swiper {...slider} className="swiper blog-four-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="blog-four-single">
                    <div className="blog-four-image">
                      <Link legacyBehavior href="/blog-details">
                        <a className="blog-cat">Consulting</a>
                      </Link>
                      <img src="assets/images/blog/blog4-1.jpg" alt="" />
                    </div>
                    <div className="blog-four-content">
                      <ul className="blog-four-meta">
                        <li>
                          <Link legacyBehavior href="/blog-details">
                            <a>John Doe</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-details">
                            <a>10 Apr 2023</a>
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-four-title">
                        <Link
                          legacyBehavior
                          href="/blog-details"
                          data-cursor="View Details"
                        >
                          <a>IT Consulting To Change Company strategy.</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="blog-four-single">
                    <div className="blog-four-image">
                      <Link legacyBehavior href="/blog-details">
                        <a className="blog-cat">Technology</a>
                      </Link>
                      <img src="assets/images/blog/blog4-2.jpg" alt="" />
                    </div>
                    <div className="blog-four-content">
                      <ul className="blog-four-meta">
                        <li>
                          <Link legacyBehavior href="/blog-details">
                            <a>Peterson</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-details">
                            <a>10 Apr 2023</a>
                          </Link>{" "}
                        </li>
                      </ul>
                      <h3 className="blog-four-title">
                        <Link legacyBehavior href="/blog-details">
                          <a>Modern Technoloy To Generate Update.</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="blog-four-single">
                    <div className="blog-four-image">
                      <Link legacyBehavior href="/blog-details">
                        <a className="blog-cat">Consulting</a>
                      </Link>
                      <img src="assets/images/blog/blog4-2.jpg" alt="" />
                    </div>
                    <div className="blog-four-content">
                      <ul className="blog-four-meta">
                        <li>
                          <Link legacyBehavior href="/blog-details">
                            <a>Carnegi</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-details">
                            <a>10 Apr 2023</a>
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-four-title">
                        <Link
                          legacyBehavior
                          href="/blog-details"
                          data-cursor="View Details"
                        >
                          <a>To Make Gorgeous Product With Us.</a>
                        </Link>
                      </h3>
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

export default Blog3;
