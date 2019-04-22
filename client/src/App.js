import React, { Component } from "react";

import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Footer from "./Footer";
import "./App.css";

const App = () => (
  <div className="body">
    <Header />
    <About />
    <Skills />
    <Footer />
  </div>
);

export default App;
