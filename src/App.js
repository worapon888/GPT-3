import React from "react";
import { Brand, Cta, Navbar } from "./components";
import {
  Features,
  Footer,
  Blog,
  Header,
  Possibility,
  What,
} from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <What />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
