import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import user from "./user.json";

import UserHeader from "../components/UserHeader";
import AdminHeader from "../components/AdminHeader";

// import { Container } from './styles';
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/AdminPages/Dashboard";
import Profile from "../pages/AdminPages/Profile";

import PizzaMenu from "../pages/UserPages/PizzaMenu";
import UserOrders from "../pages/UserPages/UserOrders";
import UserCart from "../pages/UserPages/UserCart";
import NewPizza from "../pages/AdminPages/NewPizza";

const Router = () => {
  const { signed, admin } = user;

  return (
    <>
      {!signed ? (
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      ) : null}

      {signed && !admin ? (
        <>
          <UserHeader />
          <Switch>
            <Route path="/pizza-menu" component={PizzaMenu} />
            <Route path="/my-orders" component={UserOrders} />
            <Route path="/cart" component={UserCart} />
            <Route path="*" render={() => <Redirect to="/pizza-menu" />} />
          </Switch>
        </>
      ) : null}
      {signed && admin ? (
        <>
          <AdminHeader />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/new-pizza" component={NewPizza} />
            <Route path="*" render={() => <Redirect to="/dashboard" />} />
          </Switch>
        </>
      ) : null}
    </>
  );
};

export default Router;
