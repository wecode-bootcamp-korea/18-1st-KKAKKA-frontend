import React, { Component } from "react";
import "./SignUp.scss";

class SignUp extends Component {
  render() {
    return (
      <div className="signUp">
        <div className="headBox">
          <h1>회원가입</h1>
        </div>
        <div className="signUpBox">
          <div className="inputBox">
            <form>
              <div className="emailBox">
                <span>이메일 (아이디)</span>
                <input
                  className="emailInput"
                  placeholder="예)kkakka@kkakka.kr"
                />
                <button>중복 확인</button>
              </div>
              <div className="pwdBox">
                <span>비밀번호</span>
                <input placeholder="비밀번호를 입력해주세요." />
              </div>
              <div className="pwdCheckBox">
                <span>비밀번호확인</span>
                <input placeholder="비밀번호를 한 번 더 입력해주세요." />
              </div>
              <div className="nameBox">
                <span>이름</span>
                <input placeholder="이름을 입력해주세요." />
              </div>
              <div className="phoneNumBox">
                <span>휴대폰 번호</span>
                <input placeholder="'-'를 포함해서 입력해주세요." />
              </div>
            </form>
          </div>
        </div>
        <div className="signUpBox">
          <button>회원가입</button>
        </div>
      </div>
    );
  }
}
export default SignUp;
