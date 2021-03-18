import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SubChild.scss";

class SubChild extends Component {
  render() {
    const {
      itemComment,
      productTitle,
      price,
      contents,
      productImg,
    } = this.props;
    return (
      <article className="sublistBox">
        <div className="subImageBox">
          <Link to="./SubscribeDetail">
            <img
              alt="정기구독 상품1"
              src={productImg.img1}
              className="subImage"
            />
          </Link>
        </div>
        <div className="detailTitle">
          <span className="subTitle">{itemComment}</span>
          <Link to="./SubscribeDetail">
            <h2 className="title strong">{productTitle}</h2>
          </Link>
          <h2 className="title price">{price}</h2>
          <div className="contentBox">
            {contents.split("\n").map(line => {
              return (
                <span className="detailContent">
                  {line}
                  <br />
                </span>
              );
            })}
          </div>

          <span className="shippingFree">무료배송</span>
        </div>
      </article>
    );
  }
}
export default SubChild;
