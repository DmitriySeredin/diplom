import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import style from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={style.profile}>
      <div className={style.header}>
        <NavLink to="/" className={style.a}>
          <h1>HARAKTER</h1>
        </NavLink>
        <h2>ЛИЧНЫЙ КАБИНЕТ</h2>
      </div>
      <div className={style.main}>
        <div className={style.sidebar}>
          <div className={style.info}>
            <div className={style.circle}></div>
            <p>
              Здравствуйте, <strong>пользователь</strong>
            </p>
          </div>
          <div className={style.links}>
            <div className={style.link}>
              <NavLink to="/profile" className={style.a}>
                Профиль
              </NavLink>
            </div>
            <div className={style.link}>
              <NavLink to="/profile/favorite" className={style.a}>
                Избранное
              </NavLink>
            </div>
            <div className={style.link}>
              <NavLink to="/profile/buy" className={style.a}>
                Корзина
              </NavLink>
            </div>
          </div>
        </div>
        <div className={style.content}>
          <Switch>
            <Route exact path="/profile">
              <p>Профиль</p>
            </Route>
            <Route path="/profile/favorite">
              <p>Избранное</p>
            </Route>
            <Route path="/profile/buy">
              <p>Корзина</p>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Profile;
