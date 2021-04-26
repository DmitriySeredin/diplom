import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SignUp from "./Components/LoginPage/SignUpPage/SignUp";
import SignIn from "./Components/LoginPage/SignInPage/SignIn";
import MainPage from "./Components/MainPage/MainPage";
import Profile from "./Components/Profile/Profile";
import Products from "./Components/Products/Products";
import { useSelector } from "react-redux";
import { isAuth } from "./store/reducers/auth-reducer";
import Payment from "./Components/Payment/Payment";

const App = () => {
  const loggedIn = useSelector(isAuth);
  return (
    <Switch>
      <Route exact path="/" render={() => <MainPage />} />
      <Route path="/signup" render={() => <SignUp />} />
      <Route path="/signin" render={() => <SignIn />} />
      <Route path="/products" render={() => <Products />} />
      <Route path="/payment" render={() => <Payment />} />
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
  );
};

export default App;
