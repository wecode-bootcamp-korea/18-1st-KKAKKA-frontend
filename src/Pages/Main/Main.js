import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import SubNav from "../../Components/SubNav/SubNav";
import { mainAPI } from "../../config";
import Footer from "../../Components/Footer/Footer";
import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      cookiedata: [],
    };
  }
  componentDidMount = () => {
    fetch(mainAPI)
      .then(response => response.json())
      .then(result => console.log(result))
      .then(result => {
        this.setState({
          cookiedata: result,
        });
      });
  };

  render() {
    return (
      <div className="main">
        <div className="container">
          <Nav />
          <SubNav />
        </div>
        <div className="subscribeList">
          <div className="cookieSubscribeList"></div>
          <div className="cookieList">
            <div className="cookieListTxt">
              <h2 className="cookieTxt">과자가 필요한 순간, 쿠키쿠키</h2>
              <Link to="/flower-list">
                <button className="moreBtn">더보기</button>
              </Link>
            </div>
          </div>
          <div className="cookie"></div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Main;
