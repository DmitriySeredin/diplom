import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { isAuth, login } from "../../../store/reducers/auth-reducer";
import style from "./SignIn.module.css";

const SignIn = () => {
  const logged = useSelector(isAuth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => dispatch(login(data));
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

        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <label>
            АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ:
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Неправильный email адрес",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </label>
          <label>
            ПАРОЛЬ:
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "Минимальная длина пароля 8 символов",
                },
                pattern: {
                  value: /^[A-Za-z0-9]+$/,
                  message: "Не используйте кириллицу",
                },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </label>
          <button className={style.btn}>ВОЙТИ</button>
        </form>

        {logged ? <Redirect to="/profile" /> : null}

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
