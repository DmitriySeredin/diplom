import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
const Header = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={style.header}>
      <NavLink to="/" className={style.a}>
        <span className={style.logo}>HARAKTER</span>
      </NavLink>

      <div className={style.block}>
        <span className={style.name}>МУЖСКАЯ ОДЕЖДА</span>
      </div>

      <form className={style.form} onSubmit={handleSubmit}>
        <input placeholder="Искать" type="text" className={style.input} />
        <button type="submit" className={style.button}>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/search-1768073-1502246.png"
            alt="Поиск"
            className={style.searchIcon}
          />
        </button>
      </form>

      <button className={style.btn}>
        <NavLink to="/profile">
          <img
            className={style.img}
            src="https://pics.freeicons.io/uploads/icons/png/19339625881548233621-512.png"
            alt="Профиль"
          />
        </NavLink>
      </button>

      <button className={style.btn}>
        <NavLink to="/profile/favorite">
          <img
            src="https://image.flaticon.com/icons/png/24/9/9294.png"
            alt="Избранное"
            className={style.img}
          />
        </NavLink>
      </button>

      <button className={style.btn}>
        <NavLink to="/profile/buy">
          <img
            src="https://cdn2.iconfinder.com/data/icons/celebration-party/48/88-512.png"
            alt="Корзина"
            className={style.img}
          />
        </NavLink>
      </button>
    </div>
  );
};
export default Header;
