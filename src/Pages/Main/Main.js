import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import SubNav from "../../Components/SubNav/SubNav";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <SubNav />
      </div>
    );
  }
}
export default Main;
