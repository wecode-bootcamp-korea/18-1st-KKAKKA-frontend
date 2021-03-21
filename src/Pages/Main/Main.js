import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <Nav className="nav" sticky="top" />
        <section className="test" />
      </div>
    );
  }
}
export default Main;
