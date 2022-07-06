import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import HomePage from "./HomePage";
import ItemDetails from "./ItemDetails";
import ItemPage from "./ItemPage";
import ManageItem from "./ManageItem";
import NotFoundPage from "./NotFoundPage";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/items" component={ItemPage} />
        <Route path="/item/:guid" component={ManageItem} />
        <Route path="/item" component={ManageItem} />
        <Route path="/item-details/:guid" component={ItemDetails}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
