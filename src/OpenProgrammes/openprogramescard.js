import "./OpenProgrammes.css";
import { useState } from "react";

import { useParams } from "react-router-dom";

function Openprogramcard({ blog }) {
  console.log(blog)
  const [visible, setvisible] = useState(false);
  let a = "/openprogrammespage/" + blog.slug;

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
        <p className="duedate">Due on {blog.Deadline}</p>
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
