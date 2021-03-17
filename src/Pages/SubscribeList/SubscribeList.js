import React, { Component } from "react";
import { Link } from "react-router-dom";
import SubscribeDetail from "./SubscribeDetail/SubscribeDetail";
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

        <article className="sublist-box">
          <div className="sub-image-box">
            <img
              alt="정기구독 상품1"
              src="https://user-images.githubusercontent.com/46774456/111404908-eff67680-8712-11eb-8f25-8ae36c32578e.png"
              className="sub-image"
            />
          </div>
          <div className="detail-title">
            <span className="sub-title">꽃이 일상이 되는 가벼운 시작</span>
            <h2 className="title strong">가벼운 S 꽃구독</h2>
            <h2 className="title price">17,900</h2>
            <div className="detail-discount">
              <span className="discountPer">10</span>
              <span className="oldPrice sub-title">17,900</span>
              <h2 className="title price">17,900</h2>
            </div>
            <div className="content-box">
              <span className="detail-content">
                2주에 한 번, 꽃이 일상이 되는 가벼운 시작
              </span>
              <span className="detail-content">
                작지만 그 계절 가장 예쁜 꽃으로 만들었어요.
              </span>
              <span className="detail-content">
                나에게, 사랑하는 사람에게 작은 꽃다발이 주는 행복을 전해보세요.
              </span>
            </div>

            <span className="shipping-free">무료배송</span>
          </div>
          <SubscribeDetail
            key={subscribeList.id}
            itemComment={subscribeList.itemComment}
            prouductTitle={subscribeList.prouductTitle}
            price={subscribeList.price}
            contents={subscribeList.contents}
            productImg={subscribeList.productImg}
          />
          <Link></Link>
        </article>

        <article className="sublist-box">
          <div className="sub-image-box">
            <img
              alt="정기구독 상품1"
              src="https://user-images.githubusercontent.com/46774456/111404908-eff67680-8712-11eb-8f25-8ae36c32578e.png"
              className="sub-image"
            />
          </div>
          <div className="detail-title">
            <span className="sub-title">꽃이 일상이 되는 가벼운 시작</span>
            <h2 className="title strong">가벼운 S 꽃구독</h2>
            <h2 className="title price">17,900</h2>
            <div className="detail-discount">
              <span className="discountPer">10</span>
              <span className="oldPrice sub-title">17,900</span>
              <h2 className="title price">17,900</h2>
            </div>
            <div className="content-box">
              <span className="detail-content">
                2주에 한 번, 꽃이 일상이 되는 가벼운 시작
              </span>
              <span className="detail-content">
                작지만 그 계절 가장 예쁜 꽃으로 만들었어요.
              </span>
              <span className="detail-content">
                나에게, 사랑하는 사람에게 작은 꽃다발이 주는 행복을 전해보세요.
              </span>
            </div>

            <span className="shipping-free">무료배송</span>
          </div>
          <SubscribeDetail
            key={subscribeList.id}
            itemComment={subscribeList.itemComment}
            prouductTitle={subscribeList.prouductTitle}
            price={subscribeList.price}
            contents={subscribeList.contents}
            productImg={subscribeList.productImg}
          />
          <Link></Link>
        </article>

        <article className="sublist-box">
          <div className="sub-image-box">
            <img
              alt="정기구독 상품1"
              src="https://user-images.githubusercontent.com/46774456/111404908-eff67680-8712-11eb-8f25-8ae36c32578e.png"
              className="sub-image"
            />
          </div>
          <div className="detail-title">
            <span className="sub-title">꽃이 일상이 되는 가벼운 시작</span>
            <h2 className="title strong">가벼운 S 꽃구독</h2>
            <h2 className="title price">17,900</h2>
            <div className="detail-discount">
              <span className="discountPer">10</span>
              <span className="oldPrice sub-title">17,900</span>
              <h2 className="title price">17,900</h2>
            </div>
            <div className="content-box">
              <span className="detail-content">
                2주에 한 번, 꽃이 일상이 되는 가벼운 시작
              </span>
              <span className="detail-content">
                작지만 그 계절 가장 예쁜 꽃으로 만들었어요.
              </span>
              <span className="detail-content">
                나에게, 사랑하는 사람에게 작은 꽃다발이 주는 행복을 전해보세요.
              </span>
            </div>

            <span className="shipping-free">무료배송</span>
          </div>
          <SubscribeDetail
            key={subscribeList.id}
            itemComment={subscribeList.itemComment}
            prouductTitle={subscribeList.prouductTitle}
            price={subscribeList.price}
            contents={subscribeList.contents}
            productImg={subscribeList.productImg}
          />
          <Link></Link>
        </article>
      </section>
    );
  }
}
export default SubscribeList;
