import "./Blogspage.css";
import { AiOutlineSearch } from "react-icons/ai";
import Blog from "./blog";
import { useEffect, useState } from "react";
import Researchpgms from "../Backend/Researchpgms";
import RotateCircleLoading from "react-loadingg/lib/RotateCircleLoading";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { Helmet } from "react-helmet";

const BlogsPage = () => {
  const [blogsData, setblogData] = useState("");
  const [blogsfulldata, setblogsfulldata] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [SearchText, setsearchText] = useState("");

  ////////////////////get all blogs ///////////////////
  const getBlogs = async () => {
    setisLoading(true);
    const { data: Datass } = await Researchpgms(`${window.name}blog`);
    Datass.sort(function (a, b) {
      return Date.parse(b.date) - Date.parse(a.date);
    });
    setblogData(Datass);

    setblogsfulldata(Datass);
    setisLoading(false);
  };
  ///////////////////////////////////////////

  ////////funtion to perform search in page//////////////////////////

  const searchMethod = (val) => {
    let array = blogsfulldata;

    let arr = [];

    array.map((blog) => {
      if (
        blog.title.toLowerCase().includes(val.toLowerCase()) ||
        blog.author.toLowerCase().includes(val.toLowerCase())
      ) {
        arr.push(blog);
      } else {
      }
    });

    setblogData(arr);
  };
  //////////////////////////////////////////////////////

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Blogs</title>
      </Helmet>
      {isLoading ? (
        <div className="isLoading">
          <SolarSystemLoading />
        </div>
      ) : (
        <div className="blogpage">
          <div className="blogheader">
            <div className="blogheader-col1">
              <img
                src="/images/blog.svg"
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
            <input
              type="text"
              className="searchbar"
              placeholder="Search Blogs"
              value={SearchText}
              onChange={(e) => {
                setsearchText(e.target.value);
                searchMethod(e.target.value);
              }}
            />
            <AiOutlineSearch size="2em" className="searchbar-icn" />
          </div>
          <div className="blogholder">
            {blogsData.map((blog, index) => (
              <Blog blog={blog} key={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BlogsPage;
