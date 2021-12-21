import Footer from "../LandingPage/footer/footer";
import { useEffect, useState } from "react";
import "./mentors.css";
import Researchpgms from "../Backend/Researchpgms";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
const Mentors = () => {
  const [mentors, setmentors] = useState("");
  const [isLoading, setisLoading] = useState(true);
  useEffect(async()=>{
    setisLoading(true);
    const { data: mentors } = await Researchpgms(`${window.name}mentors`);
    setmentors(mentors);
    setisLoading(false);
  },[])
  if(isLoading){
  return(
    <div className="isLoading">
      <SolarSystemLoading />
    </div>
  ) 

  }
  return (
    <>
      <div className="mentorssec">
        <h2 className="mentorcarousel-head">Our Mentors</h2>
        {
          mentors.map((mentor,index)=>{
    
let position = mentor.position.replace(/<\/?[^>]+(>|$)/g, "");
            return(
              <div className="mentor-grid">
          <div className="mentorcarousel-card-inner">
            <img
              src={mentor.imageUrl}
              alt="Mentor image"
              className="mentorcarousel-img"
            />
            <p className="mentorcarousel-card-head">{mentor.name}</p>
            <p className="mentorcarousel-card-sub">{position}</p>
          </div>
         </div>
            )
          })
        }
        
     
      </div>
      <Footer />
    </>
  );
};

export default Mentors;
