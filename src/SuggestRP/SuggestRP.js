import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const SuggestRP = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Programs</title>
      </Helmet>
      <section className="sign-in">
        <div className="container">
          <div className="signup-content">
            <div className="signup-image">
              <img src="../images/Laboratory-bro.svg" alt="Login pic"></img>
            </div>
            <div className="singup-form">
              <h2 className="form-title">Suggest Research program</h2>
              <form onSubmit="">
                <div className="inputholder" id="usernameholder">
                  <div className="inputholder-top">
                    <input
                      required
                      type="name"
                      placeholder="Research Title"
                      id="username"
                    />
                  </div>
                </div>

                <p className="inputtext">Question</p>
                <div className="inputholder inputholder2 " id="usernameholder">
                  <div className="inputholder-top ">
                    <textarea
                      minLength={150}
                      rows="6"
                      className="textarea"
                      placeholder=""
                    ></textarea>
                  </div>
                  <label className="label" htmlFor="">
                    Error
                  </label>
                </div>

                <input
                  type="submit"
                  value="Apply for research"
                  className="submit-btn"
                />
                {/* <Link to="/signup">
                    <p className="form-btmtext form-btmtext1">
                      Not registered ? Signup
                    </p>
                  </Link> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuggestRP;
