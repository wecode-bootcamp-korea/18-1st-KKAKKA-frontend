import React, { Component } from "react";
import "./ProductOption.scss";

class ProductOption extends Component {
  render() {
    // const { } = this.props;
    return (
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
                <option className="selected">구독기간을 선택해주세요</option>
                <option className="option">정기구독(2주마다 자동결제)</option>
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
                  <input type="radio" className="checked" data-value="True" />
                  <span className="contents">추가할게요 (+2,500원)</span>
                </div>
                <div className="letter-checkbox">
                  <input type="radio" className="checked" data-value="False" />
                  <span className="contents">추가하지 않을게요</span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ProductOption;
