import React from "react";
import "./Fitness.css";
import { FaLongArrowAltRight } from "react-icons/fa";
const Fitness = () => {
  return (
    <div className="fitness-main">
      <div className="fitness-first-card">
        <div className="finess-first-inner-card">
          <h1>
            Get More With{" "}
            <span
              style={{
                color: "var(--main-color)",
              }}
            >
              Low Cost
            </span>{" "}
            <br /> Advanced Features
          </h1>
          <p>
            Access Advanced Features Typically Found In Higher-Priced Options.
            Enjoy Increased Benefits Without The Hefly Price Tag. Maximizing
            Tour Investment.
          </p>
          <div>
            <span>Read More</span>
            <FaLongArrowAltRight />
          </div>
        </div>
        <img
          src="https://img.freepik.com/free-photo/achievement-muscle-gym-man-active_1139-707.jpg"
          alt="asdcv"
        />
      </div>
      <div className="fitness-first-card">
        <img
          src="https://st2.depositphotos.com/1518767/8186/i/450/depositphotos_81866598-stock-photo-muscular-couple-doing-abdominal-ball.jpg"
          alt="asdc"
        />
        <div className="finess-first-inner-card">
          <h1>
            Smart WorkOut{" "}
            <span
              style={{
                color: "var(--main-color)",
              }}
            >
              &
            </span>{" "}
            Health Metrices
          </h1>
          <p>
            Utilizes Technology And Data To Optimize Workout Routines For
            Efficiency And Effectivess. Offers Real-Time Feedback During
            Workouts To Improve Form,Intensity.
          </p>
          <div>
            <span>Read More</span>
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
