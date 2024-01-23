import React from "react";

function ExpertService() {
  return (
    <div className="expert-service-section">
      <div className="container position-relative">
        <div className="expert-shape">
          <img src="assets/images/bg/expert-shape.svg" alt="image" />
        </div>
        <div className="expert-image">
          <img src="assets/images/bg/expert.png" alt="image" />
        </div>
        <div className="expert-service-wapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="expert-info">
                <h3>Do You Need Expert Service?</h3>
                <p>Various versions have evolved over the years sometimes.</p>
                <div className="expert-phone">
                  <div className="icon">
                    <img src="assets/images/icons/phone-icon.svg" alt="" />
                  </div>
                  <div className="expert-number">
                    <span>Call Now</span>
                    <a href="tel:+998-8776345">+998-8776345</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertService;
