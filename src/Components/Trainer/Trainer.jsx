import React from "react";
import "./Trainer.css";
// import { FaArrowRight } from "react-icons/fa6";
// import { FaArrowLeft } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Trainer = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="trainer-main">
      <div className="trainer-inner-first-card">
        <h1>GET TO KNOW OUR EXPERIENCED TRAINERS</h1>
        {/* <div className="trainer-inner-first-icon-card">
          <div>
            <FaArrowLeft />
          </div>
          <div>
            <FaArrowRight />
          </div>
        </div> */}
      </div>
      {/* <div className="trainer-image-card"> */}
      <Slider className="trainer-image-card" {...settings}>
        <div id="first-slider">
          <img src="images/20240503_160340.jpg" alt="sdv" />
          <h2>Bhalu More</h2>
        </div>
        <div id="first-slider">
          <img src="images/20240503_160340.jpg" alt="gfds" />
          <h2>Bhalu More</h2>
        </div>
        {/* <div id="first-slider">
          <img
            src="https://ici.net.au/blog/wp-content/uploads/2019/04/BecomePersonalTrainer-1024x683.jpg"
            alt=""
          />
          <h2>First Name</h2>
        </div> */}
        {/* <div id="first-slider">
          {" "}
          <img
            src="https://ici.net.au/blog/wp-content/uploads/2019/04/BecomePersonalTrainer-1024x683.jpg"
            alt=""
          />
          <h2>Third Name</h2>
        </div> */}
        {/* <div>
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
        </div> */}
      </Slider>
      {/* </div> */}
    </div>
  );
};

export default Trainer;
