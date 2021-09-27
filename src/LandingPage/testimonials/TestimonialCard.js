import "./slidercourse.css";
const TestimonialCard = ({data}) => {
//   createdAt: "2021-09-27T07:16:32.294Z"
// image: "http://res.cloudinary.com/dn3oddkar/image/upload/v1632726991/mjnznwt7ea2g74c685iy.png"
// status: false
// studentId: "60d832e7c8365a408da92132"
// testimonial: "testest"
  return (
    <div className="testimonial">
      <img
        src={data.image}
        alt=""
        className="testimonial-img"
      />
      <p className="testimonial-text">
        {data.testimonial}
      </p>
      <p className="testimonial-author">Tim Cook</p>
    </div>
  );
};

export default TestimonialCard;
