import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import DateInput from "../DateInput/DateInput";
import "./ProductOption.scss";

class ProductOption extends Component {
  constructor() {
    super();
    this.state = {
      // api 연결 이후 fetch 로그인 상태 인증으로 로직 변경
      isLogin: true,
      quantity: 1,
      delivery_date: "",
      hasLetter: true,
      price: 0,
      productPrice: "",
      totalPrice: "",
      subscribeList: [],
    };
  }

  changeDate = e => {
    this.setState({ delivery_date: e.target.value });
  };

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

  addCount = () => {
    if (this.state.quantity < 10) {
      this.setState({
        quantity: this.state.quantity + 1,
      });
    }
  };

  minusCount = () => {
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1,
      });
    }
  };

  chkHasLetter = () => {
    this.setState({
      hasLetter: !this.state.hasLetter,
    });
  };

  changePrice = () => {
    let updatePrice = this.state.price * this.state.quantity;
    this.setState({
      productPrice: updatePrice(),
    });
  };

  render() {
    const { discounted_price } = this.props;
    const { quantity, delivery_date } = this.state;
    return (
      <>
        <div className="detailOption">
          <div className="subscribeOption">
            <table>
              <thead>
                <th className="optionTh1"></th>
                <th></th>
              </thead>
              <tbody>
                <tr className="optionRow1">
                  <th>
                    <span className="contents">구독옵션</span>
                  </th>
                  <td>
                    <DateInput startDate={delivery_date} />
                  </td>
                </tr>
                <tr className="optionRow2">
                  <th>
                    <span className="contents">수량</span>
                  </th>
                  <td>
                    <div className="detailAmount">
                      <button
                        type="button"
                        className="btnAmount"
                        onClick={this.minusCount}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        type="button"
                        className="btnAmount"
                        onClick={this.addCount}
                      >
                        +
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="optionRow3">
                  <th>
                    <span className="contents">편지 추가</span>
                  </th>
                  <td>
                    <form className="letterCheckboxes">
                      <div className="letterCheckbox">
                        <input
                          className="contents"
                          id="letter"
                          type="radio"
                          name="letter"
                          value="letter"
                          checked={this.state.hasLetter ? true : false}
                          onClick={this.chkHasLetter}
                          readOnly
                        />
                        <label for="letter">추가할게요(+2,500)</label>
                      </div>
                      <div className="letterCheckbox">
                        <input
                          className="contents"
                          id="letterNo"
                          type="radio"
                          name="letter"
                          value="noLetter"
                          checked={this.state.hasLetter ? false : true}
                          onClick={this.chkHasLetter}
                        />
                        <label for="letterNo">추가하지 않을게요</label>
                      </div>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="detailPrice">
          <div>
            <span className="contents">상품 가격</span>
            <p className="subContents">구독 기간을 선택해주세요</p>
          </div>
          <span className="price">
            {(Number(discounted_price) * quantity).toLocaleString()}
          </span>
        </div>
        <div className="totalPrice">
          <p className="shippingFree">무료배송</p>
          <div>
            <p className="subContents">총 주문금액</p>
            <h2 className="title price">
              {(Number(discounted_price) * quantity).toLocaleString()}
            </h2>
          </div>
        </div>

        {this.state.hasLetter && (
          <div className="letterPrice">
            <div>
              <span className="contents">편지 추가</span>
            </div>
            <div className="letterBox">
              <span className="price">{Number(2500).toLocaleString()}</span>
              <button
                type="button"
                className="deleteBtn"
                onClick={this.chkHasLetter}
              >
                X
              </button>
            </div>
          </div>
        )}

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
      </>
    );
  }
}

export default withRouter(ProductOption);
