import React, { useState } from "react";
import "./Update.css";

function Updated(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Notified");
    console.log("clicked");
  };

  const emailChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
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
        <form
          onSubmit={formSubmitHandler}
          className={`form-control ${!isValid ? "invalid" : ""}`}
        >
          <input
            type="text"
            name="email"
            onChange={emailChangeHandler}
            placeholder="gregsphilips@gmail.com"
            className="notify-me"
          />
          <button type="submit" className="notify-btn" onClick={clickHandler}>
            {title}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Updated;
