import React from "react";
import { Link, withRouter } from "react-router-dom";
import { BsPerson, BsBucket } from "react-icons/bs";
import "./Nav.scss";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // api 연결 이후 fetch 로그인 상태 인증으로 로직 변경
      isLogin: true,
      ticking: false,
      navTop: false,
    };
  }

  goToMypage = () => {
    if (this.state.isLogin) {
      this.props.history.push("/mypage");
    } else {
      this.props.history.push("/login");
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  handleScroll = () => {
    if (window.pageYOffset >= 80) {
      if (!this.state.navTop) {
        this.setState({ navTop: true });
      }
    } else {
      if (this.state.navTop) {
        this.setState({ navTop: false });
      }
    }
  };

  render() {
    return (
      <div>
        <div className="topBanner">
          <span className="banner">
            🍪 까까 팀이 궁금하다면? 🍪 노션 페이지 바로가기💨
          </span>
        </div>
        <div className="navInfo">
          <li className="navUser">
            <Link to="./login">로그인</Link>
          </li>
          <li className="navUser">
            <Link to="./signup">회원가입</Link>
            <p>(10000 포인트 지급!)</p>
          </li>
        </div>
        <nav className={`navbar ${this.state.navTop && "sticky"}`}>
          <div className="navLogo">
            <Link to="./main">KKAKKA</Link>
          </div>

          <ul className="navMenu">
            <li>
              <Link to="./subscribe-list">쿠키 정기구독</Link>
            </li>
            <li>
              <Link to="./flower-list">쿠키쿠키</Link>
            </li>
            <li>
              <Link to="/flower-class-list">쿠킹클래스</Link>
            </li>
            <li>
              <Link to="./main">쿠킹샵</Link>
            </li>
            <li>
              <Link to="./main">이벤트</Link>
            </li>
          </ul>

          <ul className="navIcons">
            <li>
              <BsPerson
                value={{ className: "navIcon" }}
                size="2em"
                verticalalign="middle"
                onClick={this.goToMypage}
              />
            </li>
            <li>
              <Link to="./cart">
                <BsBucket
                  value={{ className: "navIcon" }}
                  size="2em"
                  verticalalign="middle"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(Nav);
