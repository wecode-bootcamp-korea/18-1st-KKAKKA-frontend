import React, { Component } from "react";
import Cards from "../Cards/Cards";
import "./CardList.scss";

export class CardList extends Component {
  render() {
    console.log("props >>", this.props);
    const propsKey = Object.keys(this.props);
    return (
      <div className="cardlist">
        {this.props[propsKey].map(list => {
          return <Cards key={list.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
