import React, { Component } from "react";
import "./ProductInfo.scss";

class ProductInfo extends Component {
  render() {
    // const { } = this.props;
    return (
      <div className="detail-title">
        <span className="sub-title">꽃이 일상이 되는 가벼운 시작</span>
        <h2 className="title strong">가벼운 S 꽃구독</h2>
        <h2 className="title price">17,900</h2>
        <div className="detail-discount">
          <span className="discountPer">10</span>
          <span className="oldPrice sub-title">17,900</span>
          <h2 className="title price">17,900</h2>
        </div>
      </div>
    );
  }
}

export default ProductInfo;
