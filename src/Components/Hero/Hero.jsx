import React from "react";
import { GiBee } from "react-icons/gi";
// import { FaForumbee } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import "./Hero.css";
import { motion } from "framer-motion";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="hero-first">
        <div className="the-best-add">
          <motion.div
            initial={{ left: mobile ? "148px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        <h1 className="hero-first-first-heading">
          Build your <span>body</span>
        </h1>
        <h1 className="hero-first-second-heading">
          strong
          <span>
            <GiBee size={30} />
          </span>
        </h1>
        <h1 className="hero-first-third-heading">
          and <span>fit</span> with us
        </h1>
        <p>
          Being physically active can improve your brain health, help manage
          weight. reduce the risk of disease. strengthen bones and muscles, and
          improve your ability to do everyday activities. Adults who sit less
          and do any amount of moderate-to-vigorous physical activity gain some
          health benegit.
        </p>
        <button>Get Started</button>
      </div>
      <div className="hero-second">
        <img src="images/pexels-scottwebb-136405.jpg" alt="" />
        <div>
          {/* <img src="images/pexels-scottwebb-136405.jpg" alt="" /> */}

          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/029/640/313/small/a-gym-girl-doing-workout-in-gym-generative-ai-photo.jpg"
            alt=""
          />
          <img src="images/pexels-anush-1229356.jpg" alt="" />
        </div>
        <FaRegStarHalfStroke size={30} className="hero-right-first-icon" />
        <CgGym size={30} className="hero-right-second-icon" />
      </div>
    </div>
  );
};

export default Hero;
