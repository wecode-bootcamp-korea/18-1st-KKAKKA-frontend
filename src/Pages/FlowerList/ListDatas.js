import React from "react";
import "./ListDatas.scss";

class ListDatas extends React.Component {
  render() {
    const {
      id,
      itemComment,
      prouductTitle,
      price,
      isDiscount,
      discountPer,
      resultPrice,
      productLimit,
      size,
      updateDate,
      productImg,
      isFreeShipping,
    } = this.props;
    return (
      <div className="listDatas">
        <p className="id">{id}</p>
        <p className="productImg">
          <img alt="list" src={productImg} />
        </p>
        <p className="itemComment">{itemComment}</p>
        <p className="prouductTitle">{prouductTitle}</p>
        {isDiscount && (
          <span className="detailDiscount">
            <span className="discountPer">{discountPer}</span>
            <span className="price">{price}</span>
          </span>
        )}
        <span className="resultPrice">{resultPrice}</span>
        <p className="productLimit">{productLimit}</p>
        <p className="size">{size}</p>
        <p className="updateDate">{updateDate}</p>
        {isFreeShipping && <p className="isFreeShipping">무료배송</p>}
      </div>
    );
  }
}

export default ListDatas;
