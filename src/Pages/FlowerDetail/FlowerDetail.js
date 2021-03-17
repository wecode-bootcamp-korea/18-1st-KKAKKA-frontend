import React, { Component } from "react";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import ProductOption from "./Components/ProductOption/ProductOption";
import ProductSum from "./Components/ProductSum/ProductSum";
import ProductBtn from "./Components/ProductBtn/ProductBtn";
import "./FlowerDetail.scss";

class FlowerDetail extends Component {
  render() {
    return (
      <section className="detail-container">
        <ul className="category-nav">
          <li>HOME</li>
          <li>꽃 정기구독</li>
          <li>가벼운 S 꽃구독</li>
        </ul>
        <div className="detail-contents">
          <div className="product-thumnail">
            <img
              alt="꽃 이미지"
              src="https://lh3.googleusercontent.com/proxy/D36gvJKAbmz-6WstI8gQRBOQVfu1IxXTczck8KN9Z3BJ9v1HVqi2zoy_fzxxSRGVMmnVcgiRQcqmYEuZ4lkP84ZYEpEYdZwObSDm_TMrHPaTTJlz0i6nuQDdtG86xmfMPM-mjVxRz3DUv8HVwN4ImfYD8PhanNwCmJ6dG7GjWlDFABjMlw2lwgfhgHWd4AEHVK81rYze_TrvjfAz37p2wZ4NwZuAS2LDJTjrKjlEMzkRzfwm9u4Lu5E9Q9XA0-vuZx9MLbwP_WYnkeq4gqsaG9cWTFZiCK5krMDnWBPyoidj1sjvGQgJaqB0q4ADSjIZRs9hGV4PE3maHv5uR55kNt0"
              className="thumnail"
            />
            <div className="detail-slider">
              <img
                alt="꽃 미니 썸네일1"
                src="https://i.pinimg.com/originals/37/d3/56/37d3567b0aacc4d36b4f35e2bf91f7df.jpg"
                className="thumnail-mini"
              />
              <img
                alt="꽃 미니 썸네일2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yfsNpsJUIk_Rcywam0WEW3zuTk_yuELzRQ&usqp=CAU"
                className="thumnail-mini"
              />
              <img
                alt="꽃 미니 썸네일3"
                src="https://lh3.googleusercontent.com/proxy/D36gvJKAbmz-6WstI8gQRBOQVfu1IxXTczck8KN9Z3BJ9v1HVqi2zoy_fzxxSRGVMmnVcgiRQcqmYEuZ4lkP84ZYEpEYdZwObSDm_TMrHPaTTJlz0i6nuQDdtG86xmfMPM-mjVxRz3DUv8HVwN4ImfYD8PhanNwCmJ6dG7GjWlDFABjMlw2lwgfhgHWd4AEHVK81rYze_TrvjfAz37p2wZ4NwZuAS2LDJTjrKjlEMzkRzfwm9u4Lu5E9Q9XA0-vuZx9MLbwP_WYnkeq4gqsaG9cWTFZiCK5krMDnWBPyoidj1sjvGQgJaqB0q4ADSjIZRs9hGV4PE3maHv5uR55kNt0"
                className="thumnail-mini"
              />

              <img
                alt="꽃 미니 썸네일4"
                src="https://lh3.googleusercontent.com/proxy/D36gvJKAbmz-6WstI8gQRBOQVfu1IxXTczck8KN9Z3BJ9v1HVqi2zoy_fzxxSRGVMmnVcgiRQcqmYEuZ4lkP84ZYEpEYdZwObSDm_TMrHPaTTJlz0i6nuQDdtG86xmfMPM-mjVxRz3DUv8HVwN4ImfYD8PhanNwCmJ6dG7GjWlDFABjMlw2lwgfhgHWd4AEHVK81rYze_TrvjfAz37p2wZ4NwZuAS2LDJTjrKjlEMzkRzfwm9u4Lu5E9Q9XA0-vuZx9MLbwP_WYnkeq4gqsaG9cWTFZiCK5krMDnWBPyoidj1sjvGQgJaqB0q4ADSjIZRs9hGV4PE3maHv5uR55kNt0"
                className="thumnail-mini"
              />

              <img
                alt="꽃 미니 썸네일5"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1qCVTfj9IReqU0VvafDxKsC9Xukz44hqWA&usqp=CAU"
                className="thumnail-mini"
              />
            </div>
          </div>
          <div className="product-detail-right">
            <ProductInfo />
            <div className="detail-info">
              <span className="contents">정기구독 전상품</span>
              <p className="contents-highlight">무료배송!</p>
              <div className="detail-option">
                <div className="subscribe-option">
                  <ProductOption />
                  <ProductSum />
                  <ProductBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default FlowerDetail;
