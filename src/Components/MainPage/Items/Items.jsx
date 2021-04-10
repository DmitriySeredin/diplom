import React from "react";
import style from "./Items.module.css";
const Items = () => {
  return (
    <section className={style.section}>
      <img
        className={style.bigImg}
        src="https://content.asos-media.com/-/media/homepages/mw/2021/02/15/desktop/ru-mw_desktophero_global_1258x600.jpg"
        alt=""
      />
      <div className={style.items}>
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
        <div className={style.imgWrapper}>
          <img
            className={style.img}
            // src="https://content.asos-media.com/-/media/homepages/mw/2021/02/15/mw_denim_moment_870x1110.jpg"
            // alt=""
            src="https://images.ua.prom.st/2156939378_w640_h640_chernye-muzhskie-bryuki.jpg"
            alt=""
          />
          <div className={style.text}>
            <span>БРЮКИ НОВОГО СЕЗОНА</span>
            <p>Кажется время, пришло...</p>
          </div>
        </div>
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
      </div>
    </section>
  );
};
export default Items;
