import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.info}>
        <div className={style.infoblock}>
          <h4>ПОМОЩЬ И ИНФОРМАЦИЯ</h4>
          <p>Помощь</p>
          <p>Отследить заказ</p>
          <p>Доставка и Возвраты</p>
          <p>10% скидка для студентов</p>
        </div>
        <div className={style.infoblock}>
          <h4>ПОДРОБНЕЕ ОБ HARAKTER</h4>
          <p>О нас</p>
          <p>Вакансии в HARAKTER</p>
          <p>Корпоративная ответственность</p>
          <p>Инвесторам</p>
        </div>
        <div className={style.infoblock}>
          <h4>БОЛЬШЕ HARAKTER</h4>
          <p>Версия для мобильного и приложение ASOS</p>
          <p>HARAKTER Marketplace</p>
          <p>Подарочные сертификаты</p>
          <p>Black Friday</p>
        </div>

        <div className={style.infoblock}>
          <h4>ШОППИНГ В</h4>
          <div className={style.lng}>
            <p>Страна:</p>
            <img
              src="https://assets.asosservices.com/storesa/images/flags/ru.png"
              alt=""
            />
            <div className={style.line}></div>
            <h4>ИЗМЕНИТЬ</h4>
          </div>
        </div>
      </div>
      <div className={style.footerbot}>
        <p>© 2021 HARAKTER</p>
        <ul>
          <li>Конфиденциальность и cookie-файлы</li>
          <li>Правила и условия</li>
          <li>Доступность</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
