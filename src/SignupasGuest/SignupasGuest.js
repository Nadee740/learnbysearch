import { useState } from "react";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { Link, useParams } from "react-router-dom";
import Applyasguest from "../Backend/ApplyasGuest";
import Modal from "react-awesome-modal";
import Applyforwebinarasguest from "../Backend/Applyforwebinarasguest";

const SignupasGuest = () => {
  const { id} = useParams();
  const [name,setName]=useState("")
  const [phone,setPhone]=useState("")
  const [email,setemail]=useState("")
  const [visible,setvisible]=useState(false) 
  const [isLoading,setisLoading]=useState(false)
 
  const closeModal=()=>{
    setvisible(false)
  }

  const applyasguest=async(e)=>{
    e.preventDefault()
    setisLoading(true)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase())){
      const data={
      name,
      email,
      phone
    }

    const { message: outcome,id:userid } = await Applyasguest(
      `${window.name}guest/register`,
      data
    );
    if(outcome.includes("guest created"))
    {
 const webinardata={
   id:userid,
   webinarId:id
 }
 const { message: outcome} = await Applyforwebinarasguest(
      `${window.name}guest/apply-for-webinar`,
      webinardata
    );
    if(outcome.includes("applied for webinar successfully"))
    {
      setvisible(true)
      setemail("")
      setName("")
      setPhone("")
      setisLoading(false)
    }

    }

    }
    else
    {
      alert("please type valid mail")
      setisLoading(false)
    }
    
  }


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
              <p>SUCCESSFULLY REGISTERED FOR WEBINAR .</p>
              <br />
              <Link to="/" onClick={closeModal}>
                Close
              </Link>
            </div>
          </Modal>
        </section>
      </div>
     {isLoading ? (
        <div className="isLoading">
          <SolarSystemLoading/>
        </div>
      ) :
    <section className="sign-in">
      <div className="container">
        <div className="signup-content">
          <div className="signup-image">
            <img src="../images/SignIn.svg" alt="Login pic"></img>
          </div>
          <div className="singup-form">
            <h2 className="form-title">Register as a Guest</h2>
            <form onSubmit={applyasguest}>
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
                  <input required id="mail" type="email" placeholder="Email" value={email} onChange={(e)=>{setemail(e.target.value)}} />
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
     }
    </>
  );
};

export default SignupasGuest;
