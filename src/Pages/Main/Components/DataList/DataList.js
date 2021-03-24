import React, { Component } from "react";
import "./DataList.scss";

export class DataList extends Component {
  render() {
    let discountRate = Number(this.props.cookieDiscountRate) * 100;
    console.log("props >>>", this.props);
    return (
      <div className="dataList">
        <img src={this.props.cookieImg} className="cookieImg" alt="product" />
        <p className="">{this.props.cookieIntro}</p>
        <p className="cookieName">{this.props.cookieName}</p>
        <p className="cookiePrice">{this.props.cookiePrice}</p>
        <span className="cookieDiscountRate">{`${discountRate}%`}</span>
        <span className="cookieDiscountPrice">
          {this.props.cookieDiscountPrice}
        </span>
      </div>
    );
  }
}

export default DataList;
