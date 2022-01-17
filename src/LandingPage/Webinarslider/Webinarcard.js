import React from "react";
import { Link } from "react-router-dom";
import "./slider.css";
const Slidercard = ({ blog }) => {
  //     imageUrl: 'https://res.cloudinary.com/dn3oddkar/image/upload/v1641887378/we_bkm1lo.jpg', date: '2022-01-21', title: ' How to write a  review of Literature', …}
  // createdAt: "2022-01-07T06:00:45.759Z"
  // date: "2022-01-21"
  // guestId: (2) ['61dd801b1a51eda54d7b20d0', '61dd95d41a51eda54d7b20d3']
  // imageUrl: "https://res.cloudinary.com/dn3oddkar/image/upload/v1641887378/we_bkm1lo.jpg"
  // isOpen: true
  // speakerId: "61d5599a20ab6804bfda3fd2"
  // studentId: (14) ['611de6f3e348e065bc17a6cb', '61dc2a84b4d942742db1a257', '60d832e7c8365a408da92132', '60d832e7c8365a408da92132', '60d832e7c8365a408da92132', '60d832e7c8365a408da92132', '60d832e7c8365a408da92132', '61a5b8908dc9d3c28f96ac67', '61ddad9276dc67acf2a4ad9c', '61dee64076dc67acf2a4adbc', '61dee64076dc67acf2a4adbc', '61586270cb2f297bedcac098', '61df8cbd76dc67acf2a4adc9', '61af2a96bb915e3ef36b08a8']
  // title: " How to write a  review of Literature"
  console.log(blog);
  //   function removeTags(str) {
  //     if ((str===null) || (str===''))
  //     return false;
  //     else
  //     str = str.toString();
  //     // str.replace( /(<([^>]+)>)/ig, '')
  //     return(str.replace("&nbsp;"," ").replace( /(<([^>]+)>)/ig, ''));
  //  }
  //    let str=removeTags(blog.content);

  // if(str.length > 150)
  //  str = str.substring(0,150)+".....";

  let a = "/blogsdetailspage/";
  return (
    <div className="cardholder2">
      <div className="card webinar-card-home">
        <img src={blog.imageUrl} alt="Blog " className="card-img-2" />
        <h3 className="card-heading">{blog.title.substring(0,36)+".."}</h3>

        <Link to="/webinars">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};
export default Slidercard;
