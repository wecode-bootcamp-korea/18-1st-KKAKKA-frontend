import React from "react";
import "./ListDatas.scss";

class ListDatas extends React.Component {
  render() {
    const {
      //createdAt,
      detail,
      //isFreeShipping,

      discountRate,
      discountedPrice,
      //id,
      image,
      name,
      originPrice,
      size,
    } = this.props;
    return (
      <div className="listDatas">
        {/* <p className="productLimit">{productLimit}</p> */}
        {/* <p className="updateDate">{updateDate}</p> */}
        {/* {isFreeShipping && <p className="isFreeShipping">무료배송</p>} */}
        <p className="image">
          <img alt="image" src={image} />
        </p>
        <p className="detail">{detail}</p>
        <p className="name">{name}</p>

        <div className="detailThird">
          {discountRate > 0.0 && (
            <span className="discountRate">{discountRate * 100}%</span>
          )}
          {discountedPrice === 0 && (
            <span className="discountedPrice">{discountedPrice}원</span>
          )}
          <span className="originPrice">{originPrice}원</span>
        </div>

        {/* {{ discountRate } ? (
          <div className="discountedPrice">{discountedPrice}</div>
        ) : (
          <div className="originPrice">{originPrice}</div>
        )}
        {discountedPrice && <div className="discountRate">{discountRate}</div>}
        <span className="discountedPrice">{discountedPrice}</span>
        <p className="createdAt">{createdAt}</p>

        <p className="id">{id}</p> */}
        <div className="detailFourth">
          <span className="size">{size}</span>
          <span className="freeshipping">무료배송</span>
        </div>
      </div>
    );
  }
}

export default ListDatas;
