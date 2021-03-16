import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="loginBox">
          <h1 className="loginText">로그인</h1>
          <form className="loginField">
            <input className="inputId" placeholder="아이디(이메일)" />
            <input className="inputPwd" placeholder="비밀번호" />
            <div className="inputBtnBuffer"></div>
            <button className="loginBtn">로그인</button>
            <div className="signUpArea">
              <button className="signUpBtn">회원가입</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
