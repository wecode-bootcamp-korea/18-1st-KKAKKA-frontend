import React, { Component } from "react";
import "./ProductSum.scss";

class ProductSum extends Component {
  render() {
    // const { } = this.props;
    return (
      <>
        <div className="detail-price">
          <div>
            <span className="contents">상품 가격</span>
            <p className="sub-contents">구독 기간을 선택해주세요</p>
          </div>
          <span className="price">35,000</span>
        </div>
        <div className="total-price">
          <p className="shipping-free">무료배송</p>
          <div>
            <p className="sub-contents">총 주문금액</p>
            <h2 className="title price">35,000</h2>
          </div>
        </div>
      </>
    );
  }
}

export default ProductSum;
