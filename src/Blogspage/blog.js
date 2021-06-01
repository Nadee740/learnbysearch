import "./Blogspage.css";
import { FaUserCircle } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
const Blog = () => {
  return (
    <div className="blogcard">
      <div className="blogcard-col1">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80"
          alt="Blog"
          className="blogcard-img"
        />
      </div>
      <div className="blogcard-col2">
        <div className="blogcard-col2-top">
          <div className="blogcard-col2-top-1">
            <FaUserCircle size="2.7em" className="blogcard-col2-top-1-icn" />
          </div>
          <div className="blogcard-col2-top-2">
            <p>Name</p>
            <p>Time</p>
          </div>
        </div>
        <h2>The Art Of Self Learning</h2>
        <p>
          LearnByResearch provides a platform for students to become the best
          independent researchers who wish to pursue...
        </p>
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
