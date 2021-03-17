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
      <article className="sublist-box">
        <div className="sub-image-box">
          <Link to="./SubscribeDetail">
            <img
              alt="정기구독 상품1"
              src={productImg.img1}
              className="sub-image"
            />
          </Link>
        </div>
        <div className="detail-title">
          <span className="sub-title">{itemComment}</span>
          <Link to="./SubscribeDetail">
            <h2 className="title strong">{productTitle}</h2>
          </Link>
          <h2 className="title price">{price}</h2>
          <div className="content-box">
            {contents.split("\n").map(line => {
              return (
                <span className="detail-content">
                  {line}
                  <br />
                </span>
              );
            })}
          </div>

          <span className="shipping-free">무료배송</span>
        </div>
      </article>
    );
  }
}
export default SubChild;
