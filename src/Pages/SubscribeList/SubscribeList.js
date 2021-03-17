import React, { Component } from "react";
import { Link } from "react-router-dom";
import SubscribeDetail from "./SubscribeDetail/SubscribeDetail";

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
      <div>
        <SubscribeDetail
          key={subscribeList.id}
          itemComment={subscribeList.itemComment}
          prouductTitle={subscribeList.prouductTitle}
          price={subscribeList.price}
          contents={subscribeList.contents}
          productImg={subscribeList.productImg}
        />
        <Link></Link>
      </div>
    );
  }
}
export default SubscribeList;
