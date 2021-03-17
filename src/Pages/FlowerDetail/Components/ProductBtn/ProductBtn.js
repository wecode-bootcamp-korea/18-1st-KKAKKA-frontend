import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductBtn.scss";

class ProductBtn extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: true,
    };
  }

  render() {
    const { isLogin } = this.state;
    return (
      <div className="detail-buttons">
        <Link to="/cart">
          <button type="button" className="detail-btn cart">
            장바구니
          </button>
        </Link>
        <Link to={isLogin ? "/order" : "/login"}>
          <button type="button" className="detail-btn order">
            바로 구독 신청
          </button>
        </Link>
      </div>
    );
  }
}

export default ProductBtn;
