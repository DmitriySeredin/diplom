import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Models.module.css";
const Models = () => {
  return (
    <section className={style.section}>
      <ul>
        <li className={style.item}>
          <div className={style.moment}>
            <div className={style.momentWrap}>
              <img
                src="https://content.asos-media.com/-/media/homepages/mw/2021/02/15/mw_artisan_outlook_moment_870x1110.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={style.text}>
            <div className={style.textTitle}>
              <h2>ДУХ ТВОРЧЕСТВА</h2>
            </div>
            <div className={style.textP}>
              <p>Настроение творить</p>
            </div>
            <div className={style.btn}>
              <NavLink className={style.a} to="/products">
                <span>КУПИТЬ ТРЕНДОВЫЕ МОДЕЛИ</span>
              </NavLink>
            </div>
          </div>
        </li>
        <li className={style.item}>
          <div className={style.moment}>
            <div className={style.momentWrap}>
              <img
                src="https://barkland.ru/assets/img/advantages1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={style.text}>
            <div className={style.textTitle}>
              <h2>BARKLAND</h2>
            </div>
            <div className={style.textP}>
              <p>Обнови свой стиль</p>
            </div>
            <div className={style.btn}>
              <NavLink className={style.a} to="/products">
                <span>КУПИТЬ</span>
              </NavLink>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};
export default Models;

// <div className={style.models}>
//   <div className={style.wrapper}>
//     <img
//       src="https://content.asos-media.com/-/media/homepages/mw/2021/02/15/mw_artisan_outlook_moment_870x1110.jpg"
//       alt=""
//     />
//     <div className={style.block}>
//       <span>ДУХ ТВОРЧЕСТВА</span>
//       <p>Настроение творить</p>
//       <button>КУПИТЬ ТРЕНДОВЫЕ МОДЕЛИ</button>
//     </div>
//   </div>
//   <div className={style.wrapper}>
//     <img
//       src="https://content.asos-media.com/-/media/homepages/mw/2021/02/15/mw_bershka_moment_870x1110.jpg"
//       alt=""
//     />
//     <div className={style.block}>
//       <span>BERSHKA</span>
//       <p>Обнови свой стиль</p>
//       <button>КУПИТЬ</button>
//     </div>
//   </div>
// </div>
