import React from "react";
import { StateType } from "typesafe-actions";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import UserHeader from "../components/UserHeader";
import AdminHeader from "../components/AdminHeader";

// import { Container } from './styles';
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/AdminPages/Dashboard";
import Profile from "../pages/AdminPages/Profile";

import PizzaMenu from "../pages/UserPages/PizzaMenu";
import UserCart from "../pages/UserPages/UserCart";
import NewPizza from "../pages/AdminPages/NewPizza";

const Router = () => {
  const admin = useSelector((state: StateType<any>) => state.auth.admin.admin);

  const signed = useSelector((state: StateType<any>) => state.auth.user.uid)
    ? true
    : false;

  return (
    <>
      {!signed ? (
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/register" exact component={SignUp} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      ) : null}

      {signed && !admin ? (
        <>
          <UserHeader />
          <Switch>
            <Route path="/pizza-menu" component={PizzaMenu} />
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
