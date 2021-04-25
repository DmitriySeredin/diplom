import React from "react";
import { NavLink } from "react-router-dom";
import style from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div className={style.signIn}>
      <NavLink to="/" className={style.a}>
        <h1>HARAKTER</h1>
      </NavLink>
      <div className={style.formWrapper}>
        <div className={style.links}>
          <div className={style.linkWrap}>
            <span className={style.link}>
              <NavLink to="/signup" className={style.a}>
                Регистрация
              </NavLink>
            </span>
          </div>
          <div className={style.linkWrap}>
            <span className={style.link}>
              <NavLink to="/signin" className={style.a}>
                Войти
              </NavLink>
            </span>
          </div>
        </div>

        <form className={style.form}>
          <label htmlFor="email">
            АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ:
            <input type="email" name="email" />
          </label>
          <label htmlFor="password">
            ПАРОЛЬ:
            <input type="password" name="password" />
          </label>
          <button className={style.btn}>ВОЙТИ</button>
        </form>
        <div className={style.googleAuth}>
          <h3>ИЛИ ВОЙДИ С ПОМОЩЬЮ...</h3>
          <button className={style.googlebtn}>
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              alt=""
            />
            <strong>GOOGLE</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
