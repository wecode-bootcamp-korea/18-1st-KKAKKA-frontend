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
    fetch("http://10.58.7.212:8000/subscription/")
      .then(res => res.json())
      .then(data => {
        this.setState({
          subscribeList: data.result,
        });
      });
  }

  render() {
    const { subscribeList, currentId } = this.state;
    return (
      <section className="sublistContainer">
        <nav className="subToggle">
          <ul className="toggleBtns">
            <li
              className={`toggleBtn ${currentId === 1 && "selected"}`}
              onClick={() => this.clickHandler(1)}
            >
              정기구독 상품
            </li>
            <li
              className={`toggleBtn ${currentId === 2 && "selected"}`}
              onClick={() => this.clickHandler(2)}
            >
              이용 방법
            </li>
          </ul>
        </nav>
        <div className="contentsBox">
          {currentId === 2 && <SubStart />}
          {currentId === 1 &&
            subscribeList.map(sub => {
              return (
                <SubCard
                  key={sub.id}
                  id={sub.id}
                  introduction={sub.introduction}
                  name={sub.name}
                  price={sub.price}
                  description={sub.description}
                  image={sub.image}
                />
              );
            })}
        </div>
      </section>
    );
  }
}
export default SubscribeList;
