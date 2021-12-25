import Footer from "../LandingPage/footer/footer";
import "./quiz.css";
const QuizSectionResults = () => {
  return (
    <>
      <div className="quiz-window">
        <h2 className="quiz-head">Quiz Result</h2>
        <p className="quiz-window-para">Quiz for position:Research Program</p>
        <div className="quiz-score">5/10</div>
        <div className="quiz-result">
          <p className="quiz-result-text1">5 Correct Answers</p>{" "}
          <p className="quiz-result-text1">3 Wrong Answers</p>
        </div>{" "}
        <div className="quiz-resultfooter">
          <button className="quiz-resultfooter-btn">
            Download Certificate
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuizSectionResults;
