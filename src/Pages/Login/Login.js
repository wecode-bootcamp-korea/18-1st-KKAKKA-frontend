import React, { Component } from "react";
import { withRouter } from "react-router";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      borderColor: true,
    };
  }

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

  handelInputValue = e => {
    e.preventDefault();
    const name = e.target.className;
    const { value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { id, pwd } = this.state;
    return (
      <div className="login">
        <div className="loginBox">
          <h1 className="loginText">로그인</h1>
          <form className="loginField">
            <input
              className="id"
              placeholder="아이디(이메일)"
              onChange={this.handelInputValue}
            />
            <input
              className="pwd"
              type="password"
              placeholder="비밀번호"
              onChange={this.handelInputValue}
            />
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
export default withRouter(Login);
