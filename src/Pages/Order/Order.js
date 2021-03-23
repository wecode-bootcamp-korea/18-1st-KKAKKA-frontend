import React, { Component } from "react";
import OrderLetter from "./Components/OrderLetter/OrderLetter";
import OrderAddress from "./Components/OrderAddress/OrderAddress";
import OrderPay from "./Components/OrderPay/OrderPay";
import FooterBtn from "./Components/FooterBtn/FooterBtn";
import "./Order.scss";

class Order extends Component {
  constructor() {
    super();
    this.state = {
      orderList: [],
      currentId: 1,
    };
  }

  clickHandler = id => {
    this.setState({ currentId: id });
  };

  // componentDidMount() {
  //   fetch("http://10.58.7.81:8000/")
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log("haha: ", data);
  //       this.setState({
  //         orderList: data.result,
  //       });
  //     });
  // }
  render() {
    return (
      <section className="orderContainer">
        <nav className="orderToggle">
          <ul className="toggleBtns">
            <li
              className={
                this.state.currentId === 1 ? "toggleBtn selected" : "toggleBtn"
              }
              onClick={() => this.clickHandler(1)}
            >
              <div className="toggleContents">
                <h2>1</h2>
                <h3>편지 추가</h3>
              </div>
            </li>
            <li
              className={
                this.state.currentId === 2 ? "toggleBtn selected" : "toggleBtn"
              }
              onClick={() => this.clickHandler(2)}
            >
              <div className="toggleContents">
                <h2>2</h2>
                <h3>주소 입력</h3>
              </div>
            </li>
            <li
              className={
                this.state.currentId === 3 ? "toggleBtn selected" : "toggleBtn"
              }
              onClick={() => this.clickHandler(3)}
            >
              <div className="toggleContents">
                <h2>3</h2>
                <h3>결제</h3>
              </div>
            </li>
          </ul>
        </nav>
        <div className="contentsBox">
          {this.state.currentId === 1 && <OrderLetter />}
          {this.state.currentId === 2 && <OrderAddress />}
          {this.state.currentId === 3 && <OrderPay />}
        </div>
        <FooterBtn />
      </section>
    );
  }
}
export default Order;
