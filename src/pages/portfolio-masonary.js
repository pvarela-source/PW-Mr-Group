import React, { useEffect, useRef } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import MainLayout from "../layout/MainLayout";
import Link from "next/link";

function PortfolioMesonary({ ...options }) {
  const masonryRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("masonry-layout").then((Masonry) => {
        const masonry = new Masonry.default(masonryRef.current, options);
        masonry.layout();
      });
    }
  }, [options]);

  return (
    <MainLayout>
      <Breadcrumb
        pageName="Portfolio Masonery"
        pageTitle="Portfolio Masonery"
      />
      <div className="portfolio-masonary-section bg-color2 pt-120 pb-120">
        <div className="container">
          <div
            ref={masonryRef}
            className="grid-two row justify-content-center g-4"
          >
            <div className="grid-item col-lg-4 col-md-6 col-sm-10">
              <div className="portfolio-single-two magnetic-item">
                <Link legacyBehavior href="/portfolio-details">
                  <a className="big-arrow">
                    <img src="assets/images/icons/big-arrow.svg" alt="" />
                  </a>
                </Link>
                <img
                  src="assets/images/portfolio/portfolio2-1.jpg"
                  alt="image"
                />
                <div className="overlay">
                  <div className="content">
                    <h3>
                      <Link legacyBehavior href="/portfolio-details">
                        <a>Gorgeous Website Develop With Discussion.</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-4 col-md-6 col-sm-10">
              <div className="portfolio-single-two magnetic-item">
                <Link legacyBehavior href="/portfolio-details">
                  <a className="big-arrow">
                    <img src="assets/images/icons/big-arrow.svg" alt="" />
                  </a>
                </Link>
                <img
                  src="assets/images/portfolio/portfolio2-2.jpg"
                  alt="image"
                />
                <div className="overlay">
                  <div className="content">
                    <h3>
                      <Link legacyBehavior href="/portfolio-details">
                       <a>Modern Tech Always Be Generation.</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-4 col-md-6 col-sm-10">
              <div className="portfolio-single-two magnetic-item">
                <Link legacyBehavior href="/portfolio-details">
                  <a className="big-arrow">
                    <img src="assets/images/icons/big-arrow.svg" alt="" />
                  </a>
                </Link>
                <img
                  src="assets/images/portfolio/portfolio2-3.jpg"
                  alt="image"
                />
                <div className="overlay">
                  <div className="content">
                    <h3>
                      <Link legacyBehavior href="/portfolio-details">
                        <a>
                        SEO Expert of Nearly 2 Decades.
                        </a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-4 col-md-6 col-sm-10">
              <div className="portfolio-single-two magnetic-item">
                <Link legacyBehavior href="/portfolio-details">
                  <a className="big-arrow">
                    <img src="assets/images/icons/big-arrow.svg" alt="" />
                  </a>
                </Link>
                <img
                  src="assets/images/portfolio/portfolio2-4.jpg"
                  alt="image"
                />
                <div className="overlay">
                  <div className="content">
                    <h3>
                      <Link legacyBehavior href="/portfolio-details">
                        <a>
                        How to Stretegy &amp; Policy
                        </a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-4 col-md-6 col-sm-10">
              <div className="portfolio-single-two magnetic-item">
                <Link legacyBehavior href="/portfolio-details">
                  <a className="big-arrow">
                    <img src="assets/images/icons/big-arrow.svg" alt="" />
                  </a>
                </Link>
                <img
                  src="assets/images/portfolio/portfolio2-5.jpg"
                  alt="image"
                />
                <div className="overlay">
                  <div className="content">
                    <h3>
                      <Link legacyBehavior href="/portfolio-details">
                        <a>To Much Change Your Business Strategy.</a>
                      </Link>
                    </h3>
                    <span>Photographer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-4 col-md-6 col-sm-10">
              <div className="portfolio-single-two magnetic-item">
                <Link legacyBehavior href="/portfolio-details">
                  <a className="big-arrow">
                    <img src="assets/images/icons/big-arrow.svg" alt="" />
                  </a>
                </Link>
                <img
                  src="assets/images/portfolio/portfolio2-6.jpg"
                  alt="image"
                />
                <div className="overlay">
                  <div className="content">
                    <h3>
                      <Link legacyBehavior href="/portfolio-details">
                        <a>Always Be Fast With Our Generation.</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-4 col-md-6 col-sm-10">
              <div className="portfolio-single-two magnetic-item">
                <Link legacyBehavior href="/portfolio-details">
                  <a className="big-arrow">
                    <img src="assets/images/icons/big-arrow.svg" alt="" />
                  </a>
                </Link>
                <img
                  src="assets/images/portfolio/portfolio2-7.jpg"
                  alt="image"
                />
                <div className="overlay">
                  <div className="content">
                    <h3>
                      <Link legacyBehavior href="/portfolio-details">
                        <a>To Perfect Meeting Is the Best .</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-4 col-md-6 col-sm-10">
              <div className="portfolio-single-two magnetic-item">
                <Link legacyBehavior href="/portfolio-details">
                  <a className="big-arrow">
                    <img src="assets/images/icons/big-arrow.svg" alt="" />
                  </a>
                </Link>
                <img
                  src="assets/images/portfolio/portfolio2-8.jpg"
                  alt="image"
                />
                <div className="overlay">
                  <div className="content">
                    <h3>
                      <Link legacyBehavior href="/portfolio-details">
                        <a>Out Solution Perfactly Done Always.</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-4 col-md-6 col-sm-10">
              <div className="portfolio-single-two magnetic-item">
                <Link legacyBehavior href="/portfolio-details">
                  <a className="big-arrow">
                    <img src="assets/images/icons/big-arrow.svg" alt="" />
                  </a>
                </Link>
                <img
                  src="assets/images/portfolio/portfolio2-9.jpg"
                  alt="image"
                />
                <div className="overlay">
                  <div className="content">
                    <h3>
                      <Link legacyBehavior href="/portfolio-details">
                       <a> Business Field Make Whole Change.{" "}</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-70">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="load-more-btn">
                <a className="eg-btn btn--primary btn--lg" href="#">
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default PortfolioMesonary;
