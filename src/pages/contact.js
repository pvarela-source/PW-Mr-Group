import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import MainLayout from "../layout/MainLayout";

function Contact() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Contactanos" pageTitle="Contactanos" />
   
        <div className="contact-section pt-120 pb-120" id="next">
          <div className="container contact-three-wrapper sibling-two">
            <div className="row align-items-end">
              <div className="col-lg-8 col-md-7">
                <div className="section-title-four text-center mb-50">
                  <span>Necesita ayuda</span>
                  <h2>
                  Contacte con <span>Expertos</span>{" "}
                  </h2>
                </div>
                <form className="form-style-one sibling-five">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <div className="input-icon">
                          <i className="bx bx-user-circle" />
                        </div>
                        <input type="text" placeholder="Nombre Completo*" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <div className="input-icon">
                          <i className="bx bx-phone-call" />
                        </div>
                        <input type="text" placeholder="Teléfono*" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <div className="input-icon">
                          <i className="bx bx-envelope" />
                        </div>
                        <input type="text" placeholder="Correo*" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <div className="input-icon">
                          <i className="bx bx-shopping-bag" />
                        </div>
                        <input type="text" placeholder="Nombre de la empresa*" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <textarea
                          rows={5}
                          placeholder="Escribe un mensaje..."
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
                          Autorizo que MR Consulting Group utilice mis datos.
                        </label>
                      </div>
                    </div>
                  </div>
                  <button className="eg-btn btn--primary-five btn--lg w-100">
                    Enviar mensaje
                  </button>
                </form>
              </div>
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-block style-two">
                  <div className="working-hour-title sibling-three">
                    <h3>Horas Laborales:</h3>
                    <div className="title-vector">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <ul className="working-list working-list-two sibling-two">
                    <li>
                      <span>Lunes a Viernes</span>
                      <span>: 8am- 5pm</span>
                    </li>
                    <li>
                      <span>Sábados y Domingos </span>
                      <span>: Cerrado</span>
                    </li>
                  </ul>
                  <hr className="separator" />
                  <div className="expert-info-two sibling-two">
                    <div className="expert-phone">
                      <div className="icon">
                        <img src="assets/images/icons/phone-icon3.svg" alt="" />
                      </div>
                      <div className="expert-number">
                        <span>LLama al</span>
                        <a href="tel:+998-8776345"><h6>+504 9564-1834</h6></a>
                      </div>
                    </div>
                    <span className="or py-1" />
                    <div className="expert-phone">
                      <div className="icon">
                        <img src="assets/images/icons/email-icon3.svg" alt="" />
                      </div>
                      <div className="expert-number">
                        <span>Correo</span>
                        <a href="mailto:info@example.com"><h6>servicioalcliente@mrcgr.com</h6></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========== contact_section end======== */}
        <div className="location-section pb-120">
          <div className="container">
            <div className="row justify-content-center gy-4">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="office-location-signle">
                  <a
                    className="map-button"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                    role="button"
                    data-cursor="NewYork"
                  >
                    <i className="bi bi-geo-alt" />
                    <h5>View Map</h5>
                    <img src="assets/images/icons/location-arrow.svg" alt="" />
                  </a>
                  <div className="content">
                    <h3>Honduras</h3>
                    <p>
                      Colonia Humuya, <br /> Tegucigalpa
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="office-location-signle">
                  <a
                    className="map-button"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                    role="button"
                    data-cursor="Canada"
                  >
                    <i className="bi bi-geo-alt" />
                    <h5>View Map</h5>
                    <img src="assets/images/icons/location-arrow.svg" alt="" />
                  </a>
                  <div className="content">
                    <h3>Canada City</h3>
                    <p>
                      Canada City, Office(01), <br /> Road:03, House:3E/L,
                      Section-B
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="office-location-signle">
                  <a
                    className="map-button"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                    role="button"
                    data-cursor="Austrilia"
                  >
                    <i className="bi bi-geo-alt" />
                    <h5>View Map</h5>
                    <img src="assets/images/icons/location-arrow.svg" alt="" />
                  </a>
                  <div className="content">
                    <h3>Austrilia City</h3>
                    <p>
                      Austrilia City, Office(01), <br /> Road:07, House:3J/O,
                      Section-B
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
     
      
    </MainLayout>
  );
}

export default Contact;
