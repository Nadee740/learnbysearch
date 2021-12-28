import Footer from "../LandingPage/footer/footer";

const Quizconfirmtaion = () => {
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
          You are about to take a quiz test for the Research Program: rp for the
          Position which is one of the most important screening criteria at LBR.
        </p>{" "}
        <p className="quiz-confirm-txt2">
          {" "}
          Time required to take this test is <u>20 minutes</u> . submitting
          application is the first step. Inorder to be eligible for admission to
          the research Program, it is mandatory to comlplete this test in the
          next <u>2 working days</u>.
        </p>
        <div className="quiz-confirm-btm">
          <button className="quiz-confirm-btm-btn1 quiz-confirm-btm-btn">
            Skip
          </button>
          <button className="quiz-confirm-btm-btn2 quiz-confirm-btm-btn">
            Start Now
          </button>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Quizconfirmtaion;
