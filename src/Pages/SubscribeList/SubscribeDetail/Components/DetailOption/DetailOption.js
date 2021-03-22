import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./DetailOption.scss";

class DetailOption extends Component {
  constructor() {
    super();
    this.state = {
      // api 연결 이후 fetch 로그인 상태 인증으로 로직 변경
      isLogin: true,
      orderCount: 1,
      hasLetter: true,
      productPrice: "",
      totalPrice: "",
      subscribeList: [],
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

  addCount = () => {
    this.setState({
      orderCount: this.state.orderCount + 1,
    });
  };

  minusCount = () => {
    if (this.state.orderCount > 1) {
      this.setState({
        orderCount: this.state.orderCount - 1,
      });
    }
  };

  chkHasLetter = () => {
    this.setState({
      hasLetter: !this.state.hasLetter,
    });
  };

  changePrice = () => {
    let updatePrice = this.props.price * this.state.orderCount;
    this.setState({
      productPrice: updatePrice(),
    });
  };

  render() {
    console.log("DetailOption price:", this.props.price);
    const { price } = this.props;
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
                    <select>
                      <label htmlFor="option">구독 옵션</label>
                      <option className="selected">
                        구독기간을 선택해주세요
                      </option>
                      <option className="option">
                        정기구독(2주마다 자동결제)
                      </option>
                      <option className="option">1회 무료 체험</option>
                    </select>
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
                      <span>{this.state.orderCount}</span>
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
                        />
                        <label for="letter">추가할게요(FREE)</label>
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
            {(Number(price) * this.state.orderCount).toLocaleString()}
          </span>
        </div>
        <div className="totalPrice">
          <p className="shippingFree">무료배송</p>
          <div>
            <p className="subContents">총 주문금액</p>
            <h2 className="title price">
              {(Number(price) * this.state.orderCount).toLocaleString()}
            </h2>
          </div>
        </div>

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

export default withRouter(DetailOption);
