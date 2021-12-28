import { useEffect, useState } from "react";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { useParams } from "react-router-dom";
import Researchpgms from "../Backend/Researchpgms";
import Footer from "../LandingPage/footer/footer";

const Quizconfirmtaion = () => {
    const { rpid } = useParams();
  const { positionid } = useParams();
  const {appid}=useParams();
    const[isLoading,setisLoading]=useState()
    const[rp,setrp]=useState()
    const[postion,setPosition]=useState()

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
              window.location='/'
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
