import React from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import "./Dynamic.css";
const Dynamic = () => {
  return (
    <div className="dynamic-main">
      <h1>
        Divine Into Our Dynamic <br />
        Fitness Experience
      </h1>
      <div className="dynamic-inner-card">
        <img
          src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2023-08/shy-girl-workout-tiktok-mc-230828-02-ab104e.jpg"
          alt=""
        />
        <div className="dymani-inner-to-inner-card">
          <div>
            <div>
              <FaHeartPulse />
            </div>
            <span>Heart Beat</span>
            <p>124 BPM</p>
          </div>
          <div>
            <div>
              <FaFire />
            </div>
            <span>Calores</span>
            <p>44411 Kcol</p>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/28054/pexels-photo-28054.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="program-first-posotional-card">
          <div>
            <span>
              <CgGym />
            </span>
            <p>Musicle Max</p>
          </div>
          <span>
            Maximize Muscle Growth Through Resistence Training. Protein
            Intake,and Adequate Rest.
          </span>
        </div>
        <div className="program-second-posotional-card">
          <div>
            <span>
              <CgGym />
            </span>
            <p>Core Crusher</p>
          </div>
          <span>
            An Intense Core-Focused Workout Animed At Strengthening And Toning
            Abdominal And Lower Bank Muscles.
          </span>
        </div>
        <div className="program-first-posoional-card-grap-image">
          <img
            src="https://media.istockphoto.com/id/1402430797/photo/business-3d-tablet-virtual-growth-arrow-financial-graph-on-digital-technology-strategy.jpg?s=612x612&w=0&k=20&c=OKYWpTE-G2OYQu7wKjfEiUZQWVnf7XVPuJNlj7X7tAI="
            alt=""
          />
        </div>
        <div className="program-second-posoional-card-grap-image">
          <img src="images/images-removebg-preview.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dynamic;
