import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
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
    return (
      <div className="login">
        <div className="loginBox">
          <h1 className="loginText">로그인</h1>
          <form className="loginField">
            <input className="id" placeholder="아이디(이메일)" />
            <input className="pwd" type="password" placeholder="비밀번호" />
            <div className="inputBtnBuffer"></div>

            <button className="loginBtn" onClick={this.goToMain}>
              로그인
            </button>
            <div className="signUpArea">
              <button className="signUpBtn">
                <Link to="/signup" style={{ textDecoration: "none" }}>
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
