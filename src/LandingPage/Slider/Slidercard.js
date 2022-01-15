import React from "react";
import { Link } from "react-router-dom";
import "./slider.css";
const Slidercard = ({ blog }) => {
  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    // str.replace( /(<([^>]+)>)/ig, '')
    return str.replace("&nbsp;", " ").replace(/(<([^>]+)>)/gi, "");
  }
  let str = removeTags(blog.content);

  if (str.length > 150) str = str.substring(0, 150) + ".....";

  const htmlpart = blog.content;
  let a = "/blogsdetailspage/" + blog.slug;
  return (
    <div className="cardholder2">
      <div className="card">
        <img src={blog.imageUrl} alt="Blog " className="card-img" />
        <h3 className="card-heading-new">{blog.title.substring(0,35)}</h3>
        <p>
          <div className="card-txt">{str}</div>
        </p>
        <Link to={a}>
          <button>READ MORE</button>
        </Link>
      </div>
    </div>
  );
};
export default Slidercard;
