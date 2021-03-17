import React, { Component } from "react";
import "./SignUp.scss";

class SignUp extends Component {
  render() {
    return (
      <div className="signUp">
        <div className="headBox">
          <h1 className="headText">회원가입</h1>
        </div>
        <div className="signUpBox">
          <div className="inputBox">
            <form>
              <div className="emailBox">
                <span className="inputLabelText">이메일 (아이디)</span>
                <input
                  className="emailInput"
                  placeholder="예)kkakka@kkakka.kr"
                />
              </div>
              <div className="pwdBox">
                <span className="inputLabelText">비밀번호</span>
                <input
                  type="password"
                  className="pwdInput"
                  placeholder="비밀번호를 입력해주세요."
                />
              </div>
              <div className="pwdCheckBox">
                <span className="inputLabelText">비밀번호확인</span>
                <input
                  type="password"
                  className="pwdCheckInput"
                  placeholder="비밀번호를 한 번 더 입력해주세요."
                />
              </div>
              <div className="nameBox">
                <span className="inputLabelText">이름</span>
                <input
                  className="nameInput"
                  placeholder="이름을 입력해주세요."
                />
              </div>
              <div className="phoneNumBox">
                <span className="inputLabelText">휴대폰 번호</span>
                <input
                  className="phoneNumInput"
                  placeholder="'-'를 포함해서 입력해주세요."
                />
              </div>
            </form>
          </div>
        </div>
        <div className="signUpBtnBox">
          <button className="signUpBtn">회원가입</button>
        </div>
      </div>
    );
  }
}
export default SignUp;
