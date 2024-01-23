import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import MainLayout from "../layout/MainLayout";

function CasestudyOne() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Case Study One" pageTitle="Case Study One" />
      <div className="portfolio-section pt-120 pb-120">
        <div className="container">
          <div className="row">
            <ul
              className="nav nav-tabs nav-style-three justify-content-xl-between justify-content-center"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#tab-one"
                  aria-selected="true"
                  role="tab"
                  tabIndex={-1}
                >
                  <img src="assets/images/icons/arrrow-short.svg" alt="" />
                  Development
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab-two"
                  aria-selected="true"
                  role="tab"
                >
                  <img src="assets/images/icons/arrrow-short.svg" alt="" />
                  Consulting
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab-three"
                  aria-selected="true"
                  role="tab"
                  tabIndex={-1}
                >
                  <img src="assets/images/icons/arrrow-short.svg" alt="" />
                  Marketing
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab-four"
                  aria-selected="true"
                  role="tab"
                >
                  <img src="assets/images/icons/arrrow-short.svg" alt="" />
                  Technology
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab-five"
                  aria-selected="true"
                  role="tab"
                >
                  <img src="assets/images/icons/arrrow-short.svg" alt="" />
                  SEO Marketing
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab-six"
                  aria-selected="true"
                  role="tab"
                >
                  <img src="assets/images/icons/arrrow-short.svg" alt="" />
                  Networking
                </a>
              </li>
            </ul>
          </div>
          <div id="myTabContent" className="tab-content">
            <div
              className="tab-pane fade active show"
              id="tab-one"
              role="tabpanel"
            >
              <div className="row gy-5">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-1.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Development</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Vital health information</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-2.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Development</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Challenges faced children</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-3.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Development</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Opportunities for young</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-4.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Development</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Learn relevant skills.</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-5.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Development</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Applying technology</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-6.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Development</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Applying economic skills.</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-60">
                <div className="col-lg-4 text-center">
                  <a href="#" className="eg-btn btn--primary-five btn--lg">
                    Load More
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-two" role="tabpanel">
              <div className="row gy-5">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-2.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Consulting</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Modern life and technology</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-3.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Consulting</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Digital effective solutions</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-4.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Consulting</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Technology can offer ways.</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-60">
                <div className="col-lg-4 text-center">
                  <a href="#" className="eg-btn btn--primary-five btn--lg">
                    Load More
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-three" role="tabpanel">
              <div className="row gy-5">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-1.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Marketing</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Marketing is about communicating.</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-2.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Marketing</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>First marketing role management.</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-3.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Marketing</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Marketing is a fast-changing field.</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-4.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Marketing</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Project management is an essential.</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-5.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Marketing</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>A marketing degree is a great way.</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-6.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Marketing</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Work closely with marketing team.</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-60">
                <div className="col-lg-4 text-center">
                  <a href="#" className="eg-btn btn--primary-five btn--lg">
                    Load More
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-four" role="tabpanel">
              <div className="row gy-5">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-4.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Technology</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Technology of Health</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-2.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Technology</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Technology of War.</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-3.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Technology</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Technology of Education.</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-60">
                <div className="col-lg-4 text-center">
                  <a href="#" className="eg-btn btn--primary-five btn--lg">
                    Load More
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-five" role="tabpanel">
              <div className="row gy-5">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-1.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">
                          SEO Marketing
                        </p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Business With SEO.</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-2.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">
                          SEO Marketing
                        </p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Learn SEO Optimization.</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-3.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">
                          SEO Marketing
                        </p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>How to be SEO expert.</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-4.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">
                          SEO Marketing
                        </p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Find SEO job and Grow.</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-5.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">
                          SEO Marketing
                        </p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Discuss With SEO Consult.</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-6.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">
                          SEO Marketing
                        </p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>SEO Learning availability</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-60">
                <div className="col-lg-4 text-center">
                  <a href="#" className="eg-btn btn--primary-five btn--lg">
                    Load More
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-six" role="tabpanel">
              <div className="row gy-5">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-3.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Networking</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Small business owners network</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-4.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Networking</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Mega business owners network</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="casestudy-three-single sibling-two">
                    <div className="casestudy-three-image">
                      <img
                        src="assets/images/portfolio/portfolio1-2.jpg"
                        alt=""
                      />
                      <div className="casestudy-three-content">
                        <p className="casestudy-three-subtitle">Networking</p>
                        <h4 className="casestudy-three-title">
                          <Link legacyBehavior href="/casestudy-details">
                            <a>Professional networking platform.</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-60">
                <div className="col-lg-4 text-center">
                  <a href="#" className="eg-btn btn--primary-five btn--lg">
                    Load More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default CasestudyOne;
