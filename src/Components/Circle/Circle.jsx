import React from "react";
import "./Circle.css";
const Circle = () => {
  return (
    <div className="circle-main">
      <div className="circle-image-card">
        <img
          src="https://img.freepik.com/premium-photo/fitness-girl-with-beautiful-smile-posing-gym-sport-life-ai-generative_172415-500.jpg"
          alt=""
        />
      </div>
      <div className="circle-first-card">
        <h2>Warm Up</h2>
        <span className="circl-first-card-inside-span">
          Begin with 5-10 minutes of gentle cordio like working. jogging, or
          cycling to ward up and get your bllod flowing.
        </span>
        <div className="circle-first-card-inside-number-card">1</div>
      </div>
      <div className="circle-second-card">
        <h2>Cardio</h2>
        <span className="circl-first-card-inside-span">
          Perform 20-30 minutes of moderate to vigorous oerobic activity such as
          running. cycling swimming, or dancing.
        </span>
        <div className="circle-second-card-inside-number-card">2</div>
      </div>
      {/* third */}
      <div className="circle-third-card">
        <h2>Strength</h2>
        <span className="circl-first-card-inside-span">
          Perform 20-30 minutes of moderate to vigorous oerobic activity such as
          running. cycling swimming, or dancing.
        </span>
        <div className="circle-third-card-inside-number-card">3</div>
      </div>
      {/* fouth */}
      <div className="circle-fouth-card">
        <h2>Progression</h2>
        <span className="circl-first-card-inside-span">
          Grodually increase the intensity, duration, or resistance of your
          workout as your fitness level impreves.
        </span>
        <div className="circle-fouth-card-inside-number-card">4</div>
      </div>
      {/* five */}
      <div className="circle-five-card">
        <h2>Rest</h2>
        <span className="circl-first-card-inside-span">
          Get adequate sleep, stay hydrated, and eat a balanced diet to support
          your fitness goals and recovery.
        </span>
        <div className="circle-five-card-inside-number-card">5</div>
      </div>
      <div className="circle-six-card">
        <h2>Cool Down</h2>
        <span className="circl-first-card-inside-span">
          Conclude with 5-10 minutes of light activity like walking or gentle
          stretching to cool down and aid recovery.
        </span>
        <div className="circle-six-card-inside-number-card">6</div>
      </div>
    </div>
  );
};

export default Circle;
