import "./Blogspage.css";
import { FaUserCircle } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const htmlpart = blog.content;
  let a = "/blogsdetailspage/" + blog.slug;
  return (
    <div className="blogcard">
      <div className="blogcard-col1">
        <img src={blog.imageUrl} alt="Blog" className="blogcard-img" />
      </div>
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
          className="blogtext blogtext2"
          dangerouslySetInnerHTML={{ __html: htmlpart }}
        ></div>
        <div className="line"></div>
        <div className="blogcard-col2-btm">
          <div className="blogcard-col2-btm-1">26 Views 0 Comments</div>
          <div className="blogcard-col2-btm-2">
            <AiFillHeart color="red" size="2em" /> 100
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
