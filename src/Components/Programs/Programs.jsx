import React from "react";
import "./Programs.css";
import { IoMdMan } from "react-icons/io";
import { CgGym } from "react-icons/cg";
import { TbGymnastics } from "react-icons/tb";
import { FaLongArrowAltRight } from "react-icons/fa";
const Programs = () => {
  return (
    <div id="programes" className="programs-main">
      <h1>Explore Your Programs</h1>
      <div className="programs-inner-main-card">
        <div className="programs-inside-single-card">
          <div className="programs-inside-single-card-first-item">
            <span>
              <IoMdMan size={30} />
            </span>
            <span>Cardio Strength</span>
          </div>
          <div>
            <span>
              Combine cardiovascular exercise with strength training for a
              comprehensive workout that boosts both heart health and muscle
              strength.
            </span>
            <button>
              Get start{" "}
              <span>
                <FaLongArrowAltRight />
              </span>
            </button>
          </div>
        </div>
        <div className="programs-inside-single-card">
          <div className="programs-inside-single-card-first-item">
            <span>
              <CgGym size={30} />
            </span>
            <span>Muscle Gain</span>
          </div>
          <div>
            <span>
              Build muscle by engaging in strength training excercise and
              consuming adequate protein to support muscle growth and repair
            </span>
            <button>
              Get start{" "}
              <span>
                <FaLongArrowAltRight />
              </span>
            </button>
          </div>
        </div>
        <div className="programs-inside-single-card">
          <div className="programs-inside-single-card-first-item">
            <span>
              <TbGymnastics size={30} />
            </span>
            <span>Fat Lose</span>
          </div>
          <div>
            <span>
              reduce body for by burning more colories than you consume throught
              diet and excercise
            </span>
            <button>
              Get start{" "}
              <span>
                <FaLongArrowAltRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
