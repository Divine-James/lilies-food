import React from "react";
import "./Order.css";

function Order() {
  return (
    <div>
      <main className="order">
        <div className="order-item">
          <h1>
            Order <span>food</span> anytime, anywhere
          </h1>
          <p>
            Browse from our list of specials to place your order and have food
            delivered to you in no time. Affordable, tasty and fast!
          </p>
          <div>
            <img
              src="img/Google-Play-Badge.svg"
              alt="google"
              className="downloadimg"
            />
            <img
              src="img/App-Store-Badge.svg"
              alt="app store"
              className="downloadimg"
            />
          </div>
        </div>
        <div>
          <img src="img/food.png" alt="food" width={400} height="400" />
        </div>
      </main>
    </div>
  );
}

export default Order;
