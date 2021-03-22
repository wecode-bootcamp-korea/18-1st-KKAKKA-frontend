import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./SubCard.scss";

class SubCard extends Component {
  goToDetail = () => {
    this.props.history.push(`./subscribe-detail/${this.props.id}`);
  };

  render() {
    console.log("Subcard");
    console.log("Subcard props", this.props);
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
          <img
            alt="정기구독 상품1"
            src={productImg.img1}
            className="subImage"
            onClick={this.goToDetail}
          />
        </div>
        <div className="detailTitle">
          <span className="subTitle">{itemComment}</span>
          <h2 className="title strong" onClick={this.goToDetail}>
            {productTitle}
          </h2>
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
export default withRouter(SubCard);
