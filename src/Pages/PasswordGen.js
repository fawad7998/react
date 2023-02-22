// import { click } from "@testing-library/user-event/dist/click"
// import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// alert copy
const PasswordGen = () => {
  const [text, setText] = useState("Text Here");

  // uppercase
  let upcase = () => {
    let uptext = text.toUpperCase();
    setText(uptext);
  };
  // lowercase
  let locase = () => {
    let uptext = text.toLowerCase();
    setText(uptext);
  };
  // onchange
  let onchange = (event) => {
    setText(event.target.value);
  };

  // to copy

  const notify = () => toast("Text has been copied", { autoClose: 1500 });
  let tocopy = () => {
    navigator.clipboard.writeText(text);
    notify();
  };

  // to clear text
  const clear = () => toast("Text Cleared", { autoClose: 1500 });
  const toclear = () => {
    setText("");
    clear();
  };

  //  click clear

  // const clickclear = ()=>{
  //   setText.reset();
  // }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              value={text}
              onChange={onchange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <div className="container mt-3">
              <button className="btn btn-primary mx-1 " onClick={upcase}>
                toUpperCase
              </button>
              <button className="btn btn-danger mx-1 " onClick={locase}>
                toLowerCase
              </button>
              <button className="btn btn-secondary mx-1 " onClick={tocopy}>
                Copy
                <ToastContainer closeOnClick={true} />
              </button>
              <button className="btn btn-dark mx-1 " onClick={toclear}>
                Clear
              </button>

              {/* <input type="text" onchange="this.value=''" value="Blabla"/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGen;
