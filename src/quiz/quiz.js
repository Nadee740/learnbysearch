import { useEffect, useState } from "react";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { Link, useParams } from "react-router-dom";
import Researchpgms from "../Backend/Researchpgms";
import Footer from "../LandingPage/footer/footer";
import Modal from "react-awesome-modal";
import "./quiz.css";
import SendPost from "../Backend/Sendpost";
import { Helmet } from "react-helmet";
const QuizSection = () => {
  const { rpid } = useParams();
  const { positionid } = useParams();
  const { appid } = useParams();
  const [quizdata, setquizdata] = useState();
  const [isLoading, setisLoading] = useState(true);
  const [empty, setisempty] = useState(false);
  const [score, setscore] = useState(0);
  const [visible, setvisible] = useState(false);
  const [selected, setselected] = useState([]);
  const [result, setresult] = useState([false]);
  const [chumma, setchumma] = useState(false);
  const [otherchoice,setotherchoice]=useState([]);
  const closeModal = () => {
    setvisible(false);
  };
  useEffect(async () => {
    const { data } = await Researchpgms(
      `${window.name}quiz?rpId=${rpid}&positionId=${positionid}`
    );
    if (data != null) {
      setquizdata(data);
      let a = selected;
      data.questions.map((question, index) => {
        a.push([false, false, false, false, false]);
      });
      setselected(a);

      setisLoading(false);
    } else {
      setisempty(true);
      setisLoading(false);
    }
  }, []);
  if (isLoading)
    return (
      <div className="isLoading">
        <SolarSystemLoading />
      </div>
    );
  if (empty) {
    return (
      <div className="oopps">
        <h1>Ooops no quiz data found ...</h1>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Quiz || LearnByResearch</title>
      </Helmet>
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
              <Link
                onClick={async () => {
                  if (result.length == quizdata.questions.length) {
                    let win = 0;
                    let lose = 0;
                    closeModal();

                    result.map((re) => {
                      if (re) win++;
                      else lose++;
                    });
                    let data = {
                      applicationId: appid,
                      score: win,
                    };

                    const { Json } = await SendPost(
                      `${window.name}score`,
                      data
                    );
                    console.log(Json);
                    if (Json.status == "ok") {
                      let len = result.length;
                      // window.location='/myapplications'
                      window.location = `/quiz/result/${rpid}/${positionid}/${win}/${lose}/${len}`;
                    }
                  } else {
                    closeModal();
                    alert("Please attend all question");
                  }
                }}
              >
                Submit
              </Link>
            </div>
          </Modal>
        </section>
      </div>
      <div className="quiz-window">
        <h2 className="quiz-head">Quiz</h2>
        <p className="quiz-window-para">
          Quiz for {quizdata.position.title}:{quizdata.researchProgram.title}
        </p>
        {quizdata.questions.map((question, index) => {
          return (
            <div className="quiz-card">
              <p className="quiz-question">
                {index + 1 + ".  " + question.question}
              </p>
              <button
                className={
                  selected[index][0]
                    ? "quiz-option-selected-green"
                    : "quiz-option"
                }
                onClick={() => {
                  let a = [...selected];
                  a[index][0] = !a[index][0];
                  a[index][1] = false;
                  a[index][2] = false;
                  a[index][3] = false;
                  a[index][4] = false;
                  setselected(a);
                  if (question.correctOption == 1) {
                    let r = result;
                    r[index] = true;
                    setresult(r);
                  } else {
                    let r = result;
                    r[index] = false;
                    setresult(r);
                  }
                }}
              >
                <div className="quiz-option-circle">A</div> {question.option1}
              </button>
              <button
                className={
                  selected[index][1]
                    ? "quiz-option-selected-green"
                    : "quiz-option"
                }
                onClick={() => {
                  let a = [...selected];
                  a[index][1] = !a[index][1];
                  a[index][0] = false;
                  a[index][2] = false;
                  a[index][3] = false;
                  a[index][4] = false;
                  setselected(a);
                  if (question.correctOption == 2) {
                    let r = result;
                    r[index] = true;
                    setresult(r);
                  } else {
                    let r = result;
                    r[index] = false;
                    setresult(r);
                  }
                }}
              >
                <div className="quiz-option-circle">B</div> {question.option2}
              </button>
              <button
                className={
                  selected[index][2]
                    ? "quiz-option-selected-green"
                    : "quiz-option"
                }
                onClick={() => {
                  let a = [...selected];
                  a[index][2] = !a[index][2];
                  a[index][1] = false;
                  a[index][0] = false;
                  a[index][3] = false;
                  a[index][4] = false;
                  setselected(a);
                  if (question.correctOption == 3) {
                    let r = result;
                    r[index] = true;
                    setresult(r);
                  } else {
                    let r = result;
                    r[index] = false;
                    setresult(r);
                  }
                }}
              >
                <div className="quiz-option-circle">C</div>
                {question.option3}
              </button>
              <button
                className={
                  selected[index][3]
                    ? "quiz-option-selected-green"
                    : "quiz-option"
                }
                onClick={() => {
                  let a = [...selected];
                  a[index][3] = !a[index][3];
                  a[index][1] = false;
                  a[index][2] = false;
                  a[index][0] = false;
                  a[index][4] = false;
                  setselected(a);
                  if (question.correctOption == 4) {
                    let r = result;
                    r[index] = true;
                    setresult(r);
                  } else {
                    let r = result;
                    r[index] = false;
                    setresult(r);
                  }
                }}
              >
                <div className="quiz-option-circle">D</div>
                {question.option4}
              </button>
              <button
                className={
                  selected[index][4]
                    ? "quiz-option-selected-green"
                    : "quiz-option"
                }
                onClick={() => {
                  let a = [...selected];
                  a[index][4] = !a[index][4];
                  a[index][1] = false;
                  a[index][2] = false;
                  a[index][0] = false;
                  a[index][3] = false;
                  setselected(a);
                  if (question.correctOption == 5) {
                    let r = result;
                    r[index] = true;
                    setresult(r);
                  } else {
                    let r = result;
                    r[index] = false;
                    setresult(r);
                  }
                }}
              >
                <div className="quiz-option-circle">E</div>
                <input onChange={(e) => {
                    console.log(e.target.value)
                  let a = [...selected];
                  a[index][4] = !a[index][4];
                  a[index][1] = false;
                  a[index][2] = false;
                  a[index][0] = false;
                  a[index][3] = false;
                  setselected(a);
                  if (question.correctOption == e.target.value) {
                    let r = result;
                    r[index] = true;
                    setresult(r);
                  } else {
                    let r = result;
                    r[index] = false;
                    setresult(r);
                  }
                }} type={"text"} placeholder="Other choice" />
              </button>
            </div>
          );
        })}

        <div className="quiz-footer">
          <button
            onClick={() => {
              setvisible(true);
            }}
            className="quiz-footer-btn"
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuizSection;
