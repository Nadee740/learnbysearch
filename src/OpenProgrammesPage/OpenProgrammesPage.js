import React from "react";
import Footer from "../LandingPage/footer/footer";
import { BsCalendarFill, BsFillBellFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import "./OpenProgrammesPage.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Researchpgms from "../Backend/Researchpgms";
function OpenProgrammesPage() {
  const {id}=useParams()

  const[isLoading,setisLoading]=useState(true)
  const[blogsData,setblogData]=useState("")
  const[SearchText,setsearchText]=useState("")
  
  const htmlpart=blogsData.description;


  const getBlogs=async()=>{
  setisLoading(true)
  const { data: Datass } = await Researchpgms(`${window.name}research-program/${id}`)
  Datass.outcomes.map((m)=>{
    console.log(m)
  })
  setblogData(Datass)
  setisLoading(false)
}

  useEffect(() => {
    
    getBlogs()
    
   
  }, [])

  return (
    <>
       {isLoading?<div className="isLoading"><h1>Loading...</h1></div>:
    <div>
      <div className="blogdetailpage openprogrammespage">
        <div className="blogdetailpage-img">
          <div className="blogdetailpage-head openprogrammespage-head">
            <div className="blogdetailpage-top openprogrammespage-top">
              <>
                {blogsData.title}
              </>
              {blogsData.applicationStatus?
                <p>
                 Applications Open !<br></br>
              </p>:
              <p>
                 Applications Closed !<br></br>
              </p>}
            </div>
          </div>
        </div>
        <div className="openprogrammespage-holder">
          <div className="openprogrammespage-section">
            <p className="openprogrammespage-head"> Objective</p>
            <p className="openprogrammespage-text">
              {blogsData.objective}
            </p>
          </div>
          <div className="line"></div>
          <div className="openprogrammespage-section">
            <p className="openprogrammespage-head">
              Description of the Research
            </p>
            
            <div dangerouslySetInnerHTML={{__html:htmlpart}}></div>
            
          </div>
          <div className="line"></div>
          <div className="openprogrammespage-section">
            <p className="openprogrammespage-head">Outcome of the Research</p>
            <p className="openprogrammespage-text">
              <ul className="openprogrammespage-list">
              {blogsData.outcomes.map((outcome,index)=>(
                <li key={index}>
                  {outcome}
                </li>
              ))}
                
               
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
                <p className="vaccency-item-text">Approximately {blogsData.duration} years</p>
              </div>
              <div className="openprogrammespage-feature-col openprogrammespage-feature-col2">
                <BsFillBellFill size="6em" color="#818181" />
                <p className="vaccency-item-title openprogrammespage-feature-title">
                  Weekly commitment
                </p>
                <p className="vaccency-item-text">
                   {blogsData.commitment}
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
       }
    </>
  );
}

export default OpenProgrammesPage;
