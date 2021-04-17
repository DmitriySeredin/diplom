import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./Components/LoginPage/SignUpPage/SignUp";
import MainPage from "./Components/MainPage/MainPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/signup" render={() => <SignUp />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
