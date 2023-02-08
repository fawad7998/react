import Navbar from "../components/Navbar";
import React, { useState } from "react";

const Textform = () => {
  // setText = "This is a Text 02";
  
  function upClick() {
    console.log("clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  function downClick() {
    console.log("clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  
  function onchange(event) {
    // console.log("on changed")  
    setText(event.target.value);
  }
  
  const [text,setText] = useState("This is a Text");
 
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            TextArea
          </label>
          <textarea
            value={text}
            onChange={onchange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>  
        <button onClick={upClick} className="btn btn-primary  ">Upper Case</button>
        <button onClick={downClick} className="btn btn-primary mx-2">Lower Case</button>
      </div>
      <div className="container my-3">
        <h1>INFO</h1>
        <p>{text.split(" ").length}words ,{text.length}characters</p>
        <p>{0.008 * text.split(" ").length}words per minute</p>

      </div>
    </>
  );
};
export default Textform;

// (Event) => event.target.value (now we can type in our Textfield ny using this)
