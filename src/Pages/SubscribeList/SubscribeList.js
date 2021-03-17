import React, { Component } from "react";
import SubChild from "./SubChild";
import "./SubscribeList.scss";

class SubscribeList extends Component {
  constructor() {
    super();
    this.state = {
      subscribeList: [],
    };
  }

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
    const { subscribeList } = this.state;
    return (
      <section className="sublist-container">
        <nav className="sub-toggle">
          <button className="toggleBtn" type="button">
            <h4 className="toggle">정기구독 상품</h4>
          </button>
          <button className="toggleBtn" type="button">
            <h4 className="toggle">이용 방법</h4>
          </button>
        </nav>

        {subscribeList.map(sub => {
          return (
            <SubChild
              key={sub.id}
              itemComment={sub.itemComment}
              productTitle={sub.prouductTitle}
              price={sub.price}
              contents={sub.contents}
              productImg={sub.productImg}
            />
          );
        })}
      </section>
    );
  }
}
export default SubscribeList;
