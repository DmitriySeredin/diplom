import React from "react";
import style from "./Sales.module.css";
const Sales = () => {
  return (
    <div className={style.sales}>
      <div className={style.text}>
        <span className={style.span}>
          <strong className={style.strong}>
            Привет! Впервые тут?
            <br /> Получи скидку -10% на свой первый заказ в HARAKTER! Используй
            промокод: HARAKTER
          </strong>
        </span>
      </div>
    </div>
  );
};
export default Sales;
