import React, { useEffect, useState } from "react";
import "./ContactModal.css";
import emailjs from "@emailjs/browser";
import PopUp from "./PopUp";
import { AiFillCloseCircle } from "react-icons/ai";
import Bounce from "react-reveal/Bounce";

export const ContactModal = (props) => {
  const initialValues = { name: "", user_email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formHTML, setFormHTML] = useState(null);
  const [popUpMessage, setPopUpMessage] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.name.trim()) {
      errors.name = "Name is required!";
    }
    if (!values.user_email.match(regex)) {
      errors.user_email = "Email is required!";
    }

    if (!values.message.trim()) {
      errors.message = "Message is required!";
    }
    return errors;
  };

  const sendEmailHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setFormHTML(e.target);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      emailjs
        .sendForm(
          "service_r1uw7b9",
          "template_esn8s0r",
          formHTML,
          "BZnuz8f21ix46_2Pp"
        )
        .then((res) => {
          console.log(res);
          setPopUpMessage("Successfully sent the your message. \nThank you");
        })
        .catch((err) => {
          console.log(err.status);
          setPopUpMessage(
            'Something went wrong. Please send your message to "mohsin23599@gmail.com"'
          );
        });
      setIsSubmit(false);
      setFormValues(initialValues);
      setShowPopUp(true);
    }
  }, [formErrors]);
  useEffect(() => {
    if (showPopUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showPopUp]);

  return (
    <Bounce bottom collapse when={props.openContactModal}>
      <div className="Contact-modal">
        <AiFillCloseCircle
          className="close-icon"
          size={30}
          onClick={() => {
            props.setOpenContactModal(false);
          }}
        />
        <h1>Contact Me</h1>
        <form className="Contact-modal-form" onSubmit={sendEmailHandler}>
          <label className="Contact-modal-label">Name</label>
          <input
            type={"text"}
            name="name"
            value={formValues.name}
            onChange={handleChanges}
          />
          {formErrors.name && <p>{formErrors.name}</p>}
          <label className="Contact-modal-label">Email</label>
          <input
            type={"text"}
            name="user_email"
            value={formValues.user_email}
            onChange={handleChanges}
          />
          {formErrors.user_email && <p>{formErrors.user_email}</p>}

          <label className="Contact-modal-label">Message</label>
          <textarea
            name="message"
            rows={4}
            className="Contact-modal-message"
            placeholder="Send Hi :)"
            value={formValues.message}
            onChange={handleChanges}
          />
          {formErrors.message && <p>{formErrors.message}</p>}

          <input
            type={"submit"}
            name="send"
            className="Contact-modal-submit"
            value={"Send"}
          />
        </form>
        <PopUp
          message={popUpMessage}
          showPopUp={showPopUp}
          setShowPopUp={setShowPopUp}
        ></PopUp>
      </div>
    </Bounce>
  );
};
