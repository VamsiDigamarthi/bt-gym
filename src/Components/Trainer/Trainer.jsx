import React from "react";
import "./Trainer.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
const Trainer = () => {
  return (
    <div className="trainer-main">
      <div className="trainer-inner-first-card">
        <h2>GET TO KNOW OUR TEAM OF EXPERIENCS TRAINERS</h2>
        <div className="trainer-inner-first-icon-card">
          <div>
            <FaArrowLeft />
          </div>
          <div>
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="trainer-image-card">
        <div>
          <img
            src="https://img.freepik.com/free-photo/young-adult-doing-indoor-sport-gym_23-2149205542.jpg"
            alt=""
          />
          <h2>First Name</h2>
        </div>
        <div>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-trainer-in-gym-royalty-free-image-1584723855.jpg"
            alt=""
          />
          <h2>second Name</h2>
        </div>
        <div>
          <img
            src="https://ici.net.au/blog/wp-content/uploads/2019/04/BecomePersonalTrainer-1024x683.jpg"
            alt=""
          />
          <h2>Third Name</h2>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
