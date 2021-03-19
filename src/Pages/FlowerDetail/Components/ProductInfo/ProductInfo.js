import React, { Component } from "react";
import "./ProductInfo.scss";

class ProductInfo extends Component {
  render() {
    const {
      itemComment,
      productTitle,
      price,
      isDiscount,
      discountPer,
      resultPrice,
    } = this.props;
    return (
      <div className="detail-title">
        <span className="sub-title">{itemComment}</span>
        <h2 className="title strong">{productTitle}</h2>
        {!isDiscount ? (
          <h2 className="title price">{price.toLocaleString()}</h2>
        ) : (
          <div className="detail-discount">
            <span className="discountPer">{discountPer * 100}</span>
            <span className="oldPrice sub-title">{price.toLocaleString()}</span>
            <h2 className="title price">{resultPrice.toLocaleString()}</h2>
          </div>
        )}
      </div>
    );
  }
}

export default ProductInfo;
