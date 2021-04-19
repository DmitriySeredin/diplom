import React from "react";
import { NavLink } from "react-router-dom";
import style from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={style.signUp}>
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
        <div className={style.googleAuth}>
          <h3>ЗАРЕГИСТРИРОВАТЬСЯ ЧЕРЕЗ</h3>
          <button className={style.googlebtn}>
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              alt=""
            />
            <strong>GOOGLE</strong>
          </button>
          <p>
            Регистрация через профиль социальной сети выполняется очень быстро.
            Вам не придется запоминать новые пароли - никакой перегрузки для
            памяти. Не беспокойтесь, мы никогда не передадим ваши данные третьим
            лицам и не будем публиковать информацию от вашего имени
          </p>
        </div>
        <form className={style.form}>
          <h3>ИЛИ ЗАРЕГИСТРИРУЙСЯ С ПОМОЩЬЮ ЭЛЕКТРОННОЙ ПОЧТЫ</h3>
          <label htmlFor="email">
            АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ:
            <input type="email" name="email" />
          </label>
          <label htmlFor="firstName">
            ИМЯ:
            <input type="text" name="firstName" />
          </label>
          <label htmlFor="lastName">
            ФАМИЛИЯ:
            <input type="text" name="lastName" />
          </label>
          <label htmlFor="password">
            ПАРОЛЬ:
            <input type="password" name="password" />
          </label>
          <button className={style.btn}>ЗАРЕГИСТРИРОВАТЬСЯ НА HARAKTER</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
