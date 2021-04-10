import React from "react";
import style from "./Separator.module.css";
const Separator = () => {
  return (
    <div className={style.main}>
      <div className={style.separator}>
        <div className={style.wrapper}>
          <span className={style.span}>ДО -50% НА СТИЛЬНУЮ ПОДБОРКУ</span>
        </div>
        <p className={style.p}>
          Акция действует ограниченное время. Распространяется на вещи,
          помеченные на сайте.
        </p>
      </div>
    </div>
  );
};
export default Separator;
