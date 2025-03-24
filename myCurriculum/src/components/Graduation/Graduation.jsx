import "./Graduation.css";
import { useState } from "react";

const Graduation = () => {
  const [senecaWidth, setSenecaWidth] = useState(95);
  const [udemyWidth, setUdemyWidth] = useState(100);
  const [dotNetWidth, setDotNetWidth] = useState(25);
  return (
    <section id="graduation-id" className="graduation-section">
      <div className="container mt-5 mb-3">
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3 mb-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon">
                    <img
                      src="https://www.eduopinions.com/wp-content/uploads/2018/07/37349414_10160459957755391_7708233760965132288_n.png"
                      className="logo-graduation"
                    ></img>
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Seneca Polytechnic</h6>
                  </div>
                </div>
                <div className="pending-graduation">
                  <span>.</span>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="heading">
                  Computer Programming <br /> (2 years)
                </h3>
                <div className="mt-4">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${senecaWidth}%`,
                        backgroundColor:
                          senecaWidth === 100 ? "green" : "orange",
                      }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="course-logos">
                    <div className="course-logo cpp">{/* C++ Logo */}</div>
                    <div className="course-logo react">{/* React Logo */}</div>
                    <div className="course-logo js">
                      {/* JavaScript Logo */}
                    </div>
                    <div className="course-logo sql">{/* SQL Logo */}</div>
                    <div className="course-logo mongo"></div>
                    <div className="course-logo api"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 mb-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon">
                    <img
                      src="https://w7.pngwing.com/pngs/299/56/png-transparent-udemy-logo-thumbnail-tech-companies-thumbnail.png"
                      className="logo-graduation"
                    ></img>
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Udemy Academy</h6>
                  </div>
                </div>
                <div className="course-completed">
                  <span>.</span>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="heading">
                  React from Scratch
                  <br />
                  (40 Hours)
                </h3>
                <div className="mt-5">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${udemyWidth}%`,
                        backgroundColor:
                          udemyWidth === 100 ? "green" : "orange",
                      }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="mt-3">
                    <span className="text1">
                      42 Applied <span className="text2">of 70 capacity</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 mb-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon">
                    <i className="bx bxl-reddit"></i>
                  </div>
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Reddit</h6>
                    <span>2 days ago</span>
                  </div>
                </div>
                <div className="badge">
                  <span>Design</span>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="heading">
                  Software Architect
                  <br />
                  Java - USA
                </h3>
                <div className="mt-5">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${dotNetWidth}%`,
                        backgroundColor:
                          dotNetWidth === 100 ? "green" : "orange",
                      }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="mt-3">
                    <span className="text1">
                      52 Applied <span className="text2">of 100 capacity</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Graduation;
