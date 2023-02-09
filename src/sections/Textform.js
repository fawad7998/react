// import Navbar from "../components/Navbar";
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

// create a javascript code to read words and show how many minutes and seconds to read?
// var minutes = Math.floor(time / 60);


// var seconds = time - minutes * 60;


// var hours = Math.floor(time / 3600);
// time = time - hours * 3600;


// function str_pad_left(string,pad,length) {
//     return (new Array(length+1).join(pad)+string).slice(-length);
// }

// var finalTime = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);




//Source: https://stackoverflow.com/questions/3733227


