import React from "react";

function Contact1() {
  return (
    <div className="contact-section-one padding-right mobile-padding">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-6">
            <div className="contact-image">
              <img src="assets/images/bg/contact-image.png" alt="image" />
              <div className="contact-social">
                <img src="assets/images/bg/contact-social.png" alt="image" />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 pt-90 pb-90">
            <div className="section-title-two mb-60">
              <h2>
                <span>Contact</span> Us Now
              </h2>
              <p>
                Certain circumstances and owing to the claims of duty or the
                obligations of business it will frequently occur that pleasures.
              </p>
            </div>
            <form className="form-style-one">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-inner">
                    <div className="input-icon">
                      <i className="bx bx-user-circle" />
                    </div>
                    <input type="text" placeholder="First Name*" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-inner">
                    <div className="input-icon">
                      <i className="bx bx-user-circle" />
                    </div>
                    <input type="text" placeholder="Last Name*" />
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
                    <input type="email" placeholder="Email*" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-inner">
                    <div className="input-icon">
                      <i className="bx bx-cog" />
                    </div>
                    <input type="text" placeholder="Need Services" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-inner">
                    <div className="input-icon">
                      <i className="bx bx-dollar" />
                    </div>
                    <input type="text" placeholder="Budgets*" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-inner">
                    <textarea
                      cols={30}
                      placeholder="Your Message . . ."
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-lg-12 mt-15">
                  <button className="eg-btn btn--primary btn--lg w-100">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact1;
