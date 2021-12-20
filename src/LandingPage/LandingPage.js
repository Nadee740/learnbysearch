import "./LandingPage.css";
import { Link } from "react-router-dom";
import BlogSlider from "./Slider/slider";
import Footer from "./footer/footer";
import { useState } from "react";
import { useEffect } from "react";
import Researchpgms from "../Backend/Researchpgms";
import SliderCo from "./slidercourse/slidercourse";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { Helmet } from "react-helmet";
import Authverifier from "../Backend/Authverifier";
import Webinar from "./webinar";
import Slider from "react-slick";
import Colleges from "./colleges/college";
import Testimonial from "./testimonials/Textimonial";
import Gettestimonials from "../Backend/Gettestimonials";
import getStudent from "../Backend/getstudent";
import GetCollegelogos from "../Backend/Getcollegelogo";
import MentorCarusel from "./mentorCarousel/mentorcarousel";

const LandingPage = () => {
  const [blogsData, setblogData] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [isLoggedIn, setisLoggedin] = useState(false);
  const [pgmsData, setpgms] = useState("");
  const [webinardata, setwebinardata] = useState();
  const [testimonials, settestimonials] = useState();
  const [testimonialsdata, settestimonialsdata] = useState([]);
  const [collegelogos, setcollegelogos] = useState([]);
  const [mentors, setmentors] = useState("");
  useEffect(() => {
    getopenPgmgs();
  }, []);

  ///for getthing the openpgrms for the slider//
  const getopenPgmgs = async () => {
    setisLoading(true);
    const { data: rps } = await Researchpgms(`${window.name}research-programs`);
    setpgms(rps);

    getBlogs();
  };

  ////gets the blogs
  const getBlogs = async () => {
    setisLoading(true);
    const { data: blogs } = await Researchpgms(`${window.name}blog`);
    setblogData(blogs);
    getmentors();
    
  };

  const getmentors=async()=>{
    setisLoading(true);
    const { data: mentors } = await Researchpgms(`${window.name}mentors`);
   setmentors(mentors)

    getcollegelogos();
  }
  const getcollegelogos = async () => {
    setisLoading(true);
    const { data: collegelogos } = await GetCollegelogos(
      `${window.name}collegelogos`
    );
    setcollegelogos(collegelogos.logos);
    checkLOgin();
  };
  const gettestimonials = async () => {
    const { testimonials } = await Gettestimonials(
      `${window.name}testimonials`
    );
    testimonials.sort(function (a, b) {
      return (
        Date.parse(b.createdAt.substring(0, 10)) -
        Date.parse(a.createdAt.substring(0, 10))
      );
    });
    testimonials.slice(0, 5);
    settestimonials(testimonials);

    getstudents(testimonials);
  };
  const getstudents = (data) => {
    data.map((testimonial, index) => {
      getStudent(testimonial.studentId).then((res) => {
        settestimonialsdata((state) => [
          ...state,
          { testimonial: testimonial, student: res.user },
        ]);
      });
      if (index == data.length - 1) {
        setisLoading(false);
      }
    });
  };
  const checkLOgin = async () => {
    const { isLoggedIn: isloggedin } = await Authverifier(
      `${window.name}users/me`
    );
    setisLoggedin(isloggedin);
    getwebinardata();
  };

  const getwebinardata = async () => {
    setisLoading(true);
    const { data: webinardata } = await Researchpgms(
      `${window.name}get-all-webinars`
    );
    if (webinardata) {
      setwebinardata(webinardata);
    }
    gettestimonials();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
          <div className="slider-webinar">
            <Slider {...settings}>
              {webinardata.map((webinar, index) => {
                return webinar.isOpen ? (
                  <Webinar
                    key={index}
                    webinardata={webinar}
                    isloggedin={isLoggedIn}
                  />
                ) : (
                  ""
                );
              })}
            </Slider>
          </div>

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
                      World's First Platform Rewarding Students for Research
                    </h2>
                    <h2 className="form-title">
                      Collaborate | Research | Learn | Earn
                    </h2>

                    <p>
                      Platform to connect leading researchers with the best
                      students
                    </p>
                  </div>

                  {/*!isLoggedIn ? (
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
                  )*/}
                  <div className="buttons ">
                    <Link to="/openprogrammes" className="btns button1">
                      Upcoming Research: Apply Now
                    </Link>
                  </div>
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

          <Colleges logos={collegelogos} />
          <MentorCarusel mentors={mentors} />
          <section className="about">
            <div className="about-content">
              <h2>How our students work?</h2>
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
                  <p className="outcomes-col-head">Financial Incentives</p>
                  <p className="outcomes-col-text">
                    Students who get selected via stringent selection process at
                    LearnByResearch,work under research mentors to complete the
                    research.For every assignment that students complete and get
                    approvel from researcher,students earn upto ₹ 250 in cash.
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
          {/*<Testimonial testimonials={testimonialsdata} />*/}
          <div
            className="holder-divv"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div className="applications-heading">
              <h2>Selection Process</h2>
            </div>
            <img
              src="/images/app-status.svg"
              alt="app-status"
              className="app-status app-status-home"
            />
          </div>

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
