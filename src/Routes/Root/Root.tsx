import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Landing } from "@Pages/Landing";
import { NotFound } from "@Pages/NotFound";

export default class Root extends Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Landing} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
