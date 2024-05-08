import React from "react";
import { useState } from "react";
import swal from "sweetalert";

function Contacte3() {
  const [messege, setMessage] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const response = await fetch(event.target.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    const result = await response.json();
    if (!response.ok) {
      setMessage(result.errors.map((error) => error.message).join(","));
      return false;
    }
    swal({
      icon: "success",
      title: "Exito",
      text: "Correo enviado satisfactoriamente !!!",
      button: false,
      timer: 800,
    });
    document.getElementById("formMR").reset();
  };
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
              <form
                id="formMR"
                name="formMR"
                className="form-style-one sibling-three"
                action="https://formspree.io/f/mgegdjaq"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <div className="input-icon">
                        <i className="bx bx-user-circle" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nombre Completo*"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <div className="input-icon">
                        <i className="bx bx-phone-call" />
                      </div>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Teléfono*"
                        pattern="[0-9]{8}"
                        title="El numero de telefono debe tener 8 digitos"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <div className="input-icon">
                        <i className="bx bx-envelope" />
                      </div>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Correo*"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <div className="input-icon">
                        <i className="bx bx-shopping-bag" />
                      </div>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        placeholder="Nombre de la empresa"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-inner">
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        placeholder="Escribe un mensaje..."
                        // defaultValue={""}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="checkbox-container">
                      <input
                        className="styled-checkbox"
                        name="_optin"
                        id="_optin"
                        type="checkbox"
                        required
                      />
                      <label htmlFor="_optin">
                        Autorizo que MR Consulting Group utilice mis datos.
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="eg-btn btn--primary-three btn--lg w-100"
                >
                  Enviar mensaje
                </button>

                {/* <div class="alert alert-success" role="alert">
                  {messege}
                </div> */}
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
                      <a href="tel:+998-8776345">
                        <h6>+504 9564-1834</h6>
                      </a>
                    </div>
                  </div>
                  <span className="or py-1" />
                  <div className="expert-phone">
                    <div className="icon">
                      <img src="assets/images/icons/email-icon2.svg" alt="" />
                    </div>
                    <div className="expert-number">
                      <span>Correo</span>
                      <a href="mailto:servicioalcliente@mrcgr.com">
                        <h6>servicioalcliente@mrcgr.com</h6>
                      </a>
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
