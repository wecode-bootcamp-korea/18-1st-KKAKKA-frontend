import React, { Component } from "react";
import { mockAPI } from "../../config";
import ListDatas from "./ListDatas";
import Footer from "../../Components/Footer/Footer";
import "./FlowerList.scss";
import Nav from "../../Components/Nav/Nav";
import SubNav from "../../Components/SubNav/SubNav";

class FlowerList extends Component {
  constructor() {
    super();
    this.state = {
      listDatas: [],
    };
  }

  componentDidMount = () => {
    fetch(mockAPI)
      .then(res => res.json())
      .then(data => {
        this.setState(
          {
            listDatas: data.result,
          },
          () => {
            console.log(data);
          }
        );
      });
  };

  startBrandnew = () => {
    const { listDatas } = this.state;

    this.setState({
      listDatas: listDatas.sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at);
      }),
    });
  };

  startHighPrice = () => {
    const { listDatas } = this.state;
    this.setState({
      listDatas: listDatas.sort((a, b) => a.orign_price - b.orign_price),
    });
  };

  startLowPrice = () => {
    const { listDatas } = this.state;
    this.setState({
      listDatas: listDatas.sort((a, b) => b.orign_price - a.orign_price),
    });
  };

  // startHighPrice = () => {
  //   const { listDatas } = this.state;
  //   this.setState({
  //     listDatas: listDatas.sort((a, b) => {
  //       let nameA = (1 - listDatas.discountRate) * a.originPrice;
  //       let nameB = (1 - listDatas.discountRate) * b.originPrice;
  //       if (nameA > nameB) {
  //         return nameA;
  //       } else {
  //         return nameB;
  //       }
  //     }),
  //   });
  // };

  render() {
    const { listDatas } = this.state;
    return (
      <>
        <Nav />
        <SubNav />
        <div className="flowerListMain">
          <div className="sortButton">
            <button class="startBrandnew" onClick={this.startBrandnew}>
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
                  createdAt={list.created_at}
                  detail={list.detail}
                  discountRate={list.discount_rate}
                  discountedPrice={list.discounted_price}
                  id={list.id}
                  image={list.image}
                  name={list.name}
                  originPrice={list.orign_price}
                  size={list.size}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default FlowerList;
