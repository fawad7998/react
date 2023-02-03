import React from "react";
import FirstPage from "./sections/Firstpage.js";
import SecondPage from "./sections/SecondPage.js";
import Thirdpage from "./sections/Thirdpage.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
          <Route path="/home" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage/>} />
          <Route path="/third" element={<Thirdpage/>} />
        </Routes>

    </>
  );
}

export default App;
