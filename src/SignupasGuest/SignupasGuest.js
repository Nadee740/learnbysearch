import { useState } from "react";
import { Link } from "react-router-dom";

const SignupasGuest = () => {
  const [name,setName]=useState("")
  const [phone,setPhone]=useState("")
  return (
    <section className="sign-in">
      <div className="container">
        <div className="signup-content">
          <div className="signup-image">
            <img src="../images/SignIn.svg" alt="Login pic"></img>
          </div>
          <div className="singup-form">
            <h2 className="form-title">Register as a Guest</h2>
            <form>
              <div className="inputholder" id="usernameholder">
                <div className="inputholder-top">
                  <input required type="text" placeholder="Name" id="name" onChange={(e)=>{setName(e.target.value)}} value={name} />
                </div>
              </div>

              <div className="inputholder" id="passholder">
                <div className="inputholder-top">
                  <input
                    required
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e)=>{setPhone(e.target.value)}}
                  />
                </div>
                <label className="label" htmlFor=""></label>
              </div>
              <div className="inputholder" id="passholder">
                <div className="inputholder-top">
                  <input required id="mail" type="email" placeholder="Email" />
                </div>
                <label className="label" htmlFor=""></label>
              </div>
              <input
                type="submit"
                value="REGISTER"
                placeholder="REGISTER"
                className="submit-btn"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupasGuest;
