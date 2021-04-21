import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Items.module.css";
const Items = () => {
  return (
    <section className={style.section}>
      <div className={style.items}>
        <NavLink className={style.a} to="/products/jackets">
          <div className={style.imgWrapper}>
            <img
              className={style.img}
              src="https://privately.ru/notes/uploads/posts/2017-06/14965900851trac2qshvxc.jpg"
              alt=""
            />
            <div className={style.text}>
              <span>ПИДЖАКИ</span>
              <p>Ещё больше размеров для любимых образов</p>
            </div>
          </div>
        </NavLink>

        <NavLink className={style.a} to="/products">
          <div className={style.imgWrapper}>
            <img
              className={style.img}
              src="https://images.ua.prom.st/2156939378_w640_h640_chernye-muzhskie-bryuki.jpg"
              alt=""
            />
            <div className={style.text}>
              <span>БРЮКИ НОВОГО СЕЗОНА</span>
              <p>Кажется время, пришло...</p>
            </div>
          </div>
        </NavLink>

        <NavLink className={style.a} to="/products">
          <div className={style.imgWrapper}>
            <img
              className={style.img}
              src="https://i.pinimg.com/originals/09/5d/43/095d43cd11fc3e686a73a212d52aba58.jpg"
              alt=""
            />
            <div className={style.text}>
              <span>СОРОЧКИ</span>
              <p>Приведут тебя к цели</p>
            </div>
          </div>
        </NavLink>

        <NavLink className={style.a} to="/products">
          <div className={style.imgWrapper}>
            <img
              className={style.img}
              src="https://triksklad.ru/800/600/https/tossy.ru/pics/2016/10/1476986183_035e.jpg"
              alt=""
            />
            <div className={style.text}>
              <span>ДЖЕМПЕРА</span>
              <p>Обрати внимание на этот бренд</p>
            </div>
          </div>
        </NavLink>
      </div>
    </section>
  );
};
export default Items;
