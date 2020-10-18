import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import user from "./user.json";

import UserHeader from "../components/UserHeader";

// import { Container } from './styles';
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";

import PizzaMenu from "../pages/PizzaMenu";
import UserOrders from "../pages/UserOrders";
import UserCart from "../pages/UserCart";

const Router = () => {
  const { signed, admin } = user;

  return (
    <>
      {!signed ? (
        <Switch>
          <Route path="/" exact component={SignIn} />
        </Switch>
      ) : null}

      {signed && !admin ? (
        <>
          <UserHeader />
          <Switch>
            <Route path="/pizza-menu" component={PizzaMenu} />
            <Route path="/my-orders" component={UserOrders} />
            <Route path="/cart" component={UserCart} />
          </Switch>
        </>
      ) : null}
      {signed && admin ? (
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      ) : null}
    </>
  );
};

export default Router;
