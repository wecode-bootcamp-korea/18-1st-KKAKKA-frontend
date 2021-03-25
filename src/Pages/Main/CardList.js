import React, { Component } from "react";

export class CardList extends Component {
  render() {
    console.log("props >>", this.props);
    return <div className="cardlist"></div>;
  }
}

export default CardList;
