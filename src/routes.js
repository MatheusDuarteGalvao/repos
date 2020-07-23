import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Repostorio from "./pages/Repostorio";
import Main from "./pages/Main";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/repositorio/:repositorio" component={Repostorio} />
      </Switch>
    </BrowserRouter>
  );
}
