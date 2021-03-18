import React, { Component } from "react";
import "./DetailInfo.scss";

class DetailInfo extends Component {
  render() {
    const { itemComment, productTitle, price } = this.props;
    return (
      <div className="detail-title">
        <span className="sub-title">{itemComment}</span>
        <h2 className="title strong">{productTitle}</h2>
        <h2 className="title price">{price}</h2>
        <div className="detail-discount">
          <span className="discountPer">10</span>
          <span className="oldPrice sub-title">17,900</span>
          <h2 className="title price">{price}</h2>
        </div>
      </div>
    );
  }
}

export default DetailInfo;
