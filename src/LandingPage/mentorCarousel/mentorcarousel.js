import "./mentorcarousel.css";
import Slider from "react-slick";
const MentorCarusel = ({ mentors }) => {
  //   0:
  // education: "<p>MTech in Robotics and Automation,<br>BTech in Electrical and Electronics Engineering</p>"
  // email: "srichitra@learnbyresearch.com"
  // googleScholarLink: "https://scholar.google.com/citations?hl=en&user=Tun1Q6AAAAAJ"
  // imageUrl: "http://res.cloudinary.com/dn3oddkar/image/upload/v1625144137/aem5drn2kswanerf00ah.jpg"
  // linkedin: "https://www.linkedin.com/in/srichitra-s"
  // name: "Srichitra S"
  // organisation: "<p>LearnByResearch</p>"
  // phone: "9447473514"
  // position: "<p>Lead Researcher (AI and Robotics)</p>"
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoScroll: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mentorcarousel">
      <h2 className="mentorcarousel-head">Our Mentors</h2>
      <div className="mentorcarousel-sildercontainer">
        <Slider {...settings}>
          {mentors.map((mentor, index) => {
            if (index < 10) {
              let position = mentor.position.replace(/<\/?[^>]+(>|$)/g, "");
              return (
                <div className="mentorcarousel-card">
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
              );
            }
          })}
        </Slider>
      </div>
      <a href="/mentors">
        <p className="viewmore">View More</p>
      </a>
    </div>
  );
};
export default MentorCarusel;
