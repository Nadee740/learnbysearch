import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";
import Tokenlesssendpost from "../../Backend/tokenlesssendpost";

const Footer = () => {
  const [email, setemail] = useState();

  const Subscribe = async () => {
    const sub_data = {
      email,
    };
    const { message: messagee } = await Tokenlesssendpost(
      `${window.name}subscribers`,
      sub_data
    );
    setemail("");
  };

  return (
    <footer className="footer">
      <div className="footer-col1">
        <Link to="/" className="footer-logo">
          Learn By Research
        </Link>
        <p className="footer-text2">
          World's first-ever platform for exploring online independent research
          programs of your interest and connecting with a mentor to work on
          break through technologies.
        </p>
        <div className="footer-sec">
          <BsFillEnvelopeFill size="1.3em" color="#F4F4F4" />
          <a href="mailto:info@learnbyresearch.com" className="footer-text">
            info@learnbyresearch.com
          </a>
        </div>
        <div className="footer-sec">
          <IoCall size="1.3em" color="#F4F4F4" />

          <a href="tel:+91 7972251272" className="footer-text">
            +91 7972251272
          </a>
        </div>
      </div>
      <div className="footer-col2">
        <div className="footer-col2-1">
          {/* <div className="socialIcn">
           <FaFacebookF size="1.3em" color="#F4F4F4" />
          </div> */}
          <p className="footer-text2">Subscribe To Our Newsletter</p>
          <div className="footer-sec">
            <input
              className="email-subscribe"
              type="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            ></input>
            <button onClick={Subscribe} className="subs-btn footer-btn">
              Subscribe
            </button>
            <div className="footer-sec "></div>
          </div>
          <p className="footer-text2">Follow us On Social Media</p>
          <div className="socialIcnx">
            <div className="socialIcn">
              <a href="https://www.instagram.com/learnbyresearch/">
                {" "}
                <FaInstagram size="1.3em" color="#F4F4F4" />
              </a>
            </div>
            <div className="socialIcn">
              <a href="https://www.linkedin.com/company/learnbyresearch/">
                <FaLinkedinIn size="1.3em" color="#F4F4F4" />
              </a>
            </div>
          </div>
          {/* <div className="socialIcn">
            <FaTwitter size="1.3em" color="#F4F4F4" />
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
