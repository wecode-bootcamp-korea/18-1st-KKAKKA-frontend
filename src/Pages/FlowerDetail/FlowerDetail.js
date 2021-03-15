import React, { Component } from "react";
import "./FlowerDetail.scss";

class FlowerDetail extends Component {
  render() {
    return (
      <div>
        <div className="category-nav">
          <span>HOME</span>
          <span>꽃 정기구독</span>
          <span>가벼운 S 꽃구독</span>
        </div>
        <div className="product-thumnail">
          <img alt="꽃 이미지" src="./" className="thumnail" />
          <div className="slider">
            <img alt="꽃 미니 썸네일1" src="./" className="thumnail-mini" />
            <img alt="꽃 미니 썸네일2" src="./" className="thumnail-mini" />
            <img alt="꽃 미니 썸네일3" src="./" className="thumnail-mini" />
            <img alt="꽃 미니 썸네일4" src="./" className="thumnail-mini" />
            <img alt="꽃 미니 썸네일5" src="./" className="thumnail-mini" />
          </div>
        </div>
        <div className="product-detail-right">
          <div className="detail-title">
            <span>꽃이 일상이 되는 가벼운 시작</span>
            <h2>가벼운 S 꽃구독</h2>
            <h2>17,900원</h2>
          </div>
          <div className="detail-notice">
            <span>정기구독 전상품, 무료배송!</span>
          </div>
          <div className="detail-option">
            <div className="subscribe-option">
              <span>구독옵션</span>
              <button type="button" className="opener" />
              <ul className="options">
                <li className="option"> 정기구독(2주마다 자동결제)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FlowerDetail;
