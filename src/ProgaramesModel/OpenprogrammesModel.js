import { useState } from "react";
import { Link } from "react-router-dom";
import SendPost from "../Backend/Sendpost";
import React, { Component } from "react";
import Modal from "react-awesome-modal";
import "./OpenprogrammesModel.css";
import { IoCloseCircleSharp } from "react-icons/io5";
function OpenprogrammesModel(props) {
  return props.visible ? (
    <div>
      <section className="popupscreen">
        <Modal
          visible={props.visible}
          width="700"
          effect="fadeInUp"
          onClickAway={props.closeModal}
        >
          <div className="popup popup2">
            <img
              src="https://images.unsplash.com/photo-1622890276840-8eabe803e2bb"
              alt="Card Haeder"
              className="openprogramcard-img"
            />
            <p className="openprogramcard-head">Program 1</p>
            <p className="openprogramcard-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur sunt quaerat dignissimos, maxime sapiente, suscipit
              harum excepturi maiores explicabo, veniam hic corporis deserunt
              commodi voluptates voluptatem repudiandae laboriosam modi cum!
              harum excepturi maiores explicabo, veniam hic corporis deserunt
              commodi voluptates voluptatem repudiandae laboriosam modi cum!
              harum excepturi maiores explicabo, veniam hic corporis deserunt
              commodi voluptates voluptatem repudiandae laboriosam modi cum!
            </p>
            <button className="popup-closebtn" onClick={props.closeModal}>
              <IoCloseCircleSharp size="4em" color="rgba(129, 129, 129, 0.8)" />
            </button>
          </div>
        </Modal>
      </section>
    </div>
  ) : (
    ""
  );
}

export default OpenprogrammesModel;
