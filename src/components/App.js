import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import ItemPage from "./ItemPage";
import ManageItem from "./ManageItem";
import NotFoundPage from "./NotFoundPage";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={ItemPage} />
        <Route path="/item/:guid" component={ManageItem} />
        <Route path="/item" component={ManageItem} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
