import React, { useState } from "react";
import "./Update.css";

function Updated(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Notified");
    console.log("clicked");
  };

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
        <button onClick={clickHandler} className="notify-btn">
          {title}
        </button>
      </div>
    </div>
  );
}

export default Updated;
