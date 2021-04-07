import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
