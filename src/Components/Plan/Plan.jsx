import React from "react";
import "./Plan.css";
const Plan = () => {
  return (
    <div className="plan-main">
      <h1>Choose Your Pricing Plan</h1>
      <div className="plan-card">
        <div className="plan-single-card">
          <span>Standard Plan</span>
          <h1>$40</h1>
          <span>Unlimited gym Access</span>
          <span>2x Fitness Consultant</span>
          <span>Nutrition Tracking</span>
          <span>3 days per week</span>
          <button>Join Now</button>
        </div>
        <div className="plan-single-card">
          <span>Premium Plan</span>
          <h1>$80</h1>
          <span>Unspanmited gym Access</span>
          <span>7x Fitness Consultant</span>
          <span>Nutrition Tracking</span>
          <span>Gym Card</span>
          <span>Personal Trainer</span>
          <button>Join Now</button>
        </div>
        <div className="plan-single-card">
          <span>Advanced Plan</span>
          <h1>$100</h1>
          <span>Unspanmited gym Access</span>
          <span>10x Fitness Consultant</span>
          <span>Nutrition Tracking</span>
          <span>Gym Card</span>
          <span>All Program</span>
          <button>Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
