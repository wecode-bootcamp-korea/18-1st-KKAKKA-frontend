import React, { Component } from "react";
import { config } from "../../../config.js";
import SubDetailCard from "./SubDetailCard";
import "./SubscribeDetail.scss";

class SubscribeDetail extends Component {
  constructor() {
    super();
    this.state = {
      subscribeList: [],
      subscribe_data: {
        isLogin: true,
        quantity: 1,
        subscribeOption: "", //monthly_plan
        delivery_date: "",
        hasLetter: true,
        price: 0,
        productPrice: "",
        totalPrice: "",
        modal: false,
        basketItem: [],
      },
    };
  }
  // post = {
  // account: 토큰 번호 또는 유저 아이디
  // subscription_id: this.props.match.params.id
  // monthly_plan:
  // delivery_date:
  // quantity :
  //}

  // fetch 후 alert 메세지용 //
  welcomeAlert() {
    alert("통신 성공!!!");
  }
  alreadyUserAlert() {
    alert("이미 존재함ㅠㅠ");
  }
  serverErrorAlert() {
    alert("알 수 없는 오류가 발생했습니다.");
  }

  // detail에서 order으로 이동시킬 fetch 함수 //
  goToOrder() {
    fetch(`${config.api}/subscription/${this.props.match.params.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        account: 1234,
        subscription_id: this.props.match.params.id,
        monthly_plan: this.state.monthly_plan,
        delivery_date: this.state.password,
        quantity: this.quantity,
      }),
    }).then(res => {
      if (res.status === 200) {
        this.welcomeAlert();
        this.props.history.push("/order");
      }
      if (res.status === 401) {
        this.alreadyUserAlert();
      }
      if (res.status === 400) {
        this.serverErrorAlert();
      }
    });
  }

  getData = () => {
    const token = localStorage.getItem("token");
    fetch(`${config.api}/subscription/${this.props.match.params.id}`, {
      headers: {
        Authorization: token,
      },
    })
      // .then((res) => console.log(res))
      .then(res => res.json())
      .then(data => {
        console.log("확인 :", data);
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

  goToPrevious = () => {
    if (this.props.match.params.id > 1) {
      this.props.history.push(`/subscription/${--this.props.match.params.id}`);
    }
  };

  goToNext = () => {
    if (this.props.match.params.id < 3) {
      this.props.history.push(`/subscription/${++this.props.match.params.id}`);
    }
  };

  render() {
    const { subscribeList } = this.state;
    return (
      <div>
        {subscribeList.id >= 0 && (
          <SubDetailCard
            key={subscribeList.id}
            id={subscribeList.id}
            introduction={subscribeList.introduction}
            name={subscribeList.name}
            price={subscribeList.price}
            description={subscribeList.description}
            image={subscribeList.image}
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
