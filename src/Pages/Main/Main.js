import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import SubNav from "../../Components/SubNav/SubNav";
import Footer from "../../Components/Footer/Footer";
import { mainAPI } from "../../config";
import CardList from "./CardList";
import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      cookiedata: [],
    };
  }

  //현재는 mock data라서 통신 할 때 config 파일 수정 요망
  componentDidMount = () => {
    fetch(mainAPI)
      .then(response => response.json())
      .then(result => {
        this.setState({
          cookiedata: result.result,
        });
      });
  };

  render() {
    console.log("state >>", this.state.cookiedata);
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
            <CardList cookieItems={this.state.cookiedata} />
          </div>
          <div className="cookie"></div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Main;
