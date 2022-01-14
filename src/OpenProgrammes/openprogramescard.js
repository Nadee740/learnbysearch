import "./OpenProgrammes.css";
function Openprogramcard({ blog }) {
 
  let a = "/openprogrammespage/" + blog.slug;
  const htmlpart = blog.description;
  return (
    <>
      <div className="openprogramcard"   onClick={() => {
            window.location = a;
          }}>
        <img
          src={blog.imageUrl}
          alt="Card Haeder"
          className="openprogramcard-img"
        />
        <p className="duedate">Due on {blog.Deadline}</p>
        <div className="openprogramcard-txetholder">
          
          {blog.isSponsered?<div className="course-sponser-small sponsered ">
            Sponsered
          </div>:<div className="course-sponser-small non-sponsered ">
            Non-Sponsered
          </div>

          }
            {/* <div className="course-sponser-small non-sponsered ">
            Non-Sponsered
          </div> */}
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

export default Openprogramcard;
