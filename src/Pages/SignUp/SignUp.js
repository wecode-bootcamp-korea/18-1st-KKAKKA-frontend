import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";
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
      isEmailvalid: true,
      isPwdInputValid: true,
      isPwdLengthValid: true,
      inputFillPass: true,
    };
  }
  //input값 받는 함수
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // 비밀번호 재입력 체크 > state값 업데이트 함수
  pwdInputCheck() {
    const { password, passwordCheck } = this.state;
    if (password !== passwordCheck) {
      this.setState({
        isPwdInputValid: false,
      });
    }
  }

  //비밀번호 글자수 (8자) 체크 함수
  pwdLengthCheck() {
    if (this.state.password.length < 9) {
      this.setState({
        isPwdLengthValid: false,
      });
    }
  }

  //input 창에 다 들어가있는지 확인하는 함수
  inputCheck() {
    const { email, password, passwordCheck, name, phone } = this.state;
    if (!(email && password && passwordCheck && name && phone)) {
      this.setState({
        inputFillPass: false,
      });
    }
  }

  //이메일 유효성 검사 후 state값을 바꾸는 함수
  emailValidCheck() {
    const regExpression = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!regExpression.test(this.state.email)) {
      this.setState({
        isEmailvalid: false,
      });
    }
  }

  //fetch 함수로 백엔드와 통신
  getInfo() {
    fetch("http://127.30.1.53:8000/account/signup", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        phone: this.state.phone,
      }),
    })
      .then(response => response.json())
      .then(result => console.log("결과: ", result))
      .catch(error => console.error("에러:", error));
  }

  getInfoFakeServer() {
    axios({
      method: "POST",
      url: "https://reqres.in/api/users",
      data: {
        name: "morpheus",
        job: "leader",
      },
    })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });
  }

  //onClick시 실행할 모든 검사 함수
  // validCheck() {
  //   this.emailValidCheck();
  //   this.pwdInputCheck();
  //   this.pwdLengthCheck();
  //   this.inputCheck();
  //   this.getInfo();
  // }

  render() {
    const {
      isEmailvalid,
      isPwdInputValid,
      isPwdLengthValid,
      inputFillPass,
    } = this.state;
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
                {!isEmailvalid && (
                  <p className="warningText">Email 형식이 올바르지 않습니다.</p>
                )}
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
                {!isPwdLengthValid && (
                  <p className="warningText">비밀번호는 9자 이상입니다.</p>
                )}
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
                {!isPwdInputValid && (
                  <p className="warningText">비밀번호가 일치하지 않습니다.</p>
                )}
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
              {!inputFillPass && (
                <p className="warningText">모든 값을 입력해주세요.</p>
              )}
            </form>
          </div>
        </div>
        <div className="signUpBtnBox">
          <button
            className="signUpBtn"
            onClick={this.getInfoFakeServer.bind(this)}
          >
            회원가입
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(SignUp);
