import React, { Component } from "react";
import "./ProductBtn.scss";

class ProductBtn extends Component {
  render() {
    // const { } = this.props;
    return (
      <div className="detail-buttons">
        <button type="button" className="detail-btn cart">
          장바구니
        </button>
        <button type="button" className="detail-btn order">
          바로 구독 신청
        </button>
      </div>
    );
  }
}

export default ProductBtn;
