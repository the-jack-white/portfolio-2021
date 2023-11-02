import { Routes, Route } from "react-router";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Lemverify from "../Pages/Projects/Lemverify";
import Biz2click from "../Pages/Projects/Biz2click";

import "./index.css";

const Body = () => {
  return (
    <div className="main-body">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects/lemverify" element={<Lemverify />} />
        <Route path="/projects/biz2click" element={<Biz2click />} />
      </Routes>
    </div>
  );
};

export default Body;
