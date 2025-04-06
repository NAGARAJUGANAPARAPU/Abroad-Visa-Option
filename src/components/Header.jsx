// 
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">
        <Link to="/">
          <img
            src="https://abroadoptions.com/wp-content/uploads/2024/04/AO-logo-red.png"
            alt="Abroad Options Logo"
            className="abroad"
          />
        </Link>
      </div>
      <div className="nav-links">
        <a href="/visa-services-for-travel-agents">For Agents</a>
        <a href="https://api.whatsapp.com/send/?phone=917892522684">Chat with us</a>
        <a href="tel:07314852914">07314852914</a>
        <Link to="/Login" className="login-button">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
