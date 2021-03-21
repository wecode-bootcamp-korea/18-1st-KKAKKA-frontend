import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Congratulation.scss";
import couponImage from "./images/coupon.png";

/* register-finish라는 새 url로 이동
withrouterHOC로 조건이 200오케이면 이 페이지로 이동하면서
props로 
 */

export class Congratulation extends Component {
  render() {
    console.log("props >>", this.props);
    return (
      <div className="congratulation">
        <div className="upperBox">
          <header className="textBox">
            <p className="nameTxt">{`${this.props.userName}님,`}</p>
            <p className="congratTxt">KKAKKA의 회원이 되신걸 축하드립니다 :)</p>
            <img src={couponImage} alt="coupon" className="couponImage" />
          </header>
        </div>

        <div className="lowerBox">
          <p className="promoteTxt">다양한 소식과 할인 정보를 받아보세요!</p>
          <p className="emailTxt">[마이페이지]-[회원정보 관리]에서</p>
          <p className="emailTxt">이메일 수신 여부를 변경할 수 있습니다.</p>
          <Link to="/main">
            <button className="shoppingBtn">쇼핑 계속하기</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Congratulation;