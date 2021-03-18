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
  // {this.state.currentId === 1 && <SubCard />};
  // {this.state.currentId === 2 && <SubStart />};
  render() {
    const { subscribeList } = this.state;
    return (
      <section className="sublistContainer">
        <nav className="subToggle">
          <button
            className="toggleBtn"
            onclick={() => this.clickHandler(1)}
            type="button"
          >
            <h4 className="toggle">정기구독 상품</h4>
          </button>
          <button
            className="toggleBtn"
            onclick={() => this.clickHandler(2)}
            type="button"
          >
            <h4 className="toggle">이용 방법</h4>
          </button>
        </nav>
        {subscribeList.map(sub => {
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
        <SubStart />
      </section>
    );
  }
}
export default SubscribeList;
