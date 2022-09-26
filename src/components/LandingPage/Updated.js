import React from "react";
import "./Update.css";

function Updated() {
  return (
    <div className="notified">
      <div>
        <h2 className="notified-heading">Get notified when we update!</h2>
        <p className="notified-paragraph">
          Get notified when we add new items to our specials menu, update our
          price list of have promos!
        </p>
      </div>
      <div className="notification">
        <form action="#">
          <input
            type="text"
            name="email"
            placeholder="gregsphilips@gmail.com"
            className="notify-me"
          />
        </form>
        <button className="notify-btn">Get notified</button>
      </div>
    </div>
  );
}

export default Updated;
