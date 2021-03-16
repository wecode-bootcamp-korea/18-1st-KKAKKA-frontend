import React, { Component } from "react";
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
            <div className="detail-title">
              <span className="sub-title">꽃이 일상이 되는 가벼운 시작</span>
              <h2 className="title strong">가벼운 S 꽃구독</h2>
              <h2 className="title price">17,900</h2>
              <div className="detail-discount">
                <span className="discountPer">10</span>
                <span className="oldPrice sub-title">17,900</span>
                <h2 className="title price">17,900</h2>
              </div>
            </div>
            <div className="detail-info">
              <span className="contents">정기구독 전상품</span>
              <p className="contents-highlight">무료배송!</p>
              <div className="detail-option">
                <div className="subscribe-option">
                  <table>
                    <thead>
                      <th className="option-th-1"></th>
                      <th></th>
                    </thead>
                    <tbody>
                      <tr className="option-row-1">
                        <th>
                          <span className="contents">구독옵션</span>
                        </th>
                        <td>
                          <select>
                            <label for="option">구독 옵션</label>
                            <option className="selected">
                              구독기간을 선택해주세요
                            </option>
                            <option className="option">
                              정기구독(2주마다 자동결제)
                            </option>
                            <option className="option">1회 무료 체험</option>
                          </select>
                        </td>
                      </tr>
                      <tr className="option-row-2">
                        <th>
                          <span className="contents">수량</span>
                        </th>
                        <td>
                          <div className="detail-amount">
                            <button type="button" className="btn-amount">
                              -
                            </button>
                            <span>1</span>
                            <button type="button" className="btn-amount">
                              +
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="option-row-3">
                        <th>
                          <span className="contents">편지 추가</span>
                        </th>
                        <td>
                          <div className="letter-checkboxes">
                            <div className="letter-checkbox">
                              <input
                                type="radio"
                                className="checked"
                                data-value="True"
                              />
                              <span className="contents">
                                추가할게요 (+2,500원)
                              </span>
                            </div>
                            <div className="letter-checkbox">
                              <input
                                type="radio"
                                className="checked"
                                data-value="False"
                              />
                              <span className="contents">
                                추가하지 않을게요
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="detail-price">
                    <div>
                      <span className="contents">상품 가격</span>
                      <p className="sub-contents">구독 기간을 선택해주세요</p>
                    </div>
                    <span className="price">35,000</span>
                  </div>
                  <div className="total-price">
                    <p className="shipping-free">무료배송</p>
                    <div>
                      <p className="sub-contents">총 주문금액</p>
                      <h2 className="title price">35,000</h2>
                    </div>
                  </div>
                  <div className="detail-buttons">
                    <button type="button" className="detail-btn cart">
                      장바구니
                    </button>
                    <button type="button" className="detail-btn order">
                      바로 구독 신청
                    </button>
                  </div>
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
