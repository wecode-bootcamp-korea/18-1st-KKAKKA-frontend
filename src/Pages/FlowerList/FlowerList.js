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
        //console.log(data);
        this.setState({
          listDatas: data,
        });
      });
  }

  // startLowPrice = (a,b) => {
  //   this.setState({
  //     listDatas: this.state.listDatas.sort(a.{resultPrice}-(b.{resultPrice}),

  //   });
  // };

  // fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
  // .then((data) => {
  //     data.sort((a, b) => a.userId - b.userId);
  //     this.setState({data: data});

  // });

  //   listDatas.sort((a, b) => {
  //     return parseFloat(a.price) - parseFloat(b.price);
  // });
  // test.sort(function(a,b) {

  //   return parseFloat(a.order) - parseFloat(b.order);

  // });

  // var sortingNumbers1 = (a,b) => {

  // 	return (a-b);

  // }

  render() {
    const { listDatas } = this.state;

    return (
      <div className="flowerListMain">
        <button class="startLowPrice" onClick={this.startLowPrice}>
          가격낮은순
        </button>

        <div class="sort">
          <div class="select_sort_product">
            <span class="blind">상품 정렬 방식 :</span>
            <span class="selected">신상품순</span>
            <button type="button" class="opener">
              <span class="blind">정렬방식 변경</span>
            </button>
            <ul class="other">
              <li class="type">
                <button
                  type="button"
                  class="change"
                  data-text="추천순"
                  data-code="PICK"
                >
                  추천순<span class="blind">정렬</span>
                </button>
              </li>
              <li class="type">
                <button
                  type="button"
                  class="change"
                  data-text="인기순"
                  data-code="BEST"
                >
                  인기순<span class="blind">정렬</span>
                </button>
              </li>
              <li class="type is_select">
                <button
                  type="button"
                  class="change"
                  data-text="신상품순"
                  data-code="NEW"
                >
                  신상품순<span class="blind">정렬</span>
                </button>
              </li>
            </ul>
          </div>
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
