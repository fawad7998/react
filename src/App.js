import React from "react";
import FirstPage from "./sections/Firstpage.js";
import SecondPage from "./sections/SecondPage.js";
import Thirdpage from "./sections/Thirdpage.js";
import { Routes, Route } from "react-router-dom";
import Textform from "./sections/Textform.js";

function App() {
  return (
    <>
        <Routes>
          <Route path="" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage/>} />
          <Route path="/third" element={<Thirdpage/>} />
          <Route path="/form" element={<Textform/>} />
        </Routes>

    </>
  );
}

export default App;
