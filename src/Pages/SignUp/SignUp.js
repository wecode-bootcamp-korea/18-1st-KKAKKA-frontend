import React, { Component } from "react";
import { withRouter } from "react-router";
import "./SignUp.scss";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordCheck: "",
      name: "",
      phone: "",
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  pwdCheck() {
    const { password, passwordCheck } = this.state;
    if (password !== passwordCheck) {
      alert("different password");
    }
  }

  inputCheck() {
    const { email, password, passwordCheck, name, phone } = this.state;
    if ((email, password, passwordCheck, name, phone === "")) {
      alert("input your value");
    }
  }

  /* onchange > 정규식 
    함수 ( 변수에 조건에 맞는 정규식 표현 쓰고 , 비번) > if 함수 써서 조건문 돌리고 console.log("기다" "아니다")
    변수.test(this.state.email)
  */

  emailValidCheck() {
    const regExpression = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,12}$/i;

    if (!regExpression.test(this.state.email)) {
      alert("형식에 맞지 않는 이메일입니다.");
    }
  }

  pwdLengthCheck() {
    if (this.state.password.length < 9) {
      alert("비밀번호가 8자 미만입니다.");
    }
  }

  render() {
    console.log(this.state);
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
                  name="email"
                  type="email"
                  className="emailInput"
                  placeholder="예)kkakka@kkakka.kr"
                  onChange={this.handleInput}
                />
              </div>
              <div className="pwdBox">
                <span className="inputLabelText">비밀번호</span>
                <input
                  name="password"
                  type="password"
                  className="pwdInput"
                  placeholder="비밀번호를 입력해주세요."
                  onChange={this.handleInput}
                />
              </div>
              <div className="pwdCheckBox">
                <span className="inputLabelText">비밀번호확인</span>
                <input
                  name="passwordCheck"
                  type="password"
                  className="pwdCheckInput"
                  placeholder="비밀번호를 한 번 더 입력해주세요."
                  onChange={this.handleInput}
                />
              </div>
              <div className="nameBox">
                <span className="inputLabelText">이름</span>
                <input
                  name="name"
                  className="nameInput"
                  placeholder="이름을 입력해주세요."
                  onChange={this.handleInput}
                />
              </div>
              <div className="phoneNumBox">
                <span className="inputLabelText">휴대폰 번호</span>
                <input
                  name="phone"
                  type="tel"
                  className="phoneNumInput"
                  placeholder="'-'를 포함해서 입력해주세요."
                  onChange={this.handleInput}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="signUpBtnBox">
          {/* this.pwdCheckor.bind(this) */}
          <button
            className="signUpBtn"
            onClick={() => {
              this.pwdCheck();
              this.inputCheck();
            }}
          >
            회원가입
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(SignUp);
