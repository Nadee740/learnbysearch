import React from "react";
import "./slider.css";
const Slidercard = () => {
  return (
    <div className="cardholder2">
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80"
          alt="Blog "
          className="card-img"
        />
        <h3>The Art of Self Learning</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          iure adipisci nostrum eum ducimus minima et numquam, ab quibusdam
          saepe........
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
};
export default Slidercard;
