import React from "react";
import "./Plan.css";
const Plan = () => {
  return (
    <div id="plans" className="plan-main">
      <h1>Choose Your Pricing Plan</h1>
      <div className="plan-card">
        <div className="plan-single-card">
          <span>3 Months Plan</span>
          <h3>1. General Membership</h3>
          <h2>&nbsp;&nbsp;6999 /-</h2>
          <h3>2. Personal Training</h3>
          <span>&nbsp;&nbsp;2.1 Alternate Days</span>
          <h2>&nbsp;&nbsp;20000 /-</h2>
          <span>&nbsp;&nbsp;2.2 Regular Days</span>
          <h2>&nbsp;&nbsp;35000 /-</h2>
          {/* <h1>6999</h1>
          <span>Unlimited gym Access</span>
          <span>2x Fitness Consultant</span>
          <span>Nutrition Tracking</span>
          <span>3 days per week</span>
          <button>Join Now</button> */}
        </div>
        <div className="plan-single-card">
          <span>6 Months Plan</span>
          <h3>1. General Membership</h3>
          <h2>&nbsp;&nbsp;9999 /-</h2>
          <h3>2. Personal Training</h3>
          <span>&nbsp;&nbsp;2.1 Alternate Days</span>
          <h2>&nbsp;&nbsp;35000 /-</h2>
          <span>&nbsp;&nbsp;2.2 Regular Days</span>
          <h2>&nbsp;&nbsp;70000 /-</h2>
        </div>
        <div className="plan-single-card">
          <span>12 Months Plan</span>
          <h3>1. General Membership</h3>
          <h2>&nbsp;&nbsp;16999 /-</h2>
          <h3>2. Personal Training</h3>
          <span>&nbsp;&nbsp;2.1 Alternate Days</span>
          <h2>&nbsp;&nbsp;60000 /-</h2>
          <span>&nbsp;&nbsp;2.2 Regular Days</span>
          <h2>&nbsp;&nbsp;95000 /-</h2>
        </div>
      </div>
    </div>
  );
};

export default Plan;
