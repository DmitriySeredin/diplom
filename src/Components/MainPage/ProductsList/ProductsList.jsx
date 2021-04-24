import React from "react";
import { NavLink } from "react-router-dom";
import style from "./ProductsList.module.css";
const ProductsList = () => {
  return (
    <div className={style.menu}>
      <NavLink to="/products/styleone" className={style.a}>
        <div className={style.menuItem}>Дух Творчества</div>
      </NavLink>
      <NavLink to="/products/styletwo" className={style.a}>
        <div className={style.menuItem}>BARKLAND</div>
      </NavLink>
      <NavLink to="/products/jackets" className={style.a}>
        <div className={style.menuItem}>Пиджаки</div>
      </NavLink>
      <NavLink to="/products/pants" className={style.a}>
        <div className={style.menuItem}>Брюки</div>
      </NavLink>
      <NavLink to="/products/shirts" className={style.a}>
        <div className={style.menuItem}>Сорочки</div>
      </NavLink>
      <NavLink to="/products/cardigans" className={style.a}>
        <div className={style.menuItem}>Джемпера</div>
      </NavLink>
    </div>
  );
};
export default ProductsList;
