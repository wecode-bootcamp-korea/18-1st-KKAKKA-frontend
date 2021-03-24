import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { config } from "../../config.js";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import ProductOption from "./Components/ProductOption/ProductOption";
import "./FlowerDetail.scss";

class FlowerDetail extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      productData: {
        quantity: 1,
        delivery_date: "",
        hasLetter: true,
        price: 0,
        productPrice: "",
        totalPrice: "",
        basketItem: [],
      },
    };
  }

  //  baskerItem 변경 시

  getData = () => {
    fetch("http://localhost:3000/data/productData.json")
      // fetch(`${config.api}/product/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data.result[0],
        });
      });
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getData();
    }
  }
  // const newArr = {...this.state.productData, delivery_date: e.target.value};
  // this.setState({ productData: newArr});
  // 여기부터 수정 필요

  addCount = () => {
    if (this.state.productData.quantity < 10) {
      let countUp = {
        ...this.state.productData,
        quantity: this.state.productData.quantity + 1,
      };
      this.setState({
        productData: countUp,
      });
    }
  };

  minusCount = () => {
    if (this.state.productData.quantity > 1) {
      let countDown = {
        ...this.state.productData,
        quantity: this.state.productData.quantity - 1,
      };
      this.setState({
        productData: countDown,
      });
    }
  };

  chkHasLetter = () => {
    let updateLetter = {
      ...this.state.productData,
      hasLetter: !this.state.productData.hasLetter,
    };
    this.setState({
      productData: updateLetter,
    });
  };

  changePrice = () => {
    let updatePrice = {
      ...this.state.productData,
      productPrice:
        this.state.productData.price * this.state.productData.quantity,
    };
    this.setState({
      productData: updatePrice,
    });
  };
  // const newArr = {...this.state.productData, delivery_date: e.target.value};
  // this.setState({ productData: newArr});
  changeDate = (date, event) => {
    let updateDate = {
      ...this.state.productData,
      delivery_date: date,
    };
    this.setState({ productData: updateDate });
    console.log("value:", date);
    console.log("e:", event);
    console.log("e:", this.state.productData.delivery_date);
  };
  ////여기까지 수정 완료

  render() {
    const { productList, productData } = this.state;
    return (
      <section className="detailContainer">
        <ul className="categoryNav">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/subscription">꽃다발</Link>
          </li>
          <li>
            <Link to={`./${this.props.match.params.id}`}>
              {productList.name}
            </Link>
          </li>
        </ul>
        <div className="detailContents">
          <div className="productThumnail">
            <img
              alt="꽃 이미지"
              src={productList.id > 0 ? productList.image[0] : ""}
              className="thumnail"
            />
            <div className="detailSlider">
              <img
                alt="꽃 미니 썸네일1"
                src={productList.id >= 0 ? productList.image[3] : ""}
                className="thumnailMini"
              />
              <img
                alt="꽃 미니 썸네일2"
                src={productList.id >= 0 ? productList.image[2] : ""}
                className="thumnailMini"
              />
              <img
                alt="꽃 미니 썸네일3"
                src={productList.id >= 0 ? productList.image[4] : ""}
                className="thumnailMini"
              />

              <img
                alt="꽃 미니 썸네일4"
                src={productList.id >= 0 ? productList.image[2] : ""}
                className="thumnailMini"
              />

              <img
                alt="꽃 미니 썸네일5"
                src={productList.id >= 0 ? productList.image[1] : ""}
                className="thumnailMini"
              />
            </div>
          </div>

          <div className="productDetailRight">
            <ProductInfo
              key={productList.id}
              detail={productList.detail}
              name={productList.name}
              size={productList.size}
              origin_price={productList.orign_price}
              discount_rate={productList.discount_rate}
              discounted_price={productList.discounted_price}
              image={productList.images}
            />

            <div className="detailInfo">
              <span className="contents"> 3만원 이상 구매 시</span>
              <p className="contentsHighlight">무료배송!</p>
              <ProductOption
                key={productList.id}
                discounted_price={productList.discounted_price}
                productData={productData}
                changeDate={this.changeDate}
                addCount={this.addCount}
                minusCount={this.minusCount}
                chkHasLetter={this.chkHasLetter}
                changePrice={this.changePrice}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default FlowerDetail;
