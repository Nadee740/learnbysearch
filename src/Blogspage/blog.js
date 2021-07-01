import "./Blogspage.css";
import { FaUserCircle } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Tokenlesssendpost from "../Backend/tokenlesssendpost";
import { useState } from "react";
import { useEffect } from "react";
import Researchpgms from "../Backend/Researchpgms";
import RotateCircleLoading from "react-loadingg/lib/RotateCircleLoading";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";

const Blog = ({ blog }) => {
  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace("&nbsp;", " ").replace(/(<([^>]+)>)/gi, "");
  }

  let str = removeTags(blog.content);

  if (str.length > 200) str = str.substring(0, 200) + ".....";
  let likedblogs = [];
  let test = JSON.parse(localStorage.getItem("likedblogs"));
  console.log(test, "HY");

  if (test != null) {
    likedblogs = test;
    console.log("Not null", likedblogs, likedblogs.length, typeof likedblogs);
  }
  const [liked, setliked] = useState(likedblogs.includes(blog._id));
  const [likes, setlikes] = useState(blog.likes);
  const [authdata, setauthdata] = useState();
  const [isLoading, setisLoading] = useState(true);

  useEffect(async () => {
    const { data: Datass } = await Researchpgms(
      `${window.name}author/${blog.author}`
    );
    setauthdata(Datass);
    console.log(Datass, "hu");
    setisLoading(false);
  }, []);

  const likeblog = async () => {
    setliked(true);
    likedblogs.push(blog._id);
    setlikes(likes + 1);
    localStorage.setItem("likedblogs", JSON.stringify(likedblogs));
    const { message: messagee } = await Tokenlesssendpost(
      `${window.name}like-blog/${blog._id}`,
      {}
    );
  };
  function checkBlog(id) {
    return id == blog._id;
  }
  const unlikeblog = async () => {
    console.log(likedblogs.findIndex(checkBlog));
    setliked(false);
    likedblogs.splice(likedblogs.findIndex(checkBlog), 1);
    setlikes(likes - 1);
    const { message: messagee } = await Tokenlesssendpost(
      `${window.name}unlike-blog/${blog._id}`,
      {}
    );
    localStorage.setItem("likedblogs", JSON.stringify(likedblogs));
  };

  const htmlpart = blog.content;
  let a = "/blogsdetailspage/" + blog.slug;
  return (
    <>
      {isLoading ? (
        <div className="isLoading">
          <SolarSystemLoading />
        </div>
      ) : (
        <div className="blogcard">
          <div className="blogcard-col1">
            <img src={blog.imageUrl} alt="Blog" className="blogcard-img" />
          </div>
          <div className="blogcard-col2">
            <>
              <div className="blogcard-col2-top">
                <div className="blogcard-col2-top-1">
                  <img
                    src={authdata[0].imageUrl}
                    alt="Author"
                    className="blogcard-col2-top-1-icn"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="blogcard-col2-top-2">
                  <p>{blog.author}</p>
                  <p>{blog.date}</p>
                </div>
              </div>
              <h2>{blog.title}</h2>

              <p>{str}</p>
              <Link to={a}>
                <p>Know More</p>
              </Link>

              <div className="line"></div>
            </>
            <div className="blogcard-col2-btm">
              {/* <div className="blogcard-col2-btm-1">26 Views 0 Comments</div> */}
              <div className="blogcard-col2-btm-2">
                {liked ? (
                  <AiFillHeart onClick={unlikeblog} color="red" size="2em" />
                ) : (
                  <AiOutlineHeart onClick={likeblog} color="red" size="2em" />
                )}{" "}
                {likes}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
