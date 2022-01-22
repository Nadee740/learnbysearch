import "./CompledRP.css";
function CompletedRPCard({ blog }) {
  console.log(blog)
  const htmlpart = blog.description;
  return (
    <>
      <div
        className="openprogramcard"
        onClick={() => {
          window.location ="/completedrp/"+blog.slug;
        }}
      >
        <img
          src={blog.imageUrl}
          alt="Card Haeder"
          className="openprogramcard-img"
        />
        <p className="duedate">Due on {blog.Deadline}</p>
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
            window.location = "/completedrp/"+blog.slug;
          }}
          className="openprogramcard-btn"
        >
          View 
        </button>
      </div>
    </>
  );
}

export default CompletedRPCard;
