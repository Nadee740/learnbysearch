import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import SendPost from '../Backend/Sendpost';

function ApplicationForm() {
  
    const[q1,setq1]=useState("");
    const[q2,setq2]=useState("");
    const[q3,setq3]=useState("");
    const [switchitm, setSwitch] = useState(true);
    const handleChange = (event) => {
      setSwitch(switchitm);
      console.log(switchitm);
    };

    useEffect(() => {
        
      

      }, []);

  const submitApplictaionform=async()=>{
    const data={q1,q2,q3};

    const { message: messagee } = await SendPost(
        `${window.name}application-form`,
        data
      );

  }

    return (
      <div>
      <section className="sign-in">
        <div className="container">
          <div className="signup-content">
            <div className="signup-image">
              <img src="../images/Forms-bro.svg" alt="Login pic"></img>
            </div>
            <div className="singup-form">
              <h2 className="form-title">APPLICATION </h2>
              <form>
                <div className="inputholder inputholder2" id="usernameholder">
                  <div className="inputholder-top ">
                    <textarea
                      rows="2"
                      className="textarea"
                      placeholder="What do you want to achieve by joining the research program?"
                    ></textarea>
                  </div>
                </div>

                <div className="inputholder inputholder2" id="usernameholder">
                  <div className="inputholder-top inputholder-top3">
                    <p className="inputp">
                      The Program charges 5000 fees to cover the
                      research,training and resources cost.Can you afford to pay
                      the fees?( If eligible you may get financial assistance to
                      support. )
                    </p>
                    <div className="div">
                      <select className="selectbx">
                        <option value="YES" className="selectbx-itm">
                          YES
                        </option>
                        <option value="NO" className="selectbx-itm">
                          NO
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="inputholder inputholder2" id="usernameholder">
                  <div className="inputholder-top ">
                    <textarea
                      rows="5"
                      className="textarea"
                      placeholder="If You Want financial assistance please mention your annual family income and tell us how you can help LearnByResearch to support others in need of assistance like you"
                    ></textarea>
                  </div>
                </div>

                <input
                  type="submit"
                  value="APPLY NOW"
                  placeholder="Sign Up"
                  className="submit-btn"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default ApplicationForm;
