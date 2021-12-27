import { useEffect, useState } from "react";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { Link, useParams } from "react-router-dom";
import Researchpgms from "../Backend/Researchpgms";
import Footer from "../LandingPage/footer/footer";
import Modal from "react-awesome-modal";
import "./quiz.css";
import SendPost from "../Backend/Sendpost";
const QuizSection = () => {
  const { rpid } = useParams();
  const { positionid } = useParams();
  const { appid } = useParams();
  const [quizdata,setquizdata]=useState();
  const [isLoading,setisLoading]=useState(true);
  const [score,setscore]=useState(0);
  const [visible,setvisible]=useState(false);
  
  const [result,setresult]=useState([false])

  const closeModal=()=>{
    setvisible(false)
  }
  useEffect(async()=>{
  
    const { data } = await Researchpgms(`${window.name}quiz?rpId=${rpid}&positionId=${positionid}`);
    if(data!=null)
//     position:
// title: "Machine Learning Researcher "
// _id: "60ddbc6978e692ab358f7919"
// [[Prototype]]: Object
// questions: (5) [{…}, {…}, {…}, {…}, {…}]
// researchProgram:
// title:
    console.log(data)
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
     <div className="popupscreen">
        <section className="popupscreen">
          <Modal
            visible={visible}
            width="350"
            height="200"
            effect="fadeInUp"
            onClickAway={closeModal}
          >
            <div className="popup">
              <img
                src="/images/LearnByResearchLogo.png"
                className="logo"
                alt=""
              />
              <p>Are you sure you want to submit?.</p>
              <Link onClick={ async()=>{
                if(result.length==quizdata.questions.length)
{
                let win=0;
                let lose=0;
                closeModal()
                console.log(result)
                result.map((re)=>{
                  if(re)
                   win++
                  else
                   lose++
                })
                let data = {
       applicationId:appid,
       score:win
  
      };

      const { Json } = await SendPost(
        `${window.name}score`,
        data
      );
      console.log(Json)
      if(Json.status=="ok")
          {let len=result.length
       
             window.location=`/quiz/result/${rpid}/${positionid}/${win}/${lose}/${len}`
          }
              }
              else{
                closeModal()
                alert("Please attend all question")
              }
              }}>Submit</Link>
            </div>
          </Modal>
        </section>
      </div>
      <div className="quiz-window">
        <h2 className="quiz-head">Quiz</h2>
        <p className="quiz-window-para">Quiz for {quizdata.position.title}:{quizdata.researchProgram.title}</p>
        {quizdata.questions.map((question,index) => {
          return (
            <div className="quiz-card">
              <p className="quiz-question">
                {index+1 +".  " + question.question}
              </p>
              <button className="quiz-option" onClick={()=>{
                if(question.correctOption==1)
                   {
                  
                      let r=result
                    r[index]=true
                    setresult(r)
                   }
                else
                {
                  let r=result
                   r[index]=false
                   setresult(r)


                }
              }}>
                <div className="quiz-option-circle">A</div> {question.option1}
              </button>
              <button className="quiz-option" onClick={()=>{
                if(question.correctOption==2)
                {let r=result
                   r[index]=true
                   setresult(r)
                   }
                else
                {
                  let r=result
                   r[index]=false
                   setresult(r)


                }
            
              }}>
                <div className="quiz-option-circle">B</div> {question.option2}
              </button>
              <button className="quiz-option" onClick={()=>{
                if(question.correctOption==3)
                {let r=result
                   r[index]=true
                   setresult(r)
                   }
                else
                {
                  let r=result
                   r[index]=false
                   setresult(r)


                }
              }}>
                <div className="quiz-option-circle">C</div>{question.option3}
              </button>
              <button className="quiz-option" onClick={()=>{
                if(question.correctOption==4)
                {let r=result
                   r[index]=true
                   setresult(r)
                   }
                else
                {
                  let r=result
                   r[index]=false
                   setresult(r)


                }
              }}>
                <div className="quiz-option-circle">D</div>{question.option4}
              </button>
            </div>
          );
        })}

        <div className="quiz-footer">
          <button onClick={()=>{
            setvisible(true)
          }} className="quiz-footer-btn">Submit</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuizSection;
