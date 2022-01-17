const PublishedCard = () => {
  return (
    <div className="cardholder2">
      <div className="openprogramcard">
        <img
          src={
            "http://res.cloudinary.com/dn3oddkar/image/upload/v1638959653/sijfr4evzdx1qvketnzd.jpg"
          }
          alt="Card Haeder"
          className="openprogramcard-img"
        />
        <div className="publishedcard-row">
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt=""
            className="publishedcard-user"
          />
          <div className="publishedcard-col">
            <p className="publishedcard-col-usertxt">Full Name user</p>
            <p className="publishedcard-col-subtxt">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
        <div className="openprogramcard-txetholder">
          <p className="openprogramcard-head">Heading</p>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sequi
            soluta officia, quasi facere id nihil dolore consectetur aliquid
            reprehenderit eius, aperiam, porro explicabo illum in quisquam totam
            eligendi consequatur!
          </div>
        </div>
        <button className="openprogramcard-btn publishCard-btn">
          View Publication
        </button>{" "}
        <button className="openprogramcard-btn publishCard-btn">
          KNOW MORE
        </button>
      </div>
    </div>
  );
};
export default PublishedCard;
