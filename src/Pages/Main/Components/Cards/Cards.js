import React, { Component } from "react";
import "./Cards.scss";

export class Cards extends Component {
  render() {
    console.log("Cards props >>", this.props);
    return (
      <div className="cards">
        <img
          src={this.props.subscribeImg}
          className="subscribeImg"
          alt="product"
        />
        <p className="subscribeIntro">{this.props.subscribeIntro}</p>
        <p className="subscribeName">{this.props.subscribeName}</p>
        <p className="subscribePrice">{`${this.props.subscribePrice}원`}</p>
        <span className="freeShipping">무료배송</span>
      </div>
    );
  }
}

export default Cards;
