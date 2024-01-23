import React from "react";

function Skills1() {
  return (
    <div className="skill-section pt-120 pb-120 mobile-padding">
      <div className="dot-vector">
        <img src="assets/images/bg/dot-vector.svg" alt="" />
      </div>
      <div className="title-opacity-wrapper">
        <div className="title-opacity">
          <h2>SKILLS</h2>
          <span />
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-7 col-xl-6 col-lg-6">
            <div className="section-title-one mb-70">
              <div className="section-subtitle">
                <img src="assets/images/icons/title-shape-before.svg" alt="" />
                Our Skills
                <img src="assets/images/icons/title-shape-after.svg" alt="" />
              </div>
              <h2>
                Get <span>Professional</span> Services
              </h2>
            </div>
            <ul className="skills-bar-container">
              <li>
                <div className="progressbar-title">
                  <h6>Business Strategy</h6>
                  <span className="percent" id="html-pourcent" />
                </div>
                <div className="bar-container">
                  <span className="progressbar" id="progress-html" />
                </div>
              </li>
              <li>
                <div className="progressbar-title">
                  <h6>Management</h6>
                  <span className="percent" id="css-pourcent" />
                </div>
                <div className="bar-container">
                  <span className="progressbar" id="progress-css" />
                </div>
              </li>
              <li>
                <div className="progressbar-title">
                  <h6>Technology</h6>
                  <span className="percent" id="javascript-pourcent" />
                </div>
                <div className="bar-container">
                  <span className="progressbar" id="progress-javascript" />
                </div>
              </li>
              <li>
                <div className="progressbar-title">
                  <h6>Marketing</h6>
                  <span className="percent" id="development-pourcent" />
                </div>
                <div className="bar-container">
                  <span className="progressbar" id="progress-development" />
                </div>
              </li>
            </ul>
            <div className="row justify-content-center award-area mt-65 g-4">
              <div className="col-md-4 col-sm-6">
                <div className="award-item">
                  <img src="assets/images/company/award1.png" alt="image" />
                  <h5 className="award-title">Top Digital Agency</h5>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="award-item">
                  <img src="assets/images/company/award2.png" alt="image" />
                  <h5 className="award-title">Best Quality Service</h5>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="award-item">
                  <img src="assets/images/company/award3.png" alt="image" />
                  <h5 className="award-title">Best Developers-2022</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            <div className="skill-image">
              <div className="paint-shape">
                <img src="assets/images/icons/paint-brush.svg" alt="image" />
              </div>
              <div className="double-arrow-shape">
                <img src="assets/images/icons/double-arrow.svg" alt="image" />
              </div>
              <img src="assets/images/bg/skill-bg.jpg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills1;
