import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { useParams } from "react-router-dom";
import Researchpgms from "../Backend/Researchpgms";
import Footer from "../LandingPage/footer/footer";
import { Helmet } from "react-helmet";
import "./BlogsDetailsPage.css";
function BlogsDetailsPage({ blog }) {
  const [blogsData, setblogData] = useState("");
 const [isLoading, setisLoading] = useState(true);

  let { slug } = useParams();
  const htmlpart = blogsData.content;
  ////////////////get the details of the blog////////////////
  const getBlogs = async () => {
    setisLoading(true);
    const { data} = await Researchpgms(`${window.name}blog/${slug}`);

    setblogData(data);

    setisLoading(false);
  };
  ///////////////////////////////////////////////

  useEffect(() => {
    getBlogs();
  }, []);

  if (isLoading)
    return (
      <div className="isLoading">
        <SolarSystemLoading />
      </div>
    );
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{blogsData.title}</title>
      </Helmet>
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
     
    </>
  );
}

export default BlogsDetailsPage;
