import React, { useState } from "react";
import "./Sidebar..css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const transition = { type: "tween", duration: 1 };
  return (
    <div
      className="sidebar-main"
      style={{
        width: open ? "100%" : "4%",
      }}
    >
      {open ? (
        <motion.div
          initial={{ opacity: 0, left: -300 }}
          animate={{ opacity: 1, left: 0 }}
          transition={transition}
          className="sidebar-second-main"
        >
          <div className="sidebar-z-top-icons-card">
            <RxCross2 size={15} onClick={() => setOpen(false)} />
          </div>
          <div className="sidebar-z-top-link-card">
            <img src="images/bee fit logo.png" alt="" />
            <h3 onClick={() => setOpen(false)}>
              <a href="#home">Home</a>
            </h3>
            <h3 onClick={() => setOpen(false)}>
              <a href="#programes">Program</a>
            </h3>
            <h3 onClick={() => setOpen(false)}>
              <a href="#plans">Pricing</a>
            </h3>
            <h3 onClick={() => setOpen(false)}>
              <a href="#contact">Contact Us</a>
            </h3>
          </div>
        </motion.div>
      ) : (
        <GiHamburgerMenu
          color="var(--main-color)"
          onClick={() => setOpen(true)}
          size={25}
        />
      )}
    </div>
  );
};

export default Sidebar;
