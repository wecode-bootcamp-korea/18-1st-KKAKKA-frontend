import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import ProductOption from "./Components/ProductOption/ProductOption";
import "./FlowerDetail.scss";

class FlowerDetail extends Component {
  constructor() {
    super();
    this.state = {
      subscribeList: [
        {
          id: 1,
          detail: "핑크빛 분위기의 완성",
          name: "폴인로즈 에디션",
          origin_price: 59900,
          discount_rate: 0.1,
          discounted_price: 53900,
          size: "L",
          created_at: "2021-03-15",
          images: {
            id: 1,
            img1:
              "https://user-images.githubusercontent.com/46774456/111411543-18d03900-871e-11eb-81a1-0d4cca7d83e3.jpg",
            img2:
              "https://user-images.githubusercontent.com/46774456/111411543-18d03900-871e-11eb-81a1-0d4cca7d83e3.jpg",
            img3:
              "https://user-images.githubusercontent.com/46774456/111411543-18d03900-871e-11eb-81a1-0d4cca7d83e3.jpg",
            img4:
              "https://user-images.githubusercontent.com/46774456/111411543-18d03900-871e-11eb-81a1-0d4cca7d83e3.jpg",
            img5:
              "https://user-images.githubusercontent.com/46774456/111411543-18d03900-871e-11eb-81a1-0d4cca7d83e3.jpg",
            img6:
              "https://user-images.githubusercontent.com/46774456/111411543-18d03900-871e-11eb-81a1-0d4cca7d83e3.jpg",
          },
          isFreeShipping: true,
        },
      ],
    };
  }

  componentDidMount() {
    fetch("http://10.58.7.81:8000/subscription/")
      .then(res => res.json())
      .then(data => {
        console.log("haha: ", data);
        this.setState({
          subscribeList: data.result,
        });
      });
  }

  render() {
    const { subscribeList } = this.state;
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
            <Link to="subscribe-detail">가벼운 S 꽃구독</Link>
          </li>
        </ul>
        <div className="detailContents">
          <div className="productThumnail">
            <img
              alt="꽃 이미지"
              src="https://user-images.githubusercontent.com/46774456/111404908-eff67680-8712-11eb-8f25-8ae36c32578e.png"
              className="thumnail"
            />
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
            <ProductInfo
              key={subscribeList[0].id}
              detail={subscribeList[0].detail}
              name={subscribeList[0].name}
              origin_price={subscribeList[0].origin_price}
              discount_rate={subscribeList[0].discount_rate}
              discounted_price={subscribeList[0].discounted_price}
              images={subscribeList[0].images[0]}
            />

            <div className="detailInfo">
              <span className="contents">정기구독 전상품</span>
              <p className="contentsHighlight">무료배송!</p>
              <ProductOption
                key={subscribeList[0].id}
                discounted_price={subscribeList[0].discounted_price}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default FlowerDetail;
