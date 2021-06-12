import React from "react";
import Footer from "../LandingPage/footer/footer";
import { BsCalendarFill, BsFillBellFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import "./OpenProgrammesPage.css";
function OpenProgrammesPage() {
  return (
    <div>
      <div className="blogdetailpage openprogrammespage">
        <div className="blogdetailpage-img">
          <div className="blogdetailpage-head openprogrammespage-head">
            <div className="blogdetailpage-top openprogrammespage-top">
              <>
                Low-Cost LIDAR Sensor using Ultrasonic Distance Measurement & ML
              </>

              <p>
                Applications Closed !<br></br>
              </p>
            </div>
          </div>
        </div>
        <div className="openprogrammespage-holder">
          <div className="openprogrammespage-section">
            <p className="openprogrammespage-head">Objective of the Research</p>
            <p className="openprogrammespage-text">
              Build an efficient and reliable algorithm with a low cost hardware
              setup of four directional ultrasonic distance sensors & IMU sensor
              for SLAM applications.
            </p>
          </div>
          <div className="line"></div>
          <div className="openprogrammespage-section">
            <p className="openprogrammespage-head">
              Description of the Research
            </p>
            <p className="openprogrammespage-text">
              Currently a lot of autonomous systems including robots and self
              driving cars heavily relay on the usage of LIDAR sensor, they are
              very effective in mapping the environment. LIDAR is a method of
              determining distances by targeting an object with a laser and
              measuring the time for the reflected light to return to the
              receiver.
              <br></br>
              <br></br>
              Currently available LIDAR sensor consists of laser source,
              receiver or laser detector system and position/navigation systems.
              These are very simple built device with effective results. Current
              availability is limited to industrial usage and high end
              operations which cost a lot to procure.
              <br></br>
              <br></br>
              Our work through this research is to identify current progression
              in the development of low cost mapping systems, develop the
              hardware setup, develop simple mapping algorithms and finally
              utilise the power of machine learning to increase the accuracy of
              mapping. This will bring a breakthrough in the current research
              work and will be a crucial step for hobbyists and students to
              develop low cost autonomous systems.
            </p>
          </div>
          <div className="line"></div>
          <div className="openprogrammespage-section">
            <p className="openprogrammespage-head">Outcome of the Research</p>
            <p className="openprogrammespage-text">
              <ul className="openprogrammespage-list">
                <li>
                  Publication of at least 2 scientific papers in leading
                  journals (IEEE/Springer/MDPI/IET).
                </li>
                <li>
                  Development of hardware setup for low cost LIDAR system.
                </li>
                <li>
                  Open Source algorithm for mapping with the hardware setup.
                </li>
                <li>
                  Generation of dataset for measured distance against actual
                  distance.
                </li>
                <li>
                  Machine Learning algorithm to increase the accuracy of current
                  algorithm.
                </li>
              </ul>
            </p>
          </div>
          <div className="line"></div>
          <div className="openprogrammespage-section">
            <p className="openprogrammespage-head">
              Applications Open for following Positions
            </p>
            <p className="openprogrammespage-text">
              Select following positions from dropdown while filling the form
              during Registration
            </p>
            <div className="vaccency-holder">
              <div className="vaccency-item">
                <p className="vaccency-item-title">
                  Machine Learning Researcher
                </p>
                <p className="vaccency-item-text">
                  Number of Students Required: <span>2</span>
                </p>

                <p className="vaccency-item-text">
                  Eligibility Criterion:
                  <span>
                    Under graduate student from electronics or computer science
                    background
                  </span>
                </p>
              </div>

              <div className="vaccency-item">
                <p className="vaccency-item-title">
                  Machine Learning Researcher
                </p>
                <p className="vaccency-item-text">
                  Number of Students Required: <span>2</span>
                </p>

                <p className="vaccency-item-text">
                  Eligibility Criterion:
                  <span>
                    Under graduate student from electronics or computer science
                    background
                  </span>
                </p>
              </div>
            </div>
            <div className="openprogrammespage-feature">
              <div className="openprogrammespage-feature-col ">
                <BsCalendarFill size="6em" color="#818181" />
                <p className="vaccency-item-title openprogrammespage-feature-title">
                  Total Duration
                </p>
                <p className="vaccency-item-text">Approximately 3 months</p>
              </div>
              <div className="openprogrammespage-feature-col openprogrammespage-feature-col2">
                <BsFillBellFill size="6em" color="#818181" />
                <p className="vaccency-item-title openprogrammespage-feature-title">
                  Weekly commitment
                </p>
                <p className="vaccency-item-text">
                  Approximately 6-8 hours per week
                </p>
              </div>
            </div>
            <div className="mentors">
              <p className="openprogrammespage-head">Mentors</p>
              <div className="mentors-item">
                <img
                  src="https://randomuser.me/api/portraits/men/42.jpg"
                  alt="User"
                  className="mentors-item-img"
                />
                <p className="vaccency-item-text mentors-item-text">
                  <span>Chris Sander</span>
                </p>
                <p className="vaccency-item-text mentors-item-text">
                  MTech in Project Management (COEP)<br></br> BTech in
                  Electronics Engineering (SPPU) <br></br>Founder of Sakar
                  Robotics, Gold Medalist in Mobile Robotics & Expert at
                  WorldSkills
                </p>
                <FaLinkedin size="2em" color="#0077b5" />
              </div>
              <div className="mentors-item">
                <img
                  src="https://randomuser.me/api/portraits/women/4.jpg"
                  alt="User"
                  className="mentors-item-img"
                />
                <p className="vaccency-item-text mentors-item-text">
                  <span>Rose Barrett</span>
                </p>
                <p className="vaccency-item-text mentors-item-text">
                  MTech in Project Management (COEP)<br></br> BTech in
                  Electronics Engineering (SPPU) <br></br>Founder of Sakar
                  Robotics, Gold Medalist in Mobile Robotics & Expert at
                  WorldSkills
                </p>
                <FaLinkedin size="2em" color="#0077b5" />
              </div>
            </div>
          </div>

          <div className="line"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OpenProgrammesPage;
