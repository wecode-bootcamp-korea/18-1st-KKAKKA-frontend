import React, { Component } from "react";
import SubDetailCard from "./SubDetailCard";
class SubscribeDetail extends Component {
  goToPrevious = () => {
    this.props.history.push(
      `/subscribe-detail/${--this.props.match.params.id}`
    );
  };

  goToNext = () => {
    this.props.history.push(
      `/subscribe-detail/${++this.props.match.params.id}`
    );
  };

  render() {
    return (
      <div>
        <div
          className="url-marameters"
          onClick={() => this.props.history.push("/subscribe-list")}
        >
          <button type="button">hello</button>
        </div>
        <button type="button" onClick={this.goToPrevious}>
          Previous
        </button>
        <button type="button" onClick={this.goToNext}>
          Next
        </button>
        <SubDetailCard />
      </div>
    );
  }
}

export default SubscribeDetail;
