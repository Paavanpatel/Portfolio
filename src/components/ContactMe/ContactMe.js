import React, { useState, useCallback, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const [invalidEmail, setInvalidEmailMessage] = useState("");
  // const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // if (!formData.name || !formData.contact || !formData.message) {
      //   setError("I want to get in touch with you, so please make sure to fill in all the details.");
      // } else
      if (!validateEmail(formData.contact)) {
        setInvalidEmailMessage("Invalid email entered. A valid email should look like john@example.com.");
      } else {
        // setError("");
        emailjs.sendForm("service_urtylhs", "template_1b4v0if", formRef.current, "kHPkIaIHFPD6pBRa9").then(
          (result) => {
            console.log(result.text);
            setFormData({ name: "", contact: "", message: "" });
            setSuccessMessage("Thank you for getting in touch!");
          },
          (error) => {
            console.log(error.text);
            setErrorMessage("Whoops! Something went wrong. Please try again later.");
          }
        );
      }
    },
    [formData]
  );

  return (
    <section className="contactMe" id="footer">
      <div className="contact-me-body">
        <div className="card">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-field">
              <h1>Contact Me</h1>
            </div>
            {successMessage && <div className="success-message">{successMessage}</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="form-field">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>
            <div className="form-field">
              <input
                type="email"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Email ID"
                required
              />
              {invalidEmail && <div className="statusMessage">{invalidEmail}</div>}
            </div>

            <div className="form-field">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                maxLength="250"
                placeholder="Message"
                required
              />
            </div>
            <div className="form-field">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
