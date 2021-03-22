import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main.js";
import Login from "./Pages/Login/Login.js";
import Cart from "./Pages/Cart/Cart.js";
import FlowerClassDetail from "./Pages/FlowerClassDetail/FlowerClassDetail.js";
import FlowerClassList from "./Pages/FlowerClassList/FlowerClassList.js";
import FlowerDetail from "./Pages/FlowerDetail/FlowerDetail.js";
import FlowerList from "./Pages/FlowerList/FlowerList.js";
import Mypage from "./Pages/Mypage/Mypage.js";
import Order from "./Pages/Order/Order.js";
import OrderList from "./Pages/OrderList/OrderList.js";
import SignUp from "./Pages/SignUp/SignUp.js";
import SubscribeDetail from "./Pages/SubscribeDetail/SubscribeDetail.js";
import SubscribeList from "./Pages/SubscribeList/SubscribeList.js";
import Congratulation from "./Pages/SignUp/Congratulation.js";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
          <Route
            exact
            path="/flower-class-detail"
            component={FlowerClassDetail}
          />
          <Route exact path="/flower-class-list" component={FlowerClassList} />
          <Route exact path="/flower-detail" component={FlowerDetail} />
          <Route exact path="/flower-list" component={FlowerList} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/order-list" component={OrderList} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/subscribe-detail" component={SubscribeDetail} />
          <Route exact path="/subscribe-list" component={SubscribeList} />
          <Route
            exact
            path="/register-congratulation"
            component={Congratulation}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
