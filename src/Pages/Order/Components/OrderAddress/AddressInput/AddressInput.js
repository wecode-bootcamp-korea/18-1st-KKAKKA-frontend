import React, { Component } from "react";
import "./AddressInput.scss";

class AddressInput extends Component {
  constructor() {
    super();
    this.state = {
      orderList: [],
      receiverName: "",
      receiverPhone: "",
      postcode: "",
      address: "",
      detailAddress: "",
      senderName: "",
      saveAddress: true,
      beSave: true,
    };
  }
  chkSave = () => {};

  render() {
    const { beSave } = this.state;
    return (
      <div className="addInputContainer">
        <table>
          <thead>
            <th className="optionTh1"></th>
            <th className="optionTh2"></th>
          </thead>
          <tbody>
            <tr>
              <th>
                <span className="title">수령인 이름</span>
              </th>
              <td>
                <input className="contents" id="name" type="text" name="name" />
              </td>
            </tr>
            <tr>
              <th>
                <span className="title">수령인 연락처</span>
              </th>
              <td>
                <input className="contents" id="name" type="text" name="name" />
              </td>
            </tr>
            <tr>
              <th>
                <span className="title">우편 번호</span>
              </th>
              <td>
                <input className="contents" id="name" type="text" name="name" />
              </td>
            </tr>
            <tr>
              <th>
                <span className="title">주소</span>
              </th>
              <td>
                <input className="contents" id="name" type="text" name="name" />
              </td>
            </tr>
            <tr>
              <th>
                <span className="title">상세주소</span>
              </th>
              <td>
                <input className="contents" id="name" type="text" name="name" />
              </td>
            </tr>
            <tr>
              <th>
                <span className="title">발신인</span>
              </th>
              <td>
                <input className="contents" id="name" type="text" name="name" />
              </td>
            </tr>
            <tr className="optionRow3">
              <th>
                <span className="title">배송지 저장</span>
              </th>
              <td>
                <form className="saveCheckboxes">
                  <div className="saveCheckbox">
                    <input
                      className="contents"
                      id="save"
                      type="radio"
                      name="save"
                      value="save"
                      checked={beSave ? true : false}
                      onClick={this.chkSave}
                      readOnly
                    />
                    <label for="save">저장하기</label>
                  </div>
                  <div className="saveCheckbox">
                    <input
                      className="contents"
                      id="notSave"
                      type="radio"
                      name="notSave"
                      value="notSave"
                      checked={!beSave}
                      onClick={this.chkSave}
                    />
                    <label for="notSave">저장안함</label>
                  </div>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="nobodyInfo">
          <span>익명으로 보내기를 선택할 경우, 주의할 것이 있어요.</span>
          <p>
            보내는 분의 성함이 기재되지 않아 받는 분이 수령을 거부하기도 해요.
          </p>
          <p>
            이 경우 환불이나 교환이 어려우니 꼭 확인하신 후 체크 부탁드릴게요.
          </p>
          <span>토요일 수령 선택 시 주의사항</span>
          <p>토요일 수령을 선택하실 경우, 회사 주소는 배송이 어려워요.</p>
          <p>
            자택이나 수령인이 직접 받으실 수 있는 주소지로 입력 부탁드릴게요.
          </p>
        </div>
      </div>
    );
  }
}
export default AddressInput;
