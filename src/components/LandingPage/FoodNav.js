import React from "react";
import "./FoodNav.css";

function FoodNav(props) {
  return (
    <div>
      <nav className="nav-bar">
        <div className="nav-icon">
          <img src="img/lily-icon.svg" alt="lily icon" />
          <h2>{props.head}</h2>
        </div>
        <div className="nav-links">
          <a href="www.google.com" className="nav-link">
            {props.home}
          </a>
          <a href="www.google.com" className="nav-link">
            {props.login}
          </a>
          <a href="www.google.com" className="nav-link">
            {props.login}
          </a>
        </div>
      </nav>
    </div>
  );
}
export default FoodNav;
