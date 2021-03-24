import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import DetailInfo from "./Components/DetailInfo/DetailInfo";
import DetailOption from "./Components/DetailOption/DetailOption";
import "./SubDetailCard.scss";

class SubDetailCard extends Component {
  render() {
    const { id, introduction, name, price, description, image } = this.props;

    return (
      <section className="detailContainer">
        <ul className="categoryNav">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/subscription">꽃 정기구독</Link>
          </li>
          <li>
            <Link to={`./${this.props.match.params.id}`}>{name}</Link>
          </li>
        </ul>
        <div className="detailContents">
          <div className="productThumnail">
            <img
              alt="꽃 이미지"
              src={image && image.length > 0 && image[0]}
              className="thumnail"
            />
            <div className="detailSlider">
              <img
                alt="꽃 미니 썸네일1"
                src={image && image.length > 0 && image[0]}
                className="thumnailMini"
              />
              <img
                alt="꽃 미니 썸네일2"
                src={image && image.length > 0 && image[0]}
                className="thumnailMini"
              />
              <img
                alt="꽃 미니 썸네일3"
                src={image && image.length > 0 && image[0]}
                className="thumnailMini"
              />

              <img
                alt="꽃 미니 썸네일4"
                src={image && image.length > 0 && image[0]}
                className="thumnailMini"
              />

              <img
                alt="꽃 미니 썸네일5"
                src={image && image.length > 0 && image[0]}
                className="thumnailMini"
              />
            </div>
          </div>
          <div className="productDetailRight">
            <DetailInfo
              key={id}
              introduction={introduction}
              name={name}
              price={price}
              description={description}
              image={image}
            />
            <div className="detailInfo">
              <span className="contents">정기구독 전상품</span>
              <p className="contentsHighlight">무료배송!</p>
              <DetailOption key={id} price={price} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default withRouter(SubDetailCard);
