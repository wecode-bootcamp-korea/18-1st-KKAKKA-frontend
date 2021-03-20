import React from "react";
import { SiNotion, SiInstagram } from "react-icons/si";
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
            </div>
            까까 고객센터
          </div>
          <div className="lowerBox">상호명: 까까 (KKAKKA) | </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
