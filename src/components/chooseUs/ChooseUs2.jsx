import React from "react";

function ChooseUs2() {
  return (
    <div className="choose-section pt-120 pb-120">
      <div className="container contact-three-wrapper sibling-two">
        <div className="row align-items-end">
          <div className="col-lg-8 col-md-7">
            <div className="section-title-four text-center mb-50">
              <span>Need Contact</span>
              <h2>
                Contact With <span>Experties</span>{" "}
              </h2>
            </div>
            <form className="form-style-one sibling-five">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-inner">
                    <div className="input-icon">
                      <i className="bx bx-user-circle" />
                    </div>
                    <input type="text" placeholder="Full Name*" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-inner">
                    <div className="input-icon">
                      <i className="bx bx-phone-call" />
                    </div>
                    <input type="text" placeholder="Phone*" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-inner">
                    <div className="input-icon">
                      <i className="bx bx-envelope" />
                    </div>
                    <input type="text" placeholder="Email*" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-inner">
                    <div className="input-icon">
                      <i className="bx bx-shopping-bag" />
                    </div>
                    <input type="text" placeholder="Company Name*" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-inner">
                    <textarea
                      rows={5}
                      placeholder="Write Message..."
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="checkbox-container">
                    <input
                      className="styled-checkbox style-two"
                      id="styled-checkbox-1"
                      type="checkbox"
                      defaultValue="value1"
                    />
                    <label htmlFor="styled-checkbox-1">
                      Please save my all information when I furthur connect with
                      company.
                    </label>
                  </div>
                </div>
              </div>
              <button className="eg-btn btn--primary-five btn--lg w-100">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-lg-4 col-md-5">
            <div className="contact-info-block style-two">
              <div className="working-hour-title sibling-three">
                <h3>Working Hours:</h3>
                <div className="title-vector">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <ul className="working-list working-list-two sibling-two">
                <li>
                  <span>Mon to Sat </span>
                  <span>: 8am- 9pm</span>
                </li>
                <li>
                  <span>Sunday </span>
                  <span>: Closed</span>
                </li>
              </ul>
              <hr className="separator" />
              <div className="expert-info-two sibling-two">
                <div className="expert-phone">
                  <div className="icon">
                    <img src="assets/images/icons/phone-icon3.svg" alt="" />
                  </div>
                  <div className="expert-number">
                    <span>Call Now</span>
                    <a href="tel:+998-8776345">+998-8776345</a>
                  </div>
                </div>
                <span className="or py-1" />
                <div className="expert-phone">
                  <div className="icon">
                    <img src="assets/images/icons/email-icon3.svg" alt="" />
                  </div>
                  <div className="expert-number">
                    <span>Email Now</span>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs2;
