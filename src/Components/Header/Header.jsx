// import React from "react";
// import "./Header.css";
// const Header = () => {
//   return (
//     <header className="header-main">
//       <img src="images/bee fit logo1.png" alt="" />
//       <section className="header-desk-link-card">
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#programes">Program</a>
//         <a href="#plans">Pricing</a>
//         <a href="#contact">Contact Us</a>
//       </section>
//       {/* mobile */}
//       <div className="header-mobile-link-card">
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#programes">Program</a>
//         <a href="#plans">Pricing</a>
//         <a href="#contact">Contact Us</a>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import "./Header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
const Header = () => {
  const [showMenuItems, setShowMenuItems] = useState(false);

  return (
    <div
      style={{
        backgroundColor: showMenuItems && "var(--main-text-color)",
        color: showMenuItems && "white",
      }}
      className="header_main"
    >
      <img src="images/bee fit logo1.png" alt="logo-img" />
      <div className="header-inside-card">
        <Link onClick={() => setShowMenuItems(false)} to="/">
          Home
        </Link>
        <Link onClick={() => setShowMenuItems(false)} to="/about">
          About
        </Link>
        <Link
          onClick={() => setShowMenuItems(false)}
          to="/programs"
          href="#programes"
        >
          Program
        </Link>
        <Link onClick={() => setShowMenuItems(false)} to="/pricing">
          Pricing
        </Link>
        <Link onClick={() => setShowMenuItems(false)} to="/trainers">
          Trainers
        </Link>
      </div>
      {/* Mobile view */}
      <div className="mobile-header-card">
        {showMenuItems ? (
          <RxCross1 size={20} onClick={() => setShowMenuItems(false)} />
        ) : (
          <RxHamburgerMenu size={20} onClick={() => setShowMenuItems(true)} />
        )}

        {showMenuItems && (
          <div className="mobile-links-card">
            <Link onClick={() => setShowMenuItems(false)} to="/">
              Home
            </Link>
            <Link onClick={() => setShowMenuItems(false)} to="/about">
              About
            </Link>
            <Link
              onClick={() => setShowMenuItems(false)}
              to="/programs"
              href="#programes"
            >
              Program
            </Link>
            <Link onClick={() => setShowMenuItems(false)} to="/pricing">
              Pricing
            </Link>
            <Link onClick={() => setShowMenuItems(false)} to="/trainers">
              Trainers
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
