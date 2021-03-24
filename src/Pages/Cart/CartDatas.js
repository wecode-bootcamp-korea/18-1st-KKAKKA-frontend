import React from "react";
import "./CartDatas.scss";

class CartDatas extends React.Component {
  render() {
    const { id, productImg, name, until, price, count, option } = this.props;
    return (
      <div className="cartDatas">
        <p className="id">{id}</p>
        <p className="productImg">
          <img alt="list" src={productImg} />
        </p>
        <p className="name">{name}</p>
        <p className="until">{until}</p>
        <p className="price">{price}</p>
        <p className="count">{count}</p>
        <p className="option">{option}</p>
        <p className="totalPrice">{price * count + option}</p>
      </div>
    );
  }
}

export default CartDatas;
