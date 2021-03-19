import React, { Component } from "react";
import ListDatas from "./ListDatas";
import "./FlowerList.scss";

class FlowerList extends Component {
  constructor() {
    super();
    this.state = {
      listDatas: [],
    };
  }

  componentDidMount() {
    fetch("/data/FlowerList.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          listDatas: data,
        });
      });
  }

  startBrandnew = () => {
    const { listDatas } = this.state;
    this.setState({
      listDatas: listDatas.sort((a, b) => a.id - b.id),
    });
  };

  startLowPrice = () => {
    const { listDatas } = this.state;
    this.setState({
      listDatas: listDatas.sort((a, b) => a.resultPrice - b.resultPrice),
    });
  };

  startHighPrice = () => {
    const { listDatas } = this.state;
    this.setState({
      listDatas: listDatas.sort((a, b) => b.resultPrice - a.resultPrice),
    });
  };
  // startLowPrice = e => {
  //   this.state.listDatas.sort((a, b) => a - b);
  // };

  render() {
    console.log(this.state.listDatas);
    const { listDatas } = this.state;

    return (
      <div className="flowerListMain">
        <div className="sortButton">
          <button class="startLowPrice" onClick={this.startBrandnew}>
            신상품순
          </button>
          <button class="startLowPrice" onClick={this.startLowPrice}>
            가격낮은순
          </button>
          <button class="startHighPrice" onClick={this.startHighPrice}>
            가격높은순
          </button>
        </div>
        <div className="list">
          {listDatas.map(list => {
            return (
              <ListDatas
                key={list.id}
                id={list.id}
                itemComment={list.itemComment}
                prouductTitle={list.prouductTitle}
                price={list.price}
                isDiscount={list.isDiscount}
                discountPer={list.discountPer}
                resultPrice={list.resultPrice}
                productLimit={list.productLimit}
                size={list.size}
                updateDate={list.updateDate}
                productImg={list.productImg}
                isFreeShipping={list.isFreeShipping}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default FlowerList;
