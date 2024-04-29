import React from "react";
import "./Contact.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
const Contact = () => {
  return (
    <div id="contact" className="contact-main">
      <h1>Say HELLO</h1>
      <div className="contact-inside-second-card">
        <div>
          <p>Wnat to start a gym witnus</p>
          <p>Lets talk!</p>
        </div>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="message" rows={5}></textarea>
          <button>Submit</button>
        </form>
      </div>
      <hr color="lightslategrey" />
      <div className="contact-company-details">
        <div>
          <span>abcde@example.com</span>
          <span>1234567890</span>
        </div>
        <div className="contact-icons-card">
          <FaInstagram />
          <FaFacebookF />
        </div>
      </div>
    </div>
  );
};

export default Contact;
