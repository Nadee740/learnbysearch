import "./OpenProgrammes.css";
import { useState } from "react";
import OpenprogrammesModel from "../ProgaramesModel/OpenprogrammesModel";
import { useParams } from "react-router-dom";

function Openprogramcard({ blog }) {
  const [visible, setvisible] = useState(false);
  let a = "/openprogrammespage/" + blog._id;
  console.log(a);
  const closeModal = () => {
    setvisible(false);
  };

  const htmlpart = blog.description;
  return (
    <>
      <div className="openprogramcard">
        <img
          src={blog.imageUrl}
          alt="Card Haeder"
          className="openprogramcard-img"
        />
        <p className="openprogramcard-head">{blog.title}</p>
        <div dangerouslySetInnerHTML={{ __html: htmlpart }}></div>
        <button
          onClick={() => {
            window.location = a;
          }}
          className="openprogramcard-btn"
        >
          KNOW MORE
        </button>
      </div>
    </>
  );
}

export default Openprogramcard;
