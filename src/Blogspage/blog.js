import "./Blogspage.css";
import { FaUserCircle } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Tokenlesssendpost from "../Backend/tokenlesssendpost";
import { useState } from "react";

const Blog = ({ blog }) => {

 let likedblogs=[];
  let test=JSON.parse(localStorage.getItem("likedblogs"));
  console.log(test,"HY")
  let check
  if(test!=null)
 {
  
  likedblogs=test;
  console.log("Not null",likedblogs,likedblogs.length,typeof(likedblogs)) ;
 }
 const [liked,setliked]=useState(likedblogs.includes(blog._id));
 const [likes,setlikes]=useState(blog.likes);
 

 

  const likeblog=async()=>{
    setliked(true);
     likedblogs.push(blog._id)
    setlikes(likes+1);
    localStorage.setItem("likedblogs",JSON.stringify(likedblogs))
    const { message: messagee } = await Tokenlesssendpost(
      `${window.name}like-blog/${blog._id}`,
      {}
    );
  }
  function checkBlog(id) {
    return id==blog._id;
  }
  const unlikeblog=async()=>{
    console.log(likedblogs.findIndex(checkBlog))
   setliked(false);
   likedblogs.splice(likedblogs.findIndex(checkBlog),1);
    setlikes(likes-1)
    const { message: messagee } = await Tokenlesssendpost(
      `${window.name}unlike-blog/${blog._id}`,
      {}
    );
    localStorage.setItem("likedblogs",JSON.stringify(likedblogs))
  }

  const htmlpart = blog.content;
  let a = "/blogsdetailspage/" + blog.slug;
  return (
    
      <div className="blogcard">
      <Link to={a}>
        <div className="blogcard-col1">
          <img src={blog.imageUrl} alt="Blog" className="blogcard-img" />
        </div>
        </Link>
        <div className="blogcard-col2">
          <div className="blogcard-col2-top">
            <div className="blogcard-col2-top-1">
              <FaUserCircle size="2.7em" className="blogcard-col2-top-1-icn" />
            </div>
            <div className="blogcard-col2-top-2">
              <p>{blog.author}</p>
              <p>{blog.date}</p>
            </div>
          </div>
          <h2>{blog.title}</h2>
          <div
            className="blogtext"
            dangerouslySetInnerHTML={{ __html: htmlpart }}
          ></div>
          <div className="line"></div>
          <div className="blogcard-col2-btm">
            <div className="blogcard-col2-btm-1">26 Views 0 Comments</div>
            <div className="blogcard-col2-btm-2">
              {liked?<AiFillHeart onClick={unlikeblog} color="red" size="2em" />:<AiOutlineHeart onClick={likeblog} color="red" size="2em" />} {likes}
              {
                //AiOutlineHeart for un liked
              }
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Blog;
