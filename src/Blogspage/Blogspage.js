import "./Blogspage.css";
import { AiOutlineSearch } from "react-icons/ai";
import Blog from "./blog";
const BlogsPage = () => {
  return (
    <div className="blogpage">
      <div className="blogheader">
        <div className="blogheader-col1">
          <img
            src="/images/change.png"
            alt="Blog Section"
            className="blogheader-img"
          />
        </div>
        <div className="blogheader-col2">
          <h2>Blogs</h2>
          <p className="blogheader-text">
            Blogging is a conversation , not a code
          </p>
        </div>
      </div>
      <div className="searchbarholder">
        <input type="text" className="searchbar" placeholder="Search Blogs" />
        <AiOutlineSearch size="2em" className="searchbar-icn" />
      </div>
      <div className="blogholder">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};

export default BlogsPage;
