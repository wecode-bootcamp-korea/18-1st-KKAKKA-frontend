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

  // fetchData() {
  //   fetch(`API주소/${this.props.match.params.id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         subscribeList: data,
  //       });
  //     });
  // }

  // componentDidMount() {
  //   this.fetchData();
  // }

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
        {subscribeList.map((sub, index) => (
          <SubDetailCard
            key={index}
            id={sub.id}
            itemComment={sub.itemComment}
            prouductTitle={sub.prouductTitle}
            price={sub.price}
            contents={sub.contents}
            productImg={sub.productImg}
          />
        ))}
        <div className="urlButtons">
          <button
            type="button"
            className="urlButton"
            onClick={this.goToPrevious}
          >
            이전 페이지
          </button>
          <button type="button" className="urlButton" onClick={this.goToNext}>
            다음 페이지
          </button>
        </div>
      </div>
    );
  }
}

export default SubscribeDetail;
