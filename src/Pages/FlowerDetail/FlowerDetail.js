import React, { Component } from "react";
import "./FlowerDetail.scss";

class FlowerDetail extends Component {
  render() {
    return (
      <section className="detail-container">
        <div className="category-nav">
          <span>HOME</span>
          <span>꽃 정기구독</span>
          <span>가벼운 S 꽃구독</span>
        </div>
        <div className="detail-contents">
          <div className="product-thumnail">
            <img
              alt="꽃 이미지"
              src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99DD0D485BAC757D2D"
              className="thumnail"
            />
            <div className="detail-slider">
              <img
                alt="꽃 미니 썸네일1"
                src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99DD0D485BAC757D2D"
                className="thumnail-mini"
              />
              <img
                alt="꽃 미니 썸네일2"
                src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99DD0D485BAC757D2D"
                className="thumnail-mini"
              />
              <img
                alt="꽃 미니 썸네일3"
                src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99DD0D485BAC757D2D"
                className="thumnail-mini"
              />
              <img
                alt="꽃 미니 썸네일4"
                src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99DD0D485BAC757D2D"
                className="thumnail-mini"
              />
              <img
                alt="꽃 미니 썸네일5"
                src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99DD0D485BAC757D2D"
                className="thumnail-mini"
              />
            </div>
          </div>
          <div className="product-detail-right">
            <div className="detail-title">
              <span>꽃이 일상이 되는 가벼운 시작</span>
              <h2 className="strong">가벼운 S 꽃구독</h2>
              <h2>17,900원</h2>
            </div>
            <div className="detail-info">
              <span>정기구독 전상품, 무료배송!</span>
              <div className="detail-option">
                <div className="subscribe-option">
                  <span>구독옵션</span>
                  <button type="button" className="opener" />
                  <ul className="options">
                    <li className="option"> 정기구독(2주마다 자동결제)</li>
                  </ul>
                  <div className="detail-amount">
                    <button type="button" className="btn-amount">
                      -
                    </button>
                    <span>수량</span>
                    <button type="button" className="btn-amount">
                      +
                    </button>
                  </div>
                  <div className="detail-price">
                    <span>상품 가격</span>
                    <p>구독 기간을 선택해주세요</p>
                    <span>35000원</span>
                  </div>
                  <div className="total-price">
                    <p>총 주문금액</p>
                    <h2>35000원</h2>
                  </div>
                  <div className="detail-buttons">
                    <button type="button" className="detail-btn cart">
                      장바구니
                    </button>
                    <button type="button" className="detail-btn order">
                      바로 구독 신청
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default FlowerDetail;
