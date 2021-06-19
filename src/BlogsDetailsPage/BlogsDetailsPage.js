import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Researchpgms from "../Backend/Researchpgms";
import Footer from "../LandingPage/footer/footer";
import "./BlogsDetailsPage.css";
function BlogsDetailsPage({ blog }) {
  const [blogsData, setblogData] = useState("");
  const [authData, setauthData] = useState("");

  const [isLoading, setisLoading] = useState(true);
  const [SearchText, setsearchText] = useState("");
  let { id } = useParams();
  const htmlpart = blogsData.content;

  const getBlogs = async () => {
    setisLoading(true);
    const { data: Datass } = await Researchpgms(`${window.name}blog/${id}`);
    setblogData(Datass);
    const { data: authotDatass } = await Researchpgms(`${window.name}author/${Datass.author}`);
    setauthData(authotDatass);
    setisLoading(false);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="isLoading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <div className="blogdetailpage">
            <div className="blogdetailpage-img">
              <img
                src={blogsData.imageUrl}
                alt="Bg"
                className="blogdetailpage-img2"
              />

              <div className="blogdetailpage-head">
                <div className="blogdetailpage-top">
                  <>{blogsData.title}</>

                  <p>
                    Author Name:{blogsData.author}
                    <br></br>
                    <i>{blogsData.date}</i>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="blogdetailpage-text "
              dangerouslySetInnerHTML={{ __html: htmlpart }}
            ></div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default BlogsDetailsPage;
