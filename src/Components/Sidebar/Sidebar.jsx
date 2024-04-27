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
            <h3>Home</h3>
            <h3>Program</h3>
            <h3>Pricing</h3>
            <h3>Contact Us</h3>
          </div>
        </motion.div>
      ) : (
        <GiHamburgerMenu onClick={() => setOpen(true)} size={30} />
      )}
    </div>
  );
};

export default Sidebar;
