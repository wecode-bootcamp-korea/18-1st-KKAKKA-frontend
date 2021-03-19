import React, { Component } from "react";
import SubCard from "./SubCard/SubCard";
import SubStart from "./SubStart/SubStart";
import "./SubscribeList.scss";

class SubscribeList extends Component {
  constructor() {
    super();
    this.state = {
      subscribeList: [],
      currentId: 1,
    };
  }

  clickHandler = id => {
    this.setState({ currentId: id });
    console.log(this.state.currentId);
  };

  componentDidMount() {
    fetch("/data/subscribeData.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          subscribeList: data,
        });
      });
  }

  render() {
    console.log("SubscribeList");
    const { subscribeList } = this.state;
    return (
      <section className="sublistContainer">
        <nav className="subToggle">
          <ul className="toggleBtns">
            <li
              className={
                this.state.currentId === 1 ? "toggleBtn selected" : "toggleBtn"
              }
              onClick={() => this.clickHandler(1)}
            >
              정기구독 상품
            </li>
            <li
              className={
                this.state.currentId === 2 ? "toggleBtn selected" : "toggleBtn"
              }
              onClick={() => this.clickHandler(2)}
            >
              이용 방법
            </li>
          </ul>
        </nav>
        <div className="contentsBox">
          {this.state.currentId === 2 && <SubStart />}
          {this.state.currentId === 1 &&
            subscribeList.map(sub => {
              return (
                <SubCard
                  key={sub.id}
                  id={sub.id}
                  itemComment={sub.itemComment}
                  productTitle={sub.prouductTitle}
                  price={sub.price}
                  contents={sub.contents}
                  productImg={sub.productImg}
                />
              );
            })}
        </div>
      </section>
    );
  }
}
export default SubscribeList;
