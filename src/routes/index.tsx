import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import user from "./user.json";

import Header from "../components/Header";

// import { Container } from './styles';
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import PizzaMenu from "../pages/PizzaMenu";

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
          <Header />
          <Switch>
            <Route path="/pizza-menu" component={PizzaMenu} />
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
