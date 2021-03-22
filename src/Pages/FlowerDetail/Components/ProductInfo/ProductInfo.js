import React, { Component } from "react";
import "./ProductInfo.scss";

class ProductInfo extends Component {
  render() {
    const {
      detail,
      name,
      origin_price,
      discount_rate,
      discounted_price,
    } = this.props;
    return (
      <div className="detail-title">
        <span className="sub-title">{detail}</span>
        <h2 className="title strong">{name}</h2>
        {discount_rate !== 0.0 ? (
          <h2 className="title price">{origin_price.toLocaleString()}</h2>
        ) : (
          <div className="detail-discount">
            <span className="discountPer">{discount_rate * 100}</span>
            <span className="oldPrice sub-title">
              {origin_price.toLocaleString()}
            </span>
            <h2 className="title price">{discounted_price.toLocaleString()}</h2>
          </div>
        )}
      </div>
    );
  }
}

export default ProductInfo;
