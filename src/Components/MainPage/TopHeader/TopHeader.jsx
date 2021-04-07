import React from "react";
import style from "./TopHeader.module.css";

const TopHeader = () => {
  return (
    <div className={style.topHeader}>
      <nav className={style.nav}>
        <div className={style.item}>Marketplace</div>
        <div className={style.item}>Помощь и FAQ</div>
        <div className={style.item}>
          <button className={style.btn}>
            <img
              src="https://assets.asosservices.com/storesa/images/flags/ru.png"
              alt=""
              className={style.img}
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default TopHeader;
