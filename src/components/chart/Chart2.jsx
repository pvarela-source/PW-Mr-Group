import React from "react";
import CountUp from "react-countup";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Aug', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Sep', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Oct', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Nov', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Dec', uv: 3490, pv: 4300, amt: 2100 },
];
function Chart2() {
  return (
    <div className="growth-section pt-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-title-six sibling-two text-lg-start text-center mb-20">
              <span>Business Progress</span>
              <h2>
                Before &amp; After <span>Marketing</span>
              </h2>
            </div>
            <div className="growth-content">
              <p>
                Nothing prevents our being able to do what we like best, every
                pleasure is to be welcomed and every pain avoided. But in
                certain circumstances and owing to the claims of duty or the
                obligations of business it will frequently occur that pleasures
                have to be repudiated.
              </p>
              <p>
                We denounce with righteous indignation and dislike men who are
                so beguiled and demoralized by the charms of pleasure of the
                moment.
              </p>
            </div>
            <div className="growth-buttons">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#home"
                    aria-selected="true"
                    role="tab"
                  >
                    Before
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#profile"
                    aria-selected="false"
                    role="tab"
                    tabIndex={-1}
                  >
                    After
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div id="myTabContent" className="tab-content">
              <div
                className="tab-pane fade active show"
                id="home"
                role="tabpanel"
              >
                <div className="chart">
                <h5 className="text-center">Business Growth</h5>
                <LineChart width={550} height={400} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  {/* <XAxis dataKey="name" />
                  <YAxis  dataKey="name" /> */}
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
                  <div className="counter-wrapper">
                    <div className="coundown d-flex flex-column">
                      <p>Total Value</p>
                      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                        <h5 className="odometer" data-odometer-final={560}>
                          <CountUp start={0} end={560} duration={3} />
                        </h5>
                        <i className="bi bi-plus" />
                      </div>
                    </div>
                    <div className="coundown d-flex flex-column">
                      <p>Lowest </p>
                      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                        <h5 className="odometer" data-odometer-final={100}>
                          <CountUp start={0} end={100} duration={3} />
                        </h5>
                        <i className="bi bi-plus" />
                      </div>
                    </div>
                    <div className="coundown d-flex flex-column">
                      <p>Highest</p>
                      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                        <h5 className="odometer" data-odometer-final={470}>
                          <CountUp start={0} end={470} duration={3} />
                        </h5>
                        <i className="bi bi-plus" />
                      </div>
                    </div>
                    <div className="coundown d-flex flex-column">
                      <p>Average</p>
                      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                        <h5 className="odometer" data-odometer-final={280}>
                          <CountUp start={0} end={280} duration={3} />
                        </h5>
                        <i className="bi bi-plus" />
                      </div>
                    </div>
                  </div>
                  <ul className="skills-bar-container">
                    <li>
                      <div className="progressbar-title">
                        <h6>Total Target</h6>
                        <span className="percent" id="css-pourcent" />
                      </div>
                      <div className="bar-container">
                        <span className="progressbar" id="progress-css" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel">
                <div className="chart">
                <h5 className="text-center">Business Growth</h5>
                <LineChart width={560} height={400} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
                  <div className="counter-wrapper">
                    <div className="coundown d-flex flex-column">
                      <p>Total Value</p>
                      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                        <h5 className="odometer" data-odometer-final={560}>
                          <CountUp start={0} end={560} duration={3} />
                        </h5>
                        <i className="bi bi-plus" />
                      </div>
                    </div>
                    <div className="coundown d-flex flex-column">
                      <p>Lowest </p>
                      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                        <h5 className="odometer" data-odometer-final={100}>
                          <CountUp start={0} end={100} duration={3} />
                        </h5>
                        <i className="bi bi-plus" />
                      </div>
                    </div>
                    <div className="coundown d-flex flex-column">
                      <p>Highest</p>
                      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                        <h5 className="odometer" data-odometer-final={470}>
                          <CountUp start={0} end={470} duration={3} />
                        </h5>
                        <i className="bi bi-plus" />
                      </div>
                    </div>
                    <div className="coundown d-flex flex-column">
                      <p>Average</p>
                      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                        <h5 className="odometer" data-odometer-final={280}>
                          <CountUp start={0} end={280} duration={3} />
                        </h5>
                        <i className="bi bi-plus" />
                      </div>
                    </div>
                  </div>
                  <ul className="skills-bar-container">
                    <li>
                      <div className="progressbar-title">
                        <h6>Total Target</h6>
                        <span className="percent" id="html-pourcent" />
                      </div>
                      <div className="bar-container">
                        <span className="progressbar" id="progress-html" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart2;
