import React from "react";
import Footer from "../LandingPage/footer/footer";
import "./BlogsDetailsPage.css";
function BlogsDetailsPage() {
  return (
    <div>
      <div className="blogdetailpage">
        <div className="blogdetailpage-img">
          <div className="blogdetailpage-head">
            <div className="blogdetailpage-top">
              <>Blog Heading</>

              <p>
                Author Name:Tim Cook<br></br>
                <i>23 September 2021</i>
              </p>
            </div>
          </div>
        </div>
        <p className="blogdetailpage-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          recusandae excepturi dolorem cupiditate. Fugit nam esse sapiente,
          optio, dignissimos minus nulla saepe ea minima aspernatur ex
          assumenda! Quod, debitis ipsum?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sit recusandae excepturi dolorem cupiditate. Fugit
          nam esse sapiente, optio, dignissimos minus nulla saepe ea minima
          aspernatur ex assumenda! Quod, debitis ipsum?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Sit recusandae excepturi dolorem
          cupiditate. Fugit nam esse sapiente, optio, dignissimos minus nulla
          saepe ea minima aspernatur ex assumenda! Quod, debitis ipsum?
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sit recusandae excepturi
          dolorem cupiditate. Fugit nam esse sapiente, optio, dignissimos minus
          nulla saepe ea minima aspernatur ex assumenda! Quod, debitis
          ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          recusandae excepturi dolorem cupiditate. Fugit nam esse sapiente,
          optio, dignissimos minus nulla saepe ea minima aspernatur ex
          assumenda! Quod, debitis ipsum?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sit recusandae excepturi dolorem cupiditate. Fugit
          nam esse sapiente, optio, dignissimos minus nulla saepe ea minima
          aspernatur ex assumenda! Quod, debitis ipsum?
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default BlogsDetailsPage;
