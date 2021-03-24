import React, { Component } from "react";
import CartDatas from "./CartDatas";
import "./Cart.scss";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartDatas: [],
    };
  }

  componentDidMount() {
    fetch("/data/cartList.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          cartDatas: data,
        });
      });
  }
  render() {
    const { cartDatas } = this.state;
    return (
      <div className="cart">
        <h1 className="cartHead">장바구니</h1>
        <div className="cartTable">
          <table className="table">
            <thead>
              <tr>
                <th>상품정보</th>
                <th>추가상품</th>
                <th>합계금액</th>
              </tr>
            </thead>
            <tbody>
              {cartDatas.map(item => (
                <tr id={item.id}>
                  <td>
                    productImg= {item.productImg}
                    name= {item.name} until= {item.until} price= {item.price}
                    count= {item.count}
                  </td>
                  <td>option={item.option}</td>
                  <td>totalPrice={item.price * item.count + item.option}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>구매 전 확인해주세요</div>
        <div>
          -구매 금액 합산 30,000원 이상일 경우, 배송비는
          무료입니다.(단,[정기구독],[무료배송]상품은 구매금액 합산에 포함되지
          않습니다.)
        </div>
        <div>
          -[정기구독]상품의 첫 번째 발송일에 일반 택배상품을 함께 구매하실 경우,
          중복배송비는 부분 환불 처리해드립니다.
        </div>

        <button className="buy">구매하기</button>
      </div>
    );
  }
}

export default Cart;
