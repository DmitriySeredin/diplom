import React from "react";
import style from "./ProductsList.module.css";
const ProductsList = () => {
  return (
    <div className={style.menu}>
      <div className={style.menuItem}>Новинки</div>
      <div className={style.menuItem}>Костюмы</div>
      <div className={style.menuItem}>Брюки</div>
      <div className={style.menuItem}>Рубашки</div>
      <div className={style.menuItem}>Пиджаки</div>
      <div className={style.menuItem}>Джемпера</div>
      <div className={style.menuItem}>Кардиганы</div>
      <div className={style.menuItem}>Бренды</div>
      <div className={style.menuItem}>Аксессуары</div>
      <div className={style.menuItem}>Распродажа</div>
    </div>
  );
};
export default ProductsList;
