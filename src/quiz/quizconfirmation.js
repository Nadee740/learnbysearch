import { useEffect, useState } from "react";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { Link, useParams } from "react-router-dom";
import Researchpgms from "../Backend/Researchpgms";
import Footer from "../LandingPage/footer/footer";
import Modal from "react-awesome-modal";
import "./quiz.css";
const Quizconfirmtaion = () => {
    const { rpid } = useParams();
  const { positionid } = useParams();
  const {appid}=useParams();
    const[isLoading,setisLoading]=useState()
    const[rp,setrp]=useState()
    const[postion,setPosition]=useState()
    const[visible,setvisible]=useState(false)

    const closeModal=()=>{
      setvisible(false)
    }
    useEffect(async()=>{
        const { data } = await Researchpgms(`${window.name}research-program-id/${rpid}`)
        setrp(data.title)
        const { data:pos } = await Researchpgms(`${window.name}position/${positionid}`)
        setPosition(pos.title)
        setisLoading(false)
    },[])
    if (isLoading)
return (
  <div className="isLoading">
    <SolarSystemLoading/>
  </div>
);
  return (
    <>
    <div className="popupscreen">
        <section className="popupscreen">
          <Modal
            visible={visible}
            width="350"
            height="300"
            effect="fadeInUp"
            onClickAway={closeModal}
          >
            <div className="popup">
              <img
                src="/images/LearnByResearchLogo.png"
                className="logo"
                alt=""
              />
              <p>Warning !</p>
              <br/>
              This quiz is compulsory for the screening process.
Failing to attempt the quiz will result in your
application not moving forward.
<br />
You must take this quiz in next 2 working days and
can find the quiz link on your Dashboard "My

Applications".
              <div className="extrapart-webinar">
                <div className="popup-button">
                  <Link
                  to="/myapplications" onClick={closeModal}
                  >
                    Skip
                  </Link>
                </div>
                <div className="popup-button">
                  <Link
                  to={`/quiz/${rpid}/${positionid}/${appid}`}
                    onClick={() => {
                      closeModal()
                      
                    }}
                  >
                    Attend
                  </Link>
                </div>
              </div>
            </div>
          </Modal>
        </section>
      </div> 
      <div className="quiz-confirmation">
        <h2 className="quiz-confirmation-head">Take Your Quiz!</h2>
        <img
          src="/images/quizconfirm.svg"
          alt="Quiz confirm"
          className="quiz-confirm-img"
        />
        <p className="quiz-confirm-txt1">
          You are about to take a quiz test for the Research Program: {rp} for {postion} which 
          is one of the most important screening criteria at LBR.
        </p>{" "}
        <p className="quiz-confirm-txt2">
          {" "}
          Time required to take this test is <u>20 minutes</u> . submitting
          application is the first step. Inorder to be eligible for admission to
          the research Program, it is mandatory to comlplete this test in the
          next <u>2 working days</u>.
        </p>
        <div className="quiz-confirm-btm">
          <button onClick={()=>{
              setvisible(true)
          }} className="quiz-confirm-btm-btn1 quiz-confirm-btm-btn">
            Skip
          </button>
          <button onClick={()=>{
              window.location=`/quiz/${rpid}/${positionid}/${appid}`
          }} className="quiz-confirm-btm-btn2 quiz-confirm-btm-btn">
            Start Now
          </button>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Quizconfirmtaion;
