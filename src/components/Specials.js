import React from "react";
import "./Specials.css";

function Specials() {
  return (
    <div className="special">
      <div className="special-text">
        <h2>Special Meals of the day!</h2>
        <p>
          Check our sepecials of the day and get discounts on all our meals and
          swift delivery to what ever location within Ilorin.
        </p>
      </div>
      <div className="special-menu">
        <div>
          <img
            src="img/spag.png"
            alt="shrimp and spaghetti"
            width={250}
            height="250"
          />
          <div className="about-food">
            <h3>Stir fry pasta</h3>
            <p>Stir fry pasta yada yada yada because of Sesan</p>
          </div>
        </div>
        <div>
          <img
            src="img/meatball.png"
            alt="shrimp and spaghetti"
            width={250}
            height="250"
          />
          <div className="about-food">
            <h3>Meat balls</h3>
            <p>Stir fry pasta yada yada yada because of Sesan</p>
          </div>
        </div>
        <div>
          <img
            src="img/burger.png"
            alt="shrimp and spaghetti"
            width={250}
            height="250"
          />
          <div className="about-food">
            <h3>Burger Meal</h3>
            <p>Stir fry pasta yada yada yada because of Sesan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specials;
