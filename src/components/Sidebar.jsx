import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar-1">
        <Link to="/pricing">
          <h3>Pricing</h3>
        </Link>

        <Link to="/terms-and-conditions">
          <h3>Terms&Conditions</h3>
        </Link>
        <Link to="/privacy-policy">
          <h3>Privacy Policy</h3>
        </Link>
        <Link to="/contact-us">
          <h3>Contact Us</h3>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
