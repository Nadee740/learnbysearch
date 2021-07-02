import "./LandingPage.css";
import { Link } from "react-router-dom";
import BlogSlider from "./Slider/slider";
import Footer from "./footer/footer";
import { useState } from "react";
import { useEffect } from "react";
import Researchpgms from "../Backend/Researchpgms";
import SliderCo from "./slidercourse/slidercourse";
import { RotateCircleLoading } from "react-loadingg";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { Helmet } from "react-helmet";
import Authverifier from "../Backend/Authverifier";

const LandingPage = () => {
  const [blogsData, setblogData] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [isLoggedIn, setisLoggedin] = useState(false);
  const [pgmsData, setpgms] = useState("");

  const [error, seterror] = useState(false);

  const getopenPgmgs = async () => {
    setisLoading(true);
    const { data: Datass } = await Researchpgms(
      `${window.name}research-programs`
    );
    setpgms(Datass);
   

    getBlogs();
  };
  useEffect(() => {
    getopenPgmgs();
  }, []);

  const getBlogs = async () => {
    setisLoading(true);
    const { data: Datass } = await Researchpgms(`${window.name}blog`);
    setblogData(Datass);
    checkLOgin();
  };

  const checkLOgin = async () => {
    const { isLoggedIn: messagee } = await Authverifier(
      `${window.name}users/me`
    );
    setisLoggedin(messagee);
    setisLoading(false);
  };
  const [para, setPara] = useState(
    "Getting recognition of what you have accomplished and learned is what matters the most nowadays, we just can't wait to put a post highlighting what we have made, well, here you will be doing that a lot. Every day you will be making something cool which you can't resist posting, finally, to sum up, your social media posts we award the Completion Certification."
  );

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      {isLoading ? (
        <div className="isLoading">
          <SolarSystemLoading />
        </div>
      ) : (
        <div className="landingpage">
          <section className="top">
            <div className="container">
              <div className="top-content">
                <div className="left-image">
                  <figure>
                    <img src="../images/Header1.svg" alt="Login pic"></img>
                  </figure>
                </div>
                <div className="right-side">
                  <div className="top-heading">
                    <h2 className="font-light-top">
                      India's Largest Platform Building Student Researchers
                    </h2>
                    <h2 className="form-title">
                      Collaborate | Research | Learn
                    </h2>

                    <p>Online Independent R&D Hub</p>
                  </div>

                  {!isLoggedIn ? (
                    <div className="buttons ">
                      <Link to="/signup" className="btns button1">
                        SIGN UP
                      </Link>
                      <br></br>
                      <Link to="/login" className="btns button2">
                        LOGIN
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="second">
            <div className="scnd-content">
              <h2>What is Learn By Research?</h2>
              <p>
                LearnByResearch is the world's only online independent research
                & development hub that provides the platform for students to
                become the best independent researchers who wish to pursue
                higher education or join the innovation teams in top
                organizations.
              </p>
            </div>
          </section>
          <section className="about">
            <div className="about-content">
              <h2>About LearnByResearch</h2>
              <div className="about-col">
                <figure>
                  <img
                    src="../images/about1.svg"
                    alt="Login pic"
                    className="about-col-img"
                  ></img>
                </figure>
                <p>
                  LearnByResearch is a hub for innovation, research &
                  development. Pioneered by experienced professionals from the
                  industry, academics & startups. LearnByResearch is unique in
                  its methodology of delivering the right skillsets. We promote
                  innovation, research, and entrepreneurship as part of the
                  research work. LearnByResearch is dedicated to higher levels
                  of interdisciplinary R&D in the fields of emerging
                  technologies with the strategy to build entrepreneurs and
                  industry leaders.
                </p>
              </div>
              <div className="about-col">
                <p>
                  Our methodology emphases on a practical learning approach with
                  hands-on experience to inculcate the best industry standards.
                  This approach is meant to help students face all challenges
                  with the supervision of a guide. At LearnByResearch, students
                  and research guides collaborate to enhance their skills and
                  knowledge as well as build life-changing products and
                  services.
                </p>
                <figure>
                  <img
                    src="../images/about2.svg"
                    alt="Login pic"
                    className="about-col-img"
                  ></img>
                </figure>
              </div>

              {/* <div className="about-col">
                <figure>
                  <img
                    src="../images/about3.svg"
                    alt="Login pic"
                    className="about-col-img"
                  ></img>
                </figure>
                <p>
                  Our methodology emphases on a practical learning approach with
                  hands-on experience to inculcate the best industry standards.
                  This approach is meant to help students face all challenges
                  with the supervision of a guide.
                </p>
              </div> */}
              {/* <div className="about-col">
                <p>
                  At LearnByResearch, students and research guides collaborate
                  to enhance their skills and knowledge as well as build
                  life-changing products and services.
                </p>
                <figure>
                  <img
                    src="../images/about4.svg"
                    alt="Login pic"
                    className="about-col-img"
                  ></img>
                </figure>
              </div> */}
            </div>
          </section>
          <SliderCo data={pgmsData} />
          <section className="gain">
            <div className="gain-container">
              <div className="gain-content">
                <h2>
                  What will you gain when you complete your Research Work?
                </h2>
              </div>
              <div className="outcomes">
                <div className="outcomes-col">
                  <p className="outcomes-col-number">1</p>
                  <p className="outcomes-col-head">Technical and Soft Skills</p>
                  <p className="outcomes-col-text">
                    By joining the research group you would learn and apply the
                    relevant technical skills on your own with the support and
                    mentoring of the research guide, as well as you will be
                    gaining the power of written and verbal communication.
                  </p>
                </div>
                <div className="outcomes-col">
                  <p className="outcomes-col-number">2</p>
                  <p className="outcomes-col-head">
                    Research Paper Publications
                  </p>
                  <p className="outcomes-col-text">
                    The outcome of almost all research groups involves
                    publishing the results and experimental work in a reputed
                    journal scientific research journal. Here during the
                    research work, all students will be publishing at least 2
                    papers with the support of the team members and the research
                    guide.
                  </p>
                </div>
                <div className="outcomes-col">
                  <p className="outcomes-col-number">3</p>
                  <p className="outcomes-col-head">
                    Network and Focused Community
                  </p>
                  <p className="outcomes-col-text">
                    During the research work, students will be working and
                    engaging with fellow teammates through the weekly meetings,
                    interaction sessions, and experimentations. This will help
                    students to grow their network. If you want to be an
                    entrepreneur and start building a great product maybe you
                    can find your co-founder here!
                  </p>
                </div>
                <div className="outcomes-col">
                  <p className="outcomes-col-number">4</p>
                  <p className="outcomes-col-head">
                    Certificate of Research Completion
                  </p>
                  <p className="outcomes-col-text">
                    Getting recognition of what you have accomplished and
                    learned is what matters the most nowadays, we just can't
                    wait to put a post highlighting what we have made, well,
                    here you will be doing that a lot. Every day you will be
                    making something cool which you can't resist posting,
                    finally, to sum up, your social media posts we award the
                    Completion Certification.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="applydetails">
            <div className="applydetails-col1">
              <h2>Why you must apply?</h2>
              <p className="applydetails-text">
                You will not like to hear this but you will totally agree, that
                in the current situation Education has become a business, and
                startups are flooding parents and students with the fear of
                missing out! From the time of our birth, we have learned
                millions of things and 80% of them were taught by our experience
                of trial-error and experimentation. Today's generation is now at
                a point that they have all the resources available online for
                free but they don't have a guide to help them during the
                experimental phase. That's why we are here to help you connect
                with the best guides and work your way up to learning with a
                research-based approach.
              </p>
            </div>
          </div>
          <BlogSlider blog={blogsData} />
          <Footer />
        </div>
      )}
    </>
  );
};

export default LandingPage;
