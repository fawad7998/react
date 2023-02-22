import React, { useState } from "react";

export default function New_Password() {
  // create a password generator with numbers characters , lower and upper case characters ,special characters in js ?
  const [Gen, setGen] = useState("");

  function generatePassword() {
    var length = 8,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    setGen (retVal);
  }

  return (
    <div>
      <input
        value={Gen}
        className="form-control"
        id="exampleFormControlTextarea1"
        // rows="3"
      ></input>
      {/* <input type="text" value={Gen} onchange={onchange}  /> */}
      <button className="btn btn-danger" onClick={() => generatePassword()}>
        Generate
      </button>
    </div>
  );
}
