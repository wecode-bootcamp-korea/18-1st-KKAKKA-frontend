import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import SubNav from "../../Components/SubNav/SubNav";
import Footer from "../../Components/Footer/Footer";
import Cards from "./Components/Cards/Cards";
import DataList from "./Components/DataList/DataList";
import {
  mainAPI,
  mockCookieDataAPI,
  mockCookieSubscribeAPI,
} from "../../config";
import "../../styles/common.scss";
import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      cookieSubscribe: [],
      cookieData: [],
    };
  }

  //mainAPI는 수정 되어서 구현할 떄는 mockdata 변수로 다시 할당
  // 백엔드와 통신은 완료
  componentDidMount = () => {
    fetch(mockCookieDataAPI)
      .then(response => response.json())
      .then(result => {
        this.setState({
          cookieData: result.product_list,
        });
      });
    fetch(mockCookieSubscribeAPI)
      .then(response => response.json())
      .then(result => {
        this.setState({
          cookieSubscribe: result.subscription_list,
        });
      });
  };

  render() {
    console.log("render state >>", this.state);
    const { cookieSubscribe, cookieData } = this.state;
    return (
      <div className="main">
        <div className="container">
          <Nav />
          <SubNav />
        </div>
        <div className="subscribeList">
          <div className="cookieSubscribeList">
            <h2 className="subscribeTxt">
              2주에 한번, 나를 위한 행복 까까{" "}
              <span className="subscribeBold">쿠키 정기구독</span>
            </h2>
            <div class="subscribeItemBox">
              {cookieSubscribe.map(subscribeList => {
                return (
                  <Cards
                    key={subscribeList.id}
                    subscribeName={subscribeList.name}
                    subscribeIntro={subscribeList.introduction}
                    subscribeImg={subscribeList.image}
                    subscribePrice={subscribeList.price}
                  />
                );
              })}
            </div>
          </div>
          <div className="cookieList">
            <div className="cookieListTxt">
              <h2 className="cookieTxt">
                과자가 필요한 순간, <span className="cookieBold">쿠키쿠키</span>
              </h2>
              <Link to="/flower-list">
                <button className="moreBtn">더보기</button>
              </Link>
            </div>
            <div className="cookieDataItems">
              {cookieData.map(cookieDataList => {
                return (
                  <DataList
                    key={cookieDataList.id}
                    cookieName={cookieDataList.name}
                    cookieIntro={cookieDataList.introduction}
                    cookieImg={cookieDataList.image}
                    cookiePrice={cookieDataList.orign_price}
                    cookieDiscountRate={cookieDataList.discount_rate}
                    cookieDiscountPrice={cookieDataList.discounted_price}
                  />
                );
              })}
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
