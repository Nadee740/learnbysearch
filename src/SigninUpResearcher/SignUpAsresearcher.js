import { useState } from "react";
import { Link } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
const SignUpAsresearcher = () => {
  const [passVISIBLE, setpassVISIBLE] = useState(false);
  return (
    <>
      <section className="sign-in">
        <div className="container">
          <div className="signup-content">
            <div className="signup-image">
              <img src="../images/login-research.svg" alt="Login pic"></img>
            </div>
            <div className="singup-form">
              <h2 className="form-title">SignUp As Researcher</h2>
              <form onSubmit="">
                <div className="inputholder" id="usernameholder">
                  <div className="inputholder-top">
                    <input
                      required
                      type="name"
                      placeholder="Your Name"
                      id="username"
                    />
                  </div>
                </div>
                <div className="inputholder" id="usernameholder">
                  <div className="inputholder-top">
                    <input
                      required
                      type="email"
                      placeholder="Email"
                      id="username"
                    />
                  </div>
                </div>
                <div className="inputholder" id="usernameholder">
                  <div className="inputholder-top">
                    <input
                      required
                      type="text"
                      placeholder="Field"
                      id="username"
                    />
                  </div>
                </div>

                <div className="inputholder" id="passholder">
                  <div className="inputholder-top">
                    <input required id="password" placeholder="Password" />
                    {passVISIBLE ? (
                      <HiEye
                        size="1.3em"
                        color="#404040"
                        onClick={() => {
                          setpassVISIBLE(!passVISIBLE);
                        }}
                      />
                    ) : (
                      <HiEyeOff
                        size="1.3em"
                        color="#404040"
                        onClick={() => {
                          setpassVISIBLE(!passVISIBLE);
                        }}
                      />
                    )}
                  </div>
                  <label className="label" htmlFor="">
                    Error
                  </label>
                </div>
                <input
                  type="submit"
                  value="Sign Up"
                  placeholder="Sign Up"
                  className="submit-btn"
                />
                {/* <Link to="/signup">
                    <p className="form-btmtext form-btmtext1">
                      Not registered ? Signup
                    </p>
                  </Link> */}

                <Link>
                  <p className="form-btmtext">Already Have an Account</p>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpAsresearcher;
