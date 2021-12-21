import Footer from "../LandingPage/footer/footer";
import "./mentors.css";
const Mentors = () => {
  return (
    <>
      <div className="mentorssec">
        <h2 className="mentorcarousel-head">Our Mentors</h2>
        <div className="mentor-grid">
          <div className="mentorcarousel-card-inner">
            <img
              src={"https://randomuser.me/api/portraits/men/45.jpg"}
              alt="Mentor image"
              className="mentorcarousel-img"
            />
            <p className="mentorcarousel-card-head">SDS</p>
            <p className="mentorcarousel-card-sub">SDSD</p>
          </div>
          <div className="mentorcarousel-card-inner">
            <img
              src={"https://randomuser.me/api/portraits/men/45.jpg"}
              alt="Mentor image"
              className="mentorcarousel-img"
            />
            <p className="mentorcarousel-card-head">SDS</p>
            <p className="mentorcarousel-card-sub">SDSD</p>
          </div>
          <div className="mentorcarousel-card-inner">
            <img
              src={"https://randomuser.me/api/portraits/men/45.jpg"}
              alt="Mentor image"
              className="mentorcarousel-img"
            />
            <p className="mentorcarousel-card-head">SDS</p>
            <p className="mentorcarousel-card-sub">SDSD</p>
          </div>
          <div className="mentorcarousel-card-inner">
            <img
              src={"https://randomuser.me/api/portraits/men/45.jpg"}
              alt="Mentor image"
              className="mentorcarousel-img"
            />
            <p className="mentorcarousel-card-head">SDS</p>
            <p className="mentorcarousel-card-sub">SDSD</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mentors;
