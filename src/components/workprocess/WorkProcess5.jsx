import React from "react";
import { PieChart } from "react-minimal-pie-chart";
function WorkProcess5() {
  return (
    <div className="work-process-section pt-120 pb-120 overflow-hidden">
      <div className="container">
        <div className="row justify-content-center mb-50">
          <div className="col-lg-10">
            <div className="section-title-four text-center ">
              <span className="linear-text-two">Nuestro proceso</span>
              <h2>
              ¿Cómo <span className="linear-text-two">trabajamos ?</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center gy-5">
          <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
            <div className="work-process-five">
              <span className="serial-number">01</span>
              <div className="work-process-five-icon">
                <img src="assets/images/icons/work-icon5-1.svg" alt="" />
              </div>
              <div className="work-process-five-info">
                <h4>Identificación del problema</h4>
                <p>
                  Se realiza un análisis inicial para comprender las necesidades y objetivos del cliente.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
            <div className="work-process-five">
              <span className="serial-number">02</span>
              <div className="work-process-five-icon">
                <img src="assets/images/icons/work-icon5-2.svg" alt="" />
              </div>
              <div className="work-process-five-info">
                <h4>Diagnóstico</h4>
                <p>
                  Se lleva a cabo un diagnóstico detallado de la situación actual de la empresa cliente, 
                  identificando áreas de mejora y oportunidades
                </p>
              </div>
            </div>
          </div> */}
          <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
            <div className="work-process-five">
              <span className="serial-number">03</span>
              <div className="work-process-five-icon">
                <img src="assets/images/icons/work-icon6-1.svg" alt="" />
              </div>
              <div className="work-process-five-info">
                <h4>Planificación</h4>
                <p>
                  Se elabora un plan de acción personalizado que incluye los pasos a seguir, 
                  los recursos necesarios y los plazos de ejecución
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
            <div className="work-process-five">
              <span className="serial-number">04</span>
              <div className="work-process-five-icon">
                <img src="assets/images/icons/work-icon5-4.svg" alt="" />
              </div>
              <div className="work-process-five-info">
                <h4>Implementación</h4>
                <p>
                  Se ejecutan las acciones planificadas, 
                  trabajando de cerca con el cliente para implementar las soluciones propuestas.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
            <div className="work-process-five">
              <span className="serial-number">05</span>
              <div className="work-process-five-icon">
                <img src="assets/images/icons/work-icon6-3.svg" alt="" />
              </div>
              <div className="work-process-five-info">
                <h4>Seguimiento y control</h4>
                <p>
                  Se realiza un seguimiento continuo, 
                  ajustando el plan de acción según sea necesario para garantizar el logro de los objetivos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProcess5;
