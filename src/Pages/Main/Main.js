import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <Nav className="nav" sticky="top" />
      </div>
    );
  }
}
export default Main;
