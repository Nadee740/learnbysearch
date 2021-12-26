import { useEffect, useState } from "react";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { useParams } from "react-router-dom";
import Researchpgms from "../Backend/Researchpgms";
import Footer from "../LandingPage/footer/footer";
import "./quiz.css";
const QuizSection = () => {
  const { rpid } = useParams();
  const { positionid } = useParams();
  const [quizdata,setquizdata]=useState();
  const [isLoading,setisLoading]=useState(true);
  const [score,setscore]=useState(0);

  useEffect(async()=>{

    const { data } = await Researchpgms(`${window.name}quiz?rpId=${rpid}&positionId=${positionid}`);
    if(data!=null)
    {  setquizdata(data)
      setisLoading(false)}
  
  },[])
  if (isLoading)
  return (
    <div className="isLoading">
      <SolarSystemLoading />
    </div>
  );
  return (
    <>
      <div className="quiz-window">
        <h2 className="quiz-head">Quiz</h2>
        <p className="quiz-window-para">Quiz for position:Research Program</p>
        {quizdata.questions.map((question,index) => {
          return (
            <div className="quiz-card">
              <p className="quiz-question">
                {index+1 +".  " + question.question}
              </p>
              <button className="quiz-option" onClick={()=>{
                if(question.correctOption==1)
                   {setscore(score+1)
                   console.log(score)
                   }
                else
                {if(score>0)
                  {
                    setscore(score-1)
                  }


                }
              }}>
                <div className="quiz-option-circle">A</div> {question.option1}
              </button>
              <button className="quiz-option" onClick={()=>{
                if(question.correctOption==2)
                   {setscore(score+1)
                   
                   }
                   else
                {if(score>0)
                  {
                    setscore(score-1)
                  }


                }
              }}>
                <div className="quiz-option-circle">B</div> {question.option2}
              </button>
              <button className="quiz-option" onClick={()=>{
                if(question.correctOption==3)
                   {setscore(score+1)
                   console.log(score)
                   }
                   else
                {if(score>0)
                  {
                    setscore(score-1)
                  }


                }
              }}>
                <div className="quiz-option-circle">C</div>{question.option3}
              </button>
              <button className="quiz-option" onClick={()=>{
                if(question.correctOption==4)
                   {setscore(score+1)
                   console.log(score)
                   }
                   else
                {if(score>0)
                  {
                    setscore(score-1)
                  }


                }
              }}>
                <div className="quiz-option-circle">D</div>{question.option4}
              </button>
            </div>
          );
        })}

        <div className="quiz-footer">
          <button onClick={()=>{
            console.log(score)
          }} className="quiz-footer-btn">Submit</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuizSection;
