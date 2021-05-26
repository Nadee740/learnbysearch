import "./LandingPage.css"
import {Link} from "react-router-dom"
const LandingPage = () => {
    return ( 
        <>
        <section className="top">
    <div className="container">
        <div className="top-content">
            <div className="left-image">
                <figure>
                    <img src="../images/landingpage.png" alt="Login pic"></img>
                </figure>
  
            </div>
            <div className="right-side">
            <div className="top-heading">
            <h2 className="form-title">Collaborate | Research | LEARN</h2>
                 
             <p>Worlds first online independent research & development hub</p>
             </div>

             <div className="buttons">
        
             <Link to="/signup" className="btns">Sign up</Link>
             <br></br>
             <Link to="/login" className="btns" >LOGIN</Link>
             </div>
            </div>
        </div>
    </div>

        </section>
        <section className="second">
            <div className="scnd-content">
                <h2>What is Learn By Research?</h2>
                <p>LearnByResearch provides a platform for students to become the best independent researchers who wish to pursue higher education or join the innovation teams in top organizations.</p>
            </div>
        </section>
        <section className="about">
            <div className="about-content">
                <h2>About us</h2>
                <div className="about-1">
                  <figure>
                    <img src="../images/aboutus.png" alt="Login pic" ></img>
                </figure>
                <p>LearnByResearch is a hub for innovation, research & development. Pioneered by experienced professionals from the industry, academics & startups. LearnByResearch is unique in its methodology of delivering the right skillsets. 
</p>
                   </div>
                <div className="about-2">
                <figure>
                    <img src="../images/aboutus2.png" alt="Login pic" ></img>
                </figure>
  <p>We promote innovation, research, and entrepreneurship as part of the research work. LearnByResearch is dedicated to higher levels of interdisciplinary R&D in the fields of emerging technologies with the strategy to build entrepreneurs and industry leaders.
</p>

                </div>
                
                <div className="about-3">
                <figure>
                    <img src="../images/aboutus3.png" alt="Login pic" ></img>
                </figure>
    <p>Our methodology emphases on a practical learning approach with hands-on experience to inculcate the best industry standards. This approach is meant to help students face all challenges with the supervision of a guide.

</p>

                </div>
                <div className="about-4">
                <figure>
                    <img src="../images/aboutus4.png" alt="Login pic" ></img>
                </figure>
   <p>At LearnByResearch, students and research guides collaborate to enhance their skills and knowledge as well as build life-changing products and services.</p>

                </div>


            </div>
        </section>
  

        </>
        
        );
}
 
export default LandingPage;