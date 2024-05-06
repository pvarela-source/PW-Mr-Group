import React from "react";

function Contacte3() {
  return (
    <div className="servcie-section pt-120 overflow-hidden">
    <div className="contact-section">
      <div className="container contact-three-wrapper">
        <div className="row align-items-end">
          <div className="col-lg-8 col-md-7">
            <div className="section-title-four sibling-two text-center mb-50">
              <span>Necesita ayuda</span>
              <h2>
                Contacte con <span>Expertos</span>{" "}
              </h2>
            </div>
            <form className="form-style-one sibling-three">
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
                      className="styled-checkbox"
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
              <button className="eg-btn btn--primary-three btn--lg w-100">
                Enviar mensaje
              </button>
            </form>
          </div>
          <div className="col-lg-4 col-md-5">
            <div className="contact-info-block">
              <div className="working-hour-title sibling-two">
                <h3>Horas Laborales:</h3>
                <div className="title-vector">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <ul className="working-list working-list-two">
                <li>
                  <span>Lunes a Viernes </span>
                  <span>: 8am- 5pm</span>
                </li>
                <li>
                  <span>Sábados y Domingos </span>
                  <span>: Cerrado</span>
                </li>
              </ul>
              <hr className="separator" />
              <div className="expert-info-two">
                <div className="expert-phone">
                  <div className="icon">
                    <img src="assets/images/icons/phone-icon2.svg" alt="" />
                  </div>
                  <div className="expert-number">
                    <span>LLama al</span>
                    <a href="tel:+998-8776345"><h6>+504 9564-1834</h6></a>
                  </div>
                </div>
                <span className="or py-1" />
                <div className="expert-phone">
                  <div className="icon">
                    <img src="assets/images/icons/email-icon2.svg" alt="" />
                  </div>
                  <div className="expert-number">
                    <span>Correo</span>
                    <a href="mailto:servicioalcliente@mrcgr.com"><h6>servicioalcliente@mrcgr.com</h6></a>
                  </div>
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

export default Contacte3;
