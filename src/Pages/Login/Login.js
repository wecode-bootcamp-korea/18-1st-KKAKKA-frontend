import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isValid: true,
    };
  }

  handleInput = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  isEmailValid = e => {
    e.preventDefault();
    const regExpression = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,12}$/i;

    if (regExpression.test(this.state.email) === false) {
      this.setState({
        isValid: false,
      });
    } else {
      this.setState({ isNotValid: true });
    }
  };

  checkValidation() {}

  goToMain = () => {
    this.props.history.push("/main");
    // 추후 백엔드 데이터를 받으면 아래 함수 사용 예정
    /* if(response.message === "valid user") {
      this.props.history.push('/main') 
    } else {
      alert ("존재하지 않는 계정입니다. 가입 후 이용해주세요!")
      this.props.history.push('/signup')
    }*/
  };

  render() {
    console.log(this.state);
    const { email, password, isValid } = this.state;
    return (
      <div className="login">
        <div className="loginBox">
          <h1 className="loginText">로그인</h1>
          <form className="loginField">
            <input
              className="id"
              name="email"
              type="email"
              placeholder="아이디(이메일)"
              onChange={this.handleInput}
            />
            <input
              className="pwd"
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={this.handleInput}
            />
            {!isValid && (
              <div className="validation">
                <p>Email/비밀번호를 정확히 입력해주세요.</p>
              </div>
            )}
            <div className="inputBtnBuffer"></div>
            <button className="loginBtn" onClick={this.isEmailValid}>
              로그인
            </button>
            <div className="signUpArea">
              <button className="signUpBtn">
                <Link to="/signup" className="signUpLink">
                  회원가입
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
