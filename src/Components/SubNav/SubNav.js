import React from "react";
import "./SubNav.scss";

class SubNav extends React.Component {
  render() {
    return (
      <div className="subNavContainer">
        <nav className="subNav">
          <div className="subNavContent">
            <h2 className="title">꾸까 꽃 정기구독</h2>
            <span className="subTitle">
              2주에 한 번, 매번 새로운 꽃으로 당신의 일상을 행복으로 채울게요.
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default SubNav;
