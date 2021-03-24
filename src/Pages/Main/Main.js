import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import SubNav from "../../Components/SubNav/SubNav";
import Footer from "../../Components/Footer/Footer";
import "../../styles/common.scss";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <SubNav />
        <Footer />
      </div>
    );
  }
}
export default Main;
