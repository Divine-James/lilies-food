import React from "react";
import "./FoodNav.css";

function FoodNav() {
  return (
    <div>
      <nav className="nav-bar">
        <div className="nav-icon">
          <img src="img/lily-icon.svg" alt="lily icon" />
          <h2>Lillies</h2>
        </div>
        <div className="nav-links">
          <a href="www.google.com" className="nav-link">
            Home
          </a>
          <a href="www.google.com" className="nav-link">
            Login
          </a>
          <a href="www.google.com" className="nav-link">
            Signup
          </a>
        </div>
      </nav>
    </div>
  );
}
export default FoodNav;
