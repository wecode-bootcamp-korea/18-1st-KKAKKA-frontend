import React, { Component } from "react";
import SubDetailCard from "./SubDetailCard";
import "./SubscribeDetail.scss";

class SubscribeDetail extends Component {
  state = {
    subscribeList: [],
  };

  getData = () => {
    fetch(`/data/subscribeData.json/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => this.setState({ subscribeList: res }));
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
        `/subscribe-detail/${--this.props.match.params.id}`
      );
    }
  };

  goToNext = () => {
    if (this.props.match.params.id < 3) {
      this.props.history.push(
        `/subscribe-detail/${++this.props.match.params.id}`
      );
    }
  };

  render() {
    console.log("SubDetailDetail:", this.props);
    const { subscribeList } = this.state;
    return (
      <div>
        <div
          className="urlParameters"
          onClick={() => this.props.history.push("/subscribe-list")}
        >
          <button type="button" className="urlButton">
            리스트페이지
          </button>
        </div>
        <SubDetailCard
          id={subscribeList.id}
          itemComment={subscribeList.detail}
          prouductTitle={subscribeList.name}
          price={subscribeList.origin_price}
          contents={subscribeList.contents}
          productImg={subscribeList.image}
        />
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
