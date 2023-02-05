import React, { useState, useCallback } from "react";
import "./ContactMe.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(formData);
      // Add logic to submit form data to a server or API
    },
    [formData]
  );

  return (
    <section className="contactMe" id="footer">
      <div className="contact-me-body">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <h1>Contact Me</h1>
            </div>
            <div className="form-field">
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            </div>
            <div className="form-field">
              <input
                type="email"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Email ID"
              />
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
