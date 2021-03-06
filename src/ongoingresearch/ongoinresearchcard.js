import { useState } from "react";

import { useParams } from "react-router-dom";

function Ongoingresearchcard({ blog }) {
  const [visible, setvisible] = useState(false);
  let a = "/ongoingresearchpage/" + blog.slug;

  const closeModal = () => {
    setvisible(false);
  };

  const htmlpart = blog.description;
  return (
    <>
      <div
        className="openprogramcard"
        onClick={() => {
          window.location = a;
        }}
      >
        <img
          src={blog.imageUrl}
          alt="Card Haeder"
          className="openprogramcard-img"
        />
        <p className="duedate">Application closed on {blog.Deadline}</p>
        <div className="openprogramcard-txetholder">
          {blog.isSponsered ? (
            <div className="course-sponser-small sponsered ">Sponsored</div>
          ) : (
            <div className="course-sponser-small non-sponsered ">
              Non-Sponsored
            </div>
          )}
          <p className="openprogramcard-head">{blog.title}</p>
          <div dangerouslySetInnerHTML={{ __html: htmlpart }}></div>
        </div>
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

export default Ongoingresearchcard;
