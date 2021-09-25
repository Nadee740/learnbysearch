import "./slidercourse.css";
const TestimonialCard = () => {
  return (
    <div className="testimonial">
      <img
        src="https://randomuser.me/api/portraits/men/7.jpg"
        alt=""
        className="testimonial-img"
      />
      <p className="testimonial-text">
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio facere
        voluptate accusamus modi in, debitis fuga quo qui laboriosam mollitia
        quasi cum officiis, labore rerum voluptatem quibusdam, vero illo
        explicabo.
      </p>
      <p className="testimonial-author">Tim Cook</p>
    </div>
  );
};

export default TestimonialCard;
