import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ProductBtn.scss";

class ProductBtn extends Component {
  constructor() {
    super();
    this.state = {
      // api 연결 이후 fetch 로그인 상태 인증으로 로직 변경
      isLogin: true,
    };
  }

  goToCart = () => {
    if (this.state.isLogin) {
      this.props.history.push("/cart");
    } else {
      this.props.history.push("/login");
    }
  };

  goToOrder = () => {
    if (this.state.isLogin) {
      this.props.history.push("/order");
    } else {
      this.props.history.push("/login");
    }
  };

  render() {
    return (
      <div className="detailButtons">
        <button
          type="button"
          className="detailBtn cart"
          onClick={this.goToCart}
        >
          장바구니
        </button>
        <button
          type="button"
          className="detailBtn order"
          onClick={this.goToOrder}
        >
          바로 구독 신청
        </button>
      </div>
    );
  }
}

export default withRouter(ProductBtn);
