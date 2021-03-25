import React, { Component } from "react";
import { config } from "../../../config.js";
import SubDetailCard from "./SubDetailCard";
import "./SubscribeDetail.scss";

class SubscribeDetail extends Component {
  constructor() {
    super();
    this.state = {
      subscribeList: [],
      subscribeData: {
        isLogin: true,
        quantity: 1,
        subscribeOption: "", //monthly_plan
        delivery_date: "",
        hasLetter: true,
        productPrice: "",
        totalPrice: "",
        modal: false,
        basketItem: [],
      },
    };
  }

  // detail에서 order으로 이동시킬 fetch 함수 //
  goToOrder = () => {
    fetch(`${config.api}/order/subscription/${this.props.match.params.id}`, {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.BmykDxMZydx7PPn-H89k04E3wCKCya3c4nwh8zxUqMU",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        account: 1,
        option: 1,
        monthly_plan: this.state.subscribeData.subscribeOption,
        delivery_date: this.state.subscribeData.delivery_date,
        quantity: this.state.subscribeData.quantity,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result))
      .then(alert("구매 페이지로 이동합니다"));
  };
  // .then(res => {
  //   console.log("확인:", res);
  //   if (res.status === 200) {
  //     this.welcomeAlert();
  //     this.props.history.push(
  //       `${config.api}/order/susbscription/${this.props.match.params.id}`
  //     );
  //   }
  //   if (res.status === 401) {
  //     this.alreadyUserAlert();
  //   }
  //   if (res.status === 400) {

  getData = () => {
    fetch("http://localhost:3000/data/subscribeData.json", {
      // fetch(`${config.api}/subscription/${this.props.match.params.id}`, {
      // const token = localStorage.getItem("token");
      // fetch(`${config.api}/subscription/${this.props.match.params.id}`, {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.BmykDxMZydx7PPn-H89k04E3wCKCya3c4nwh8zxUqMU",
      },
    })
      // .then((res) => console.log(res))
      // fetch(`${config.api}/subscription`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          subscribeList: data.result[0],
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

  changeSubOption = e => {
    let updateOption = {
      ...this.state.subscribeData,
      subscribeOption: e.target.value,
    };
    let resetCount = {
      ...this.state.subscribeData,
      quantity: 1,
      subscribeOption: e.target.value,
    };
    this.setState({ subscribeData: updateOption });
    if (e.target.value !== "정기결제") {
      this.setState({ subscribeData: resetCount });
    }
  };

  addCount = () => {
    const { subscribeOption } = this.state.subscribeData;
    if (
      subscribeOption === "정기구독" &&
      this.state.subscribeData.quantity < 10
    ) {
      let countUp = {
        ...this.state.subscribeData,
        quantity: this.state.subscribeData.quantity + 1,
      };
      this.setState({
        subscribeData: countUp,
      });
    }
  };

  minusCount = () => {
    const { subscribeOption } = this.state.subscribeData;
    if (
      subscribeOption === "정기구독" &&
      this.state.subscribeData.quantity > 1
    ) {
      let countDown = {
        ...this.state.subscribeData,
        quantity: this.state.subscribeData.quantity - 1,
      };
      this.setState({
        subscribeData: countDown,
      });
    }
  };

  chkHasLetter = () => {
    let updateLetter = {
      ...this.state.subscribeData,
      hasLetter: !this.state.subscribeData.hasLetter,
    };
    this.setState({
      subscribeData: updateLetter,
    });
  };

  changePrice = () => {
    let updatePrice = {
      ...this.state.subscribeData,
      productPrice:
        this.state.subscribeData.price * this.state.subscribeData.quantity,
    };
    this.setState({
      subscribeData: updatePrice,
    });
  };

  changeDate = (date, event) => {
    let updateDate = {
      ...this.state.subscribeData,
      delivery_date: date,
    };
    this.setState({ subscribeData: updateDate });
  };

  // 추가구현 : 이전 이후 상품 보기
  // goToPrevious = () => {
  //   if (this.props.match.params.id > 1) {
  //     this.props.history.push(`/subscription/${--this.props.match.params.id}`);
  //   }
  // };

  // goToNext = () => {
  //   if (this.props.match.params.id < 3) {
  //     this.props.history.push(`/subscription/${++this.props.match.params.id}`);
  //   }
  // };

  render() {
    const {
      id,
      introduction,
      name,
      price,
      description,
      image,
    } = this.state.subscribeList;
    return (
      <div>
        {id >= 0 && (
          <SubDetailCard
            key={id}
            id={id}
            introduction={introduction}
            name={name}
            price={price}
            description={description}
            image={image}
            subscribeData={this.state.subscribeData}
            changeDate={this.changeDate}
            addCount={this.addCount}
            minusCount={this.minusCount}
            chkHasLetter={this.chkHasLetter}
            changeSubOption={this.changeSubOption}
            goToOrder={this.goToOrder}
          />
        )}
        <div className="urlButtons">
          <button
            type="button"
            className="urlButton"
            onClick={this.goToPrevious}
          >
            이전 상품
          </button>
          <button type="button" className="urlButton" onClick={this.goToNext}>
            다음 상품
          </button>
        </div>
      </div>
    );
  }
}

export default SubscribeDetail;
