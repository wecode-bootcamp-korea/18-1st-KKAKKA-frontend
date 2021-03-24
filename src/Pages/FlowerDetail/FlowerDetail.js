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

  changeDate = (date, event) => {
    let updateDate = {
      ...this.state.productData,
      delivery_date: date,
    };
    this.setState({ productData: updateDate });
  };

  render() {
    const {
      id,
      detail,
      name,
      size,
      orign_price,
      discount_rate,
      discounted_price,
      image,
    } = this.state.productList;
    const { productData } = this.state;
    return (
      <section className="detailContainer">
        <ul className="categoryNav">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/subscription">쿠키박스</Link>
          </li>
          <li>
            <Link to={`./${this.props.match.params.id}`}>{name}</Link>
          </li>
        </ul>
        <div className="detailContents">
          <div className="productThumnail">
            <img
              alt="쿠키 이미지"
              src={image && image.length > 0 && image[0]}
            />
            <div className="detailSlider">
              <img
                alt="쿠키 미니 썸네일1"
                src={image && image.length > 0 && image[3]}
                className="thumnailMini"
              />
              <img
                alt="쿠키 미니 썸네일2"
                src={image && image.length > 0 && image[2]}
                className="thumnailMini"
              />
              <img
                alt="쿠키 미니 썸네일3"
                src={image && image.length > 0 && image[1]}
                className="thumnailMini"
              />

              <img
                alt="쿠키 미니 썸네일4"
                src={image && image.length > 0 && image[2]}
                className="thumnailMini"
              />

              <img
                alt="쿠키 미니 썸네일5"
                src={image && image.length > 0 && image[4]}
                className="thumnailMini"
              />
            </div>
          </div>

          <div className="productDetailRight">
            <ProductInfo
              key={id}
              detail={detail}
              name={name}
              size={size}
              origin_price={orign_price}
              discount_rate={discount_rate}
              discounted_price={discounted_price}
              image={image}
            />

            <div className="detailInfo">
              <span className="contents"> 3만원 이상 구매 시</span>
              <p className="contentsHighlight">무료배송!</p>
              <ProductOption
                key={id}
                discounted_price={discounted_price}
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
