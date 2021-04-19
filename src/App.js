import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SignUp from "./Components/LoginPage/SignUpPage/SignUp";
import SignIn from "./Components/LoginPage/SignInPage/SignIn";
import MainPage from "./Components/MainPage/MainPage";
import Profile from "./Components/Profile/Profile";

const App = () => {
  const loggedIn = true;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/signin" render={() => <SignIn />} />
        <Route exact path="/profile">
          {loggedIn ? <Profile /> : <Redirect to="/signin" />}
        </Route>
        <Route path="/profile/favorite">
          {loggedIn ? <Profile /> : <Redirect to="/signin" />}
        </Route>
        <Route path="/profile/buy">
          {loggedIn ? <Profile /> : <Redirect to="/signin" />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
