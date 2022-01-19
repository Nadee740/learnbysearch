import { useEffect } from "react";
import Openprogramcard from "./openprogramescard";
import "./OpenProgrammes.css";
import Researchpgms from "../Backend/Researchpgms";
import { useState } from "react";
import SolarSystemLoading from "react-loadingg/lib/SolarSystemLoading";
import { Helmet } from "react-helmet";
import Footer from "../LandingPage/footer/footer";

const OpenProgrammes = () => {
  const [blogsData, setblogData] = useState("");
  const [isLoading, setisLoading] = useState(true);

  const getRPS = async () => {
    setisLoading(true);
    const { data } = await Researchpgms(`${window.name}research-programs`);
    setblogData(data);
    setisLoading(false);
  };

  useEffect(async () => {
    getRPS();
  }, []);
  if (isLoading) {
    return (
      <div className="isLoading">
        <SolarSystemLoading />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Programs || LearnByResearch</title>
      </Helmet>

      <div className="openprograms">
        <h2>Upcoming Research</h2>
        <div className="cardholder">
          {blogsData.length >= 1
            ? blogsData.map((blog, index) => {
                return blog.applicationStatus ? (
                  <Openprogramcard blog={blog} key={index} />
                ) : (
                  ""
                );
              })
            : setisLoading(true)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OpenProgrammes;
