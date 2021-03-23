import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import SubNav from "../../Components/SubNav/SubNav";
import { mainAPI } from "../../config";
import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount = () => {
    fetch(mainAPI)
      .then(response => response.json())
      .then(result => console.log(result));
  };

  render() {
    return (
      <div className="main">
        <div className="container">
          <Nav />
          <SubNav />
        </div>
        {/* Navi 컴포넌트 추가 예정 */}
        <div className="subscribeList">
          <div className="cookieSubscribeList"></div>
          <div className="cookieList"></div>
          <div className="cookieListTxt">
            <h2 className="cookieTxt">과자가 필요한 순간, 쿠키쿠키</h2>
            <Link to="/flower-list">
              <button className="moreBtn">더보기</button>
            </Link>
          </div>
          <div className=""></div>
        </div>
        {/* Footer 컴포넌트 추가 예정 */}
      </div>
    );
  }
}
export default Main;
