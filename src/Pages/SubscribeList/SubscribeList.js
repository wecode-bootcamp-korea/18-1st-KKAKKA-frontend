import React, { Component } from "react";
import SubChild from "./SubChild";
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
  // {this.state.currentId === 1 && <SubChild />};
  // {this.state.currentId === 2 && <SubChild />};
  render() {
    const { subscribeList } = this.state;
    return (
      <>
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
        <section className="subStart">
          <ol>
            <li className="subSteplist">
              <div className="steplistImg">
                <img
                  alt="정기구독 방법 step 1"
                  src="https://user-images.githubusercontent.com/46774456/111411544-1a016600-871e-11eb-91a4-4ef2f03121f0.png"
                  className="subStep"
                />
              </div>
              <strong className="stepNum">01</strong>
              <span>
                정기구독 상품 중{" "}
                <strong>
                  원하시는
                  <br />꽃 사이즈
                </strong>
                를 선택해주세요.
              </span>
            </li>
            <li className="subSteplist">
              <div className="steplistImg">
                <img
                  alt="정기구독 방법 step 2"
                  src="https://user-images.githubusercontent.com/46774456/111411544-1a016600-871e-11eb-91a4-4ef2f03121f0.png"
                  className="subStep"
                />
              </div>
              <strong className="stepNum">02</strong>
              <span>
                꽃을{" "}
                <strong>
                  구독하고 싶은
                  <br />총 기간
                </strong>
                을 선택해주세요.
              </span>
            </li>
            <li className="subSteplist">
              <div className="steplistImg">
                <img
                  alt="정기구독 방법 step 3"
                  src="https://user-images.githubusercontent.com/46774456/111411544-1a016600-871e-11eb-91a4-4ef2f03121f0.png"
                  className="subStep"
                />
              </div>
              <strong className="stepNum">03</strong>
              <span>
                꽃을 <strong>받고 싶은 요일</strong>을
                <br />
                선택해주세요.
              </span>
            </li>
            <li className="subSteplist">
              <div className="steplistImg">
                <img
                  alt="정기구독 방법 step 4"
                  src="https://user-images.githubusercontent.com/46774456/111411544-1a016600-871e-11eb-91a4-4ef2f03121f0.png"
                  className="subStep"
                />
              </div>
              <strong className="stepNum">04</strong>
              <span>
                <strong>
                  2주에 한번 그 계절 가장
                  <br />
                  이쁜 꽃
                </strong>
                으로 찾아갈게요.
              </span>
            </li>
          </ol>
          <div className="subTip">
            <span className="changeDate">
              혹시, 일정을 변경하고 싶으신가요? 마이페이지 혹은 고객센터를 통해
              미리 일정을 변경하실 수 있습니다.
            </span>
          </div>
        </section>
      </>
    );
  }
}
export default SubscribeList;
