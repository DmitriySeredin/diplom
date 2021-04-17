import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./Components/LoginPage/SignUpPage/SignUp";
import SignIn from "./Components/LoginPage/SignInPage/SignIn";
import MainPage from "./Components/MainPage/MainPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/signin" render={() => <SignIn />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
