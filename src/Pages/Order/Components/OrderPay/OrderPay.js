import React, { Component } from "react";
import "./OrderPay.scss";

class OrderPay extends Component {
  constructor() {
    super();
    this.state = {
      orderList: [],
      letterText: "",
    };
  }

  changeInput = e => {
    this.setState({ letterText: e.target.value });
    console.log(this.state.letterText);
  };

  render() {
    return (
      <div className="addressContainer">
        <h4>거의 다 왔어요, 이제 주소만 넣으면 돼요😎 </h4>
        <div className="addressBox"></div>
      </div>
    );
  }
}
export default OrderPay;
