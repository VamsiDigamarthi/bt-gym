import React from "react";
import "./Contact.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
const Contact = () => {
  return (
    <footer id="contact" className="contact-main">
      <h1>Say HELLO</h1>
      <div className="contact-inside-second-card">
        <div>
          <p>Wanna start your fitness journey with us!</p>
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
          <span>enquiry@beefit.in</span>
          <span>9989999804</span>
        </div>
        <div className="contact-icons-card">
          <a
            href="https://www.facebook.com/people/Bee-Fit-Gym/61558616204405/"
            target="__black"
          >
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/beefitgym_/" target="__black">
            <FaInstagram />
          </a>
          <a
            href="https://in.linkedin.com/company/bee-fit-gym"
            target="__black"
          >
            <CiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
