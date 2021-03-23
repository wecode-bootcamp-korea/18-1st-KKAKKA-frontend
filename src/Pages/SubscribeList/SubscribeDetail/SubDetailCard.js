import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import DetailInfo from "./Components/DetailInfo/DetailInfo";
import DetailOption from "./Components/DetailOption/DetailOption";
import "./SubDetailCard.scss";

class SubDetailCard extends Component {
  state = {
    subscribeList: [],
  };

  render() {
    console.log("SubDetailCard :", this.state);
    const { id, introduction, name, price, description, image } = this.props;

    return (
      <section className="detailContainer">
        <ul className="categoryNav">
          <li>
            <Link to="/main">HOME</Link>
          </li>
          <li>
            <Link to="/subscribe-list">꽃 정기구독</Link>
          </li>
          <li>
            <Link to={`./${this.props.match.params.id}`}>{name}</Link>
          </li>
        </ul>
        <div className="detailContents">
          <div className="productThumnail">
            <img alt="꽃 이미지" src={image} className="thumnail" />
            <div className="detailSlider">
              <img
                alt="꽃 미니 썸네일1"
                src="https://user-images.githubusercontent.com/46774456/111404851-d48b6b80-8712-11eb-963a-959179b2bb76.png"
                className="thumnailMini"
              />
              <img
                alt="꽃 미니 썸네일2"
                src="https://user-images.githubusercontent.com/46774456/111404953-fedd2900-8712-11eb-918f-d35b9ca935c0.jpg"
                className="thumnailMini"
              />
              <img
                alt="꽃 미니 썸네일3"
                src="https://user-images.githubusercontent.com/46774456/111404908-eff67680-8712-11eb-8f25-8ae36c32578e.png"
                className="thumnailMini"
              />

              <img
                alt="꽃 미니 썸네일4"
                src="https://user-images.githubusercontent.com/46774456/111404908-eff67680-8712-11eb-8f25-8ae36c32578e.png"
                className="thumnailMini"
              />

              <img
                alt="꽃 미니 썸네일5"
                src="https://user-images.githubusercontent.com/46774456/111404853-d48b6b80-8712-11eb-8375-e20afa6b9c38.png"
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
