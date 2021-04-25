import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";
import {
  name,
  surname,
  email,
  logout,
} from "../../store/reducers/auth-reducer";
import {
  removeBasket,
  removeFavorite,
  selectBasket,
  selectFavorite,
} from "../../store/reducers/products-reducer";
import style from "./Profile.module.css";

const Profile = () => {
  const userName = useSelector(name);
  const userSurname = useSelector(surname);
  const userEmail = useSelector(email);
  const favorite = useSelector(selectFavorite);
  const basket = useSelector(selectBasket);
  const dispatch = useDispatch();
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
              Здравствуйте, <strong>{userName}</strong>
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
              <h3>Профиль</h3>
              <ul className={style.list}>
                <li>
                  <strong>ИМЯ: </strong>
                  {userName}
                </li>
                <li>
                  <strong>ФАМИЛИЯ: </strong>
                  {userSurname}
                </li>
                <li>
                  <strong>Email: </strong>
                  {userEmail}
                </li>
              </ul>
              <button
                className={style.logout}
                onClick={() => dispatch(logout())}
              >
                Выйти
              </button>
            </Route>
            <Route path="/profile/favorite">
              <h3 className={style.h3}>ИЗБРАННОЕ</h3>
              {favorite.length !== 0 ? (
                favorite.map((item) => {
                  return (
                    <div className={style.product} key={item.id}>
                      <img src={item.url} alt="" />
                      <div className={style.block}>
                        <button>В корзину</button>
                        <button
                          onClick={() => dispatch(removeFavorite(item.id))}
                        >
                          Удалить
                        </button>
                      </div>
                      <p>{item.name}</p>
                      <span>От {item.price} руб.</span>
                    </div>
                  );
                })
              ) : (
                <h3 className={style.h3}>НЕТ ИЗБРАННЫХ ТОВАРОВ</h3>
              )}
            </Route>
            <Route path="/profile/buy">
              <h3 className={style.h3}>КОРЗИНА</h3>
              {basket.length !== 0 ? (
                basket.map((item) => {
                  return (
                    <div className={style.product} key={item.id}>
                      <img src={item.url} alt="" />
                      <div className={style.block}>
                        <button onClick={() => dispatch(removeBasket(item.id))}>
                          Удалить
                        </button>
                      </div>
                      <p>{item.name}</p>
                      <span>От {item.price} руб.</span>
                    </div>
                  );
                })
              ) : (
                <h3 className={style.h3}>НЕТ ТОВАРОВ</h3>
              )}
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Profile;
