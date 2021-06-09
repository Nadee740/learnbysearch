
import { useState } from "react";
import { Link } from "react-router-dom";
import SendPost from "../Backend/Sendpost";
import React, { Component } from "react";
import Modal from "react-awesome-modal";

function OpenprogrammesModel(props) {
    return props.visible? (
        <div>
            <section className="popupscreen">
          <Modal
            visible={props.visible}
            width="400"
            height="300"
            effect="fadeInUp"
            onClickAway={props.closeModal}
          >
            <div className="popup">
              <h1>LEARN BY RESEARCH</h1>
              <p>
                PLEASE VERIFY YOUR EMAIL .YOUR ARE ONE STEP AHEAD OF CREATING
                YOUR ACCOUNT...
              </p>
              <button onClick={props.closeModal}>
                Close
              </button>
            </div>
          </Modal>
        </section>
        </div>
    ):""
}

export default OpenprogrammesModel;
