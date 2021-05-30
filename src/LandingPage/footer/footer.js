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
const Footer = () => {
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
            +14123815500
          </a>
        </div>
        <div className="footer-sec">
          <IoCall size="1.3em" color="#F4F4F4" />
          <a href="mailto:name@email.com" className="footer-text">
            name@email.com
          </a>
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
