import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import PortfolioSlider from "../components/portfolio/PortfolioSlider";
import MainLayout from "../layout/MainLayout";

function Faq() {
  return (
    <MainLayout>
      <Breadcrumb pageName="FAQ" pageTitle="FAQ" />
      <div className="faq-section pt-120 pb-120" id="next">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="faq-wrap faq-style-two" data-wow-duration="1.5s" data-wow-delay=".2s">
                <div className="faq-item">
                  <h5 id="heading10" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-controls="collapse10">
                    Except to obtain some advantage from it?
                  </h5>
                  <div id="collapse10" className="accordion-collapse collapse show" aria-labelledby="heading10">
                    <div className="faq-body">
                      Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <h5 id="heading11" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-controls="collapse11">
                    Frequently occur that pleasures have to be repudiated?
                  </h5>
                  <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11">
                    <div className="faq-body">
                      When our power of choice is untrammelled and when nothing prevents our being
                      able to do what we like best, every pleasure. </div>
                  </div>
                </div>
                <div className="faq-item">
                  <h5 id="heading12" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-controls="collapse12">
                    Which is the same saying through shrinking from toil?
                  </h5>
                  <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12">
                    <div className="faq-body">
                      When our power of choice is untrammelled and when nothing prevents our being
                      able to do what we like best, every pleasure. </div>
                  </div>
                </div>
                <div className="faq-item">
                  <h5 id="heading13" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-controls="collapse13">
                    Who avoids a pain that produces no resultant pleasure?
                  </h5>
                  <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13">
                    <div className="faq-body">
                      When our power of choice is untrammelled and when nothing prevents our being
                      able to do what we like best, every pleasure. </div>
                  </div>
                </div>
                <div className="faq-item">
                  <h5 id="heading14" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-controls="collapse14">
                    Nisi ut aliquid ex ea commodi consequatur?
                  </h5>
                  <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14">
                    <div className="faq-body">
                      When our power of choice is untrammelled and when nothing prevents our being
                      able to do what we like best, every pleasure. </div>
                  </div>
                </div>
                <div className="faq-item">
                  <h5 id="heading15" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-controls="collapse15">
                    Which toil can procure him some great pleasure?
                  </h5>
                  <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15">
                    <div className="faq-body">
                      When our power of choice is untrammelled and when nothing prevents our being
                      able to do what we like best, every pleasure. </div>
                  </div>
                </div>
                <div className="faq-item">
                  <h5 id="heading16" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-controls="collapse16">
                    Actual teachings of the great explorer of the truth?
                  </h5>
                  <div id="collapse16" className="accordion-collapse collapse" aria-labelledby="heading16">
                    <div className="faq-body">
                      When our power of choice is untrammelled and when nothing prevents our being
                      able to do what we like best, every pleasure. </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-lg-block d-none">
              <div className="faq-image">
                <img src="assets/images/bg/faq-image2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PortfolioSlider />
    </MainLayout>
  );
}

export default Faq;
