import Modal from "react-awesome-modal";
import { useState } from "react";
import Footer from "../LandingPage/footer/footer";
import "./Contactus.css";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const ContactUs = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphonenumber] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const [visible, setvisible] = useState(false);
  const formdata = new FormData();
  const closeModal = () => {
    setname("")
    setemail("")
    setphonenumber("")
    setsubject("")
    setmessage("")
    setvisible(false);
  };

  const submitMssg = async (e) => {
    e.preventDefault();
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase()))
    {formdata.append("name",name);
    formdata.append("email",email);
    formdata.append("phone",phone);
    formdata.append("subject",subject);
    formdata.append("message",message);
    
    let url =
      "https://script.google.com/macros/s/AKfycbx-zFVJ-6kf6yhTm6qASuEDxgUeeXdQKEpPuJsNGI-yQpSAUc1YcpgxWPFm0MAtrGzA/exec";

    await fetch(url, {
      method: "POST",

      body: formdata,
    })
      .then((res) => res.json())
      .then((json) => {
        
        if (json.result == "success") {
          setvisible(true);
        }
      });
    }
    else{
      alert("Please type valid mail")
    }

  };
  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home | ContactUs</title>
                
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
              <p>THANKS FOR YOUR TIME WE SHALL SOON REACH TO YOU...</p>
              <Link  onClick={closeModal}>
                Close
              </Link>
            </div>
          </Modal>
        </section>
      </div>

      <section className="contact-us">
        <div className="container">
          <div className="contactus-content">
            <div className="contactus-image">
              <figure>
                <img src="../images/contact.svg" alt="Login pic"></img>
              </figure>
            </div>
            <div className="contact-usheadh">
              <h2 className="Contact title">Contact Us</h2>
              <p>
                To know more about us or collaborate with us please feel to
                reach us through the below form, we try to respond to all
                messages within 2 working days.
              </p>
              <br />
              <p>info@learnbyresearch.com | +91-7972251272</p>
            </div>
          </div>
        </div>
      </section>
      <section className="contactformpart">
        <div className="contactheading">
          <h2>Contact Form</h2>
        </div>
        <div className="contactform">
          <div className="formclass">
           
            <form id="gform" onSubmit={submitMssg}>
              <input
              required
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
              <input
              required
                type="email"
                placeholder="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <input
              required
                type="text"
                placeholder="Phone number"
                name="phone"
                id="phone"
                value={phone}
                onChange={(e) => {
                  setphonenumber(e.target.value);
                }}
              />
              <input
              required
                type="text"
                placeholder="Subject"
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => {
                  setsubject(e.target.value);
                }}
              />
              <br />
              
              <div className="textarea">
              <p className="inputtext">Message</p>
                <textarea
                  id="proble"
                  rows="15"
                  placeholder=""
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setmessage(e.target.value);
                  }}
                ></textarea>
              </div>

              
              <input
                  type="submit"
                  value="Submit"
                  placeholder="Sign Up"
                  className="submit-btn"
                />
            
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
