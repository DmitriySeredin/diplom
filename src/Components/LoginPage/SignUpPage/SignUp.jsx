import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { auth, isAuth } from "../../../store/reducers/auth-reducer";
import style from "./SignUp.module.css";

const SignUp = () => {
  const logged = useSelector(isAuth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => dispatch(auth(data));
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

        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <h3>ИЛИ ЗАРЕГИСТРИРУЙСЯ С ПОМОЩЬЮ ЭЛЕКТРОННОЙ ПОЧТЫ</h3>
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
            ИМЯ:
            <input
              type="text"
              {...register("name", { required: true, maxLength: 80 })}
            />
          </label>
          <label>
            ФАМИЛИЯ:
            <input
              type="text"
              {...register("surname", { required: true, maxLength: 100 })}
            />
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
          <button className={style.btn}>ЗАРЕГИСТРИРОВАТЬСЯ НА HARAKTER</button>
        </form>
        {logged ? <Redirect to="/profile" /> : null}
      </div>
    </div>
  );
};

export default SignUp;
