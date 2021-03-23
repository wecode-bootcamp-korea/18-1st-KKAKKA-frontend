import React, { Component } from "react";
import SubDetailCard from "./SubDetailCard";
import "./SubscribeDetail.scss";

class SubscribeDetail extends Component {
  constructor() {
    super();
    this.state = {
      subscribeList: [],
    };
  }

  getData = () => {
    fetch(
      `http://10.58.7.212:8000/subscription/contents/${this.props.match.params.id}`
    )
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
      this.props.history.push(
        `/subscription/contents/${--this.props.match.params.id}`
      );
    }
  };

  goToNext = () => {
    if (this.props.match.params.id < 3) {
      this.props.history.push(
        `/subscription/contents/${++this.props.match.params.id}`
      );
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
