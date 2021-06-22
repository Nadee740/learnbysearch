import React from "react";
import { Link } from "react-router-dom";
import "./slider.css";
const Slidercard = ({ blog }) => {
  const htmlpart = blog.content;
  let a = "/blogsdetailspage/" + blog.slug;
  return (
    <div className="cardholder2">
      <div className="card">
        <img src={blog.imageUrl} alt="Blog " className="card-img" />
        <h3>{blog.title}</h3>
        <p>
          <div className="card-txt"></div>
        </p>
        <Link to={a}>
          <button>READ MORE</button>
        </Link>
      </div>
    </div>
  );
};
export default Slidercard;
