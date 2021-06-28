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
const [email,setemail]=useState();

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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dolor
          ex mollitia officia ea nihil nemo tenetur at animi possimus rem ipsa
          liber
        </p>
        <div className="footer-sec">
          <BsFillEnvelopeFill size="1.3em" color="#F4F4F4" />
          <a href="tel:+14123815500" className="footer-text">
            name@email.com
          </a>
        </div>
        <div className="footer-sec">
          <IoCall size="1.3em" color="#F4F4F4" />
          <a href="mailto:name@email.com" className="footer-text">
            +14123815500
          </a>
        </div>
        <div className="footer-sec">
         <input className="email-subscribe" type="email" value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
        </div>
        <div className="footer-sec footer-btn">
         <button onClick={Subscribe} className="subs-btn">Subscribe</button>
        </div>
      </div>
      <div className="footer-col2">
        <div className="footer-col2-1">
          <div className="socialIcn">
            <FaFacebookF size="1.3em" color="#F4F4F4" />
          </div>

          <div className="socialIcn">
            <FaInstagram size="1.3em" color="#F4F4F4" />
          </div>
          <div className="socialIcn">
            <FaLinkedinIn size="1.3em" color="#F4F4F4" />
          </div>
          <div className="socialIcn">
            <FaTwitter size="1.3em" color="#F4F4F4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
