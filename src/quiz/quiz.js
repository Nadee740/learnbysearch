import Footer from "../LandingPage/footer/footer";
import "./quiz.css";
const QuizSection = () => {
  return (
    <>
      <div className="quiz-window">
        <h2 className="quiz-head">Quiz</h2>
        <p className="quiz-window-para">Quiz for position:Research Program</p>
        {[1, 2, 3].map((item) => {
          return (
            <div className="quiz-card">
              <p className="quiz-question">
                {item}. Lorem ipsum dolor sit amet consectetur adipisicing elit?
              </p>
              <button className="quiz-option">
                <div className="quiz-option-circle">A</div> Option A content
              </button>
              <button className="quiz-option">
                <div className="quiz-option-circle">B</div> Option B content
              </button>
              <button className="quiz-option">
                <div className="quiz-option-circle">C</div> Option C content
              </button>
            </div>
          );
        })}

        <div className="quiz-footer">
          <button className="quiz-footer-btn">Submit</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuizSection;
