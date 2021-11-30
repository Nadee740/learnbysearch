import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./links.css";

import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
const LinksPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Programs</title>
      </Helmet>
      <div className="links">
        <img src="/fav2.jpg" alt="" className="links-icn" />
        <p className="links-btn-txt1">Follow Us On Social Media</p>
        <a href="https://www.facebook.com" target="_blank">
          <button className="links-btn fb">
            <FaFacebook color="#fff" size="2em" />{" "}
            <p className="links-btn-txt">Like Us On Facebook</p>
          </button>
        </a>
        <a href="https://www.instagram.com/learnbyresearch/" target="_blank">
          <button className="links-btn wtspp">
            <FaInstagramSquare color="#fff" size="2em" />{" "}
            <p className="links-btn-txt">Follow us on Instagram</p>
          </button>
        </a>

        <a
          href="https://www.linkedin.com/company/learnbyresearch/"
          target="_blank"
        >
          <button className="links-btn lnkdn">
            <FaLinkedin color="#fff" size="2em" />{" "}
            <p className="links-btn-txt">Connect on linkdin</p>
          </button>
        </a>

        <a href="tel:+91 7972251272" target="_blank">
          <button className="links-btn email">
            <MdPhone color="#fff" size="2em" />{" "}
            <p className="links-btn-txt">Give Us A Call</p>
          </button>
        </a>
        <a href="mailto:info@learnbyresearch.com" target="_blank">
          <button className="links-btn pagelink">
            <MdEmail color="#fff" size="2em" />{" "}
            <p className="links-btn-txt">Send Us an Email</p>
          </button>
        </a>
        <a href="https://www.learnbyresearch.com" target="_blank">
          <button className="links-btn fb">
            {" "}
            <img src="/fav.jpeg" alt="" className="links-btn-icn" />
            <p className="links-btn-txt">Go to our page</p>
          </button>
        </a>
      </div>
    </>
  );
};

export default LinksPage;
