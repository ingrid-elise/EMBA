import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Form.css";
import Modal from "./Modal";

function sentForm() {
  console.log("form sent");
}

function Form() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_60qm9kg",
        "template_j7h2stf",
        e.target,
        "user_sCz3SSuI6Na3x7QCaQuV1"
      )
      .then(
        (result) => {
          // alert("success");
          sentForm();
          // console.log(result.text);
        },
        (error) => {
          alert("error");
          // console.log(error.text);
        }
      );
  }

  return (
    <div className="formContainer">
      <form className="contact-form" onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          autoComplete="off"
          required
        />
        <div className="shortLineBelow"></div>
        <input
          type="text"
          name="contact_number"
          placeholder="Phone Number"
          autoComplete="off"
          required
        />
        <div className="shortLineBelow"></div>
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          autoComplete="off"
          required
        />
        <div className="shortLineBelow"></div>
        <textarea
          name="message"
          placeholder="Message"
          autoComplete="off"
          required
        />
        <div className="shortLineBelow"></div>
        <div className="buttonDiv">
          <input
            type="submit"
            value="Send"
            className="contactUsButton"
            onClick={openModal}
          ></input>
          {showModal ? <Modal setShowModal={setShowModal} /> : null}
        </div>
      </form>
    </div>
  );
}

export default Form;
