import React from "react";
import { SiNotion, SiInstagram, SiGithub } from "react-icons/si";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <footer className="footerBox">
          <div className="upperBox">
            <div className="iconBox">
              <SiNotion className="icons" />
              <SiInstagram className="icons" />
              <SiGithub className="icons" />
            </div>
            <span>까까 고객센터</span>
            <button className="upperBtn">자주 묻는 질문</button>
            <button className="upperBtn"> 1:1 문의하기</button>
          </div>
          <div className="lowerBox">
            <p>
              상호명: 까까 (KKAKKA) | 제작자: 권영균, 남궁선아, 이근화, 이수진,
              이호열
            </p>
            <p>주소: 서울시 강남구 테헤란로 427</p>
            <span>© 2021 KKAKKA</span>
            <button className="bottomBtn">이용약관</button>
            <button className="bottomBtn">개인정보취급방침</button>
            <button className="bottomBtn">제휴안내</button>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
