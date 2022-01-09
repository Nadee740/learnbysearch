import { useEffect, useState } from "react";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { useParams } from "react-router-dom";
import Researchpgms from "../Backend/Researchpgms";
import Footer from "../LandingPage/footer/footer";
import "./quiz.css";
const QuizSectionResults = () => {
  const { lose } = useParams();
  const { score } = useParams();
  const { rpid } = useParams();
  const { positionid } = useParams();
  const { total } = useParams();
 
  const[isLoading,setisLoading]=useState(true)
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
      <div className="quiz-window">
        <h2 className="quiz-head">Quiz Result</h2>
        <p className="quiz-window-para">Quiz for {postion}:{rp}</p>
        <p className="quiz-window-para2">
        Thank you for attempting the quiz. Your application has
been successfully processed for further consideration.
You will here from us shortly.
<br></br>
{/* You have qualified for a detailed quiz report and a
certificate.Download it and share */}
</p>
        <div className="quiz-score">{score}/{total}</div>
        <div className="quiz-result">
          <p className="quiz-result-text1">{score} Correct Answers</p>{" "}
          <p className="quiz-result-text1">{lose} Wrong Answers</p>
        </div>{" "}
        <div className="quiz-resultfooter">
          <button onClick={()=>{
            window.location="/"
          }} className="quiz-resultfooter-btn">
            Home
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuizSectionResults;
