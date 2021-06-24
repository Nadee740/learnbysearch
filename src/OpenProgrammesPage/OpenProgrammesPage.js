import React from "react";
import Footer from "../LandingPage/footer/footer";
import { BsCalendarFill, BsFillBellFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import "./OpenProgrammesPage.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Researchpgms from "../Backend/Researchpgms";
import Authverifier from "../Backend/Authverifier";
import Modal from "react-awesome-modal";
import { Link } from "react-router-dom";

function OpenProgrammesPage() {
  const { slug } = useParams();
  let arr = [];
  let array = [];
  const [isLoading, setisLoading] = useState(true);
  const [blogsData, setblogData] = useState("");
  const [positions, setPosition] = useState("");
  const [mentors, setmentors] = useState("");
  const [error, seterror] = useState(false);
  const [visible, setvisible] = useState(false);
  const htmlpart = blogsData.description;
  const htmlpartobjective = blogsData.objective;
  const htmlpartoutcomes = blogsData.outcomes;
  const [isLoggedIn, setisLoggedin] = useState(false);

  const closeModal = () => {
    setvisible(false);
  };

  const getPositions = async (data) => {
    setisLoading(true);

    data.positions.map(async (position, index) => {
      const { data: Datass } = await Researchpgms(
        `${window.name}position/${position}`
      );

      arr.push(Datass);

      setPosition(arr);
      if (data.positions.length == arr.length) await getMentors(data);
    });
  };

  const getMentors = async (data) => {
    setisLoading(true);

    data.mentors.map(async (mentor, index) => {
      console.log(mentor, "mooonj");
      const { data: Datass } = await Researchpgms(
        `${window.name}mentor/${mentor}`
      );
      console.log(Datass, "hyhyy");
      array.push(Datass);
      console.log(array, "mentor");
      setmentors(array);

      console.log(error);
      if (array.length == data.mentors.length) {
        setloaded();
        // array?seterror(false):seterror(true);
        // if(array.includes(null))
        // seterror(true)
      }
    });

    console.log(array, "moooonuus");
  };

  const setloaded = () => {
    setisLoading(false);
  };

  const applicationform = () => {
    if (!isLoggedIn) {
      setvisible(true);
    } else {
      window.location = `/applicationform/${slug}`;
    }
  };

  const getBlogs = async () => {
    setisLoading(true);
    const { data: Datass } = await Researchpgms(
      `${window.name}research-program/${slug}`
    );
    setblogData(Datass);

    await getPositions(Datass);

   
  };

  useEffect(async () => {
    const { isLoggedIn: messagee } = await Authverifier(
      `${window.name}users/me`
    );
    setisLoggedin(messagee);
    getBlogs();
  }, []);

  return (
    <>
      <div className="popupscreen">
        <section className="popupscreen">
          <Modal
            visible={visible}
            width="350"
            height="200"
            effect="fadeInUp"
            onClickAway={closeModal}
          >
            <div className="popup">
              <img
                src="/images/LearnByResearchLogo.png"
                className="logo"
                alt=""
              />
              <p>PLEASE LOGIN TO SUBMIT APPLICATION...</p>
              <br></br>
              <Link  onClick={closeModal}>
                Close
              </Link>
            </div>
          </Modal>
        </section>
      </div>
      {isLoading ? (
        <div className="isLoading">
          <h1>Loading...</h1>
        </div>
      ) : error ? (
        <div className="isLoading">
          <h1>OOOps an error occured...</h1>
        </div>
      ) : (
        <div>
          <div className="blogdetailpage openprogrammespage">
            <div className="blogdetailpage-img">
              <img
                src={blogsData.imageUrl}
                alt="Bg"
                className="blogdetailpage-img2 blogdetailpage-img3"
              />

              <div className="blogdetailpage-head openprogrammespage-head">
                <div className="blogdetailpage-top openprogrammespage-top">
                  <>{blogsData.title}</>
                  {blogsData.applicationStatus ? (
                    <p onClick={applicationform}>
                      Applications Open !<br></br>
                    </p>
                  ) : (
                    <p>
                      Applications Closed !<br></br>
                    </p>
                  )}
                  <button onClick={applicationform} className="applybtn">
                    APPLY NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="openprogrammespage-holder">
              <div className="openprogrammespage-section">
                <p className="openprogrammespage-head"> Objective</p>
                <p className="openprogrammespage-text">
                  <div
                    dangerouslySetInnerHTML={{ __html: htmlpartobjective }}
                  ></div>
                </p>
              </div>
              <div className="line"></div>
              <div className="openprogrammespage-section">
                <p className="openprogrammespage-head">
                  Description of the Research
                </p>

                <div dangerouslySetInnerHTML={{ __html: htmlpart }}></div>
              </div>
              <div className="line"></div>
              <div className="openprogrammespage-section">
                <p className="openprogrammespage-head">
                  Outcome of the Research
                </p>
                <p className="openprogrammespage-text">
                <div
                              dangerouslySetInnerHTML={{ __html: htmlpartoutcomes }}
                            ></div>
                </p>
              </div>
              <div className="line"></div>
              <div className="openprogrammespage-section">
                <p className="openprogrammespage-head">
                  Applications Open for following Positions
                </p>
                <p className="openprogrammespage-text">
                  Select following positions from dropdown while filling the
                  form during Registration
                </p>

                <div className="vaccency-holder">
                  {positions &&
                    positions.map((position, index) => (
                      <div className="vaccency-item" key={index}>
                        <p className="vaccency-item-title">{position.title}</p>
                        <p className="vaccency-item-text">
                          Number of Students Required: <span>2</span>
                        </p>

                        <p className="vaccency-item-text">
                          Eligibility Criterion:
                          <span>{position.criterion}</span>
                        </p>
                      </div>
                    ))}
                </div>
                <div className="openprogrammespage-feature">
                  <div className="openprogrammespage-feature-col ">
                    <BsCalendarFill size="6em" color="#818181" />
                    <p className="vaccency-item-title openprogrammespage-feature-title">
                      Total Duration
                    </p>
                    <p className="vaccency-item-text">
                      Approximately {blogsData.duration} years
                    </p>
                  </div>
                  <div className="openprogrammespage-feature-col openprogrammespage-feature-col2">
                    <BsFillBellFill size="6em" color="#818181" />
                    <p className="vaccency-item-title openprogrammespage-feature-title">
                      Weekly commitment
                    </p>
                    <p className="vaccency-item-text">{blogsData.commitment}</p>
                  </div>
                </div>
                <div className="mentors">
                  <p className="openprogrammespage-head">Mentors</p>

                  {mentors &&
                    mentors.map((mentor, index) => {
                      const htmlparteducation = mentor.education;
                      const htmlpartbio = mentor.bio;
                      const htmlorganisation = mentor.organisation;
                      const htmlpartposition = mentor.position;
                      return (
                        <div className="mentors-item" key={index}>
                          <img
                            src={mentor.imageUrl}
                            alt="User"
                            className="mentors-item-img"
                          />
                          <p className="vaccency-item-text mentors-item-text">
                            <span>{mentor.name}</span>
                          </p>
                          <p className="vaccency-item-text mentors-item-text">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: htmlparteducation,
                              }}
                            ></div>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: htmlorganisation,
                              }}
                            ></div>{" "}
                            <div
                              dangerouslySetInnerHTML={{
                                __html: htmlpartposition,
                              }}
                            ></div>{" "}
                            <div
                              dangerouslySetInnerHTML={{ __html: htmlpartbio }}
                            ></div>
                          </p>
                          <FaLinkedin
                            onClick={() => {
                              window.location = `${mentor.linkedin}`;
                            }}
                            size="2em"
                            color="#0077b5"
                          />
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="line"></div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default OpenProgrammesPage;
