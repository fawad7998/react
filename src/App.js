import React from "react";
import FirstPage from "./sections/Firstpage.js";
import SecondPage from "./sections/SecondPage.js";
import Thirdpage from "./sections/Thirdpage.js";
import { Routes, Route } from "react-router-dom";
import Textform from "./sections/Textform.js";
import PasswordGenerator from "./Pages/PasswordGen.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import New_Password from "./Pages/New_Password.js";
import Navbar_02 from "./components/Navbar_02.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/password" element={<PasswordGenerator />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<Thirdpage />} />
        <Route path="/form" element={<Textform />} />
        <Route path="/new" element={<New_Password />} />
        <Route path="/nav2" element={<Navbar_02 />} />
      </Routes>
    </>
  );
}

export default App;
