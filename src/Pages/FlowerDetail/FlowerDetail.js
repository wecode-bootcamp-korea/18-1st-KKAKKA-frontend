import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import ProductOption from "./Components/ProductOption/ProductOption";
import ProductSum from "./Components/ProductSum/ProductSum";
import ProductBtn from "./Components/ProductBtn/ProductBtn";
import "./FlowerDetail.scss";

class FlowerDetail extends Component {
  constructor() {
    super();
    this.state = {
      subscribeList: [],
    };
  }

  componentDidMount() {
    fetch("/data/subscribeData.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          subscribeList: data,
        });
      });
  }

  render() {
    return (
      <section className="detail-container">
        <ul className="category-nav">
          <li>
            <Link to="/main">HOME</Link>
          </li>
          <li>
            <Link to="/subscribe-list">꽃 정기구독</Link>
          </li>
          <li>
            <Link to="subscribe-detail">가벼운 S 꽃구독</Link>
          </li>
        </ul>
        <div className="detail-contents">
          <div className="product-thumnail">
            <img
              alt="꽃 이미지"
              src="https://user-images.githubusercontent.com/46774456/111404908-eff67680-8712-11eb-8f25-8ae36c32578e.png"
              className="thumnail"
            />
            <div className="detail-slider">
              <img
                alt="꽃 미니 썸네일1"
                src="https://user-images.githubusercontent.com/46774456/111404851-d48b6b80-8712-11eb-963a-959179b2bb76.png"
                className="thumnail-mini"
              />
              <img
                alt="꽃 미니 썸네일2"
                src="https://user-images.githubusercontent.com/46774456/111404953-fedd2900-8712-11eb-918f-d35b9ca935c0.jpg"
                className="thumnail-mini"
              />
              <img
                alt="꽃 미니 썸네일3"
                src="https://user-images.githubusercontent.com/46774456/111404908-eff67680-8712-11eb-8f25-8ae36c32578e.png"
                className="thumnail-mini"
              />

              <img
                alt="꽃 미니 썸네일4"
                src="https://user-images.githubusercontent.com/46774456/111404908-eff67680-8712-11eb-8f25-8ae36c32578e.png"
                className="thumnail-mini"
              />

              <img
                alt="꽃 미니 썸네일5"
                src="https://user-images.githubusercontent.com/46774456/111404853-d48b6b80-8712-11eb-8375-e20afa6b9c38.png"
                className="thumnail-mini"
              />
            </div>
          </div>
          <div className="product-detail-right">
            <ProductInfo />
            <div className="detail-info">
              <span className="contents">정기구독 전상품</span>
              <p className="contents-highlight">무료배송!</p>
              <div className="detail-option">
                <div className="subscribe-option">
                  <ProductOption />
                  <ProductSum />
                  <ProductBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default withRouter(FlowerDetail);
