import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { email } from "../../store/reducers/auth-reducer";
import {
  clearBasket,
  selectBasket,
} from "../../store/reducers/products-reducer";
import style from "./Payment.module.css";

const Payment = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const [adress, setAdress] = useState("");
  const [index, setIndex] = useState("");
  const [delivery, setDelivery] = useState(null);
  const basket = useSelector(selectBasket);
  const userEmail = useSelector(email);
  let cost = null;
  if (basket.length !== 0) {
    cost = basket
      .map((item) => {
        return item.price;
      })
      .reduce(function (a, b) {
        return a + b;
      });
  }
  const submit = (e) => {
    dispatch(clearBasket());
    alert(
      `Ваш заказ принят, будет доставлен ${delivery}, по адресу ${adress}, город ${city}. Почтовый индекс: ${index}. Стоимость заказа: ${cost}`
    );
    return;
  };
  return (
    <div className={style.payment}>
      <div className={style.header}>
        <NavLink to="/" className={style.a}>
          <h1>HARAKTER</h1>
        </NavLink>
        <h2>ОФОРМЛЕНИЕ ЗАКАЗА</h2>
      </div>
      <div className={style.main}>
        <div className={style.check}>
          <div className={style.section}>
            <span>СТРАНА ДОСТАВКИ:</span>
            <p>РОССИЯ</p>
          </div>
          <div className={style.section}>
            <span>ЭЛЕКТРОННАЯ ПОЧТА:</span>
            <p>{userEmail}</p>
          </div>
          <form className={style.bigform} onSubmit={() => submit()}>
            <div className={style.section}>
              <span>АДРЕС ДОСТАВКИ:</span>
              <div className={style.form}>
                <label>Город:</label>
                <input
                  required
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={style.input}
                />
                <label>Адрес:</label>
                <input
                  required
                  type="text"
                  value={adress}
                  onChange={(e) => setAdress(e.target.value)}
                  className={style.input}
                />
                <label>Индекс:</label>
                <input
                  required
                  type="text"
                  value={index}
                  onChange={(e) => setIndex(e.target.value)}
                  className={style.input}
                />
              </div>
            </div>
            <div className={style.section}>
              <span>СПОСОБ ДОСТАВКИ:</span>
              <div>
                <select
                  className={style.select}
                  onChange={(e) => setDelivery(e.target.value)}
                >
                  <option value="Курьером (2-3 дня)">
                    Курьером бесплатно (2-3 дня)
                  </option>
                  <option value="Самовывоз">Самовывоз</option>
                </select>
              </div>
            </div>
            <button className={style.offer}>ЗАКАЗАТЬ</button>
          </form>
        </div>
        <div className={style.sidebar}>
          <div className={style.count}>
            <h3>КОЛИЧЕСТВО ТОВАРОВ - {basket.length}</h3>
          </div>
          <div className={style.items}>
            {basket.map((item) => {
              return (
                <div className={style.product} key={item.id}>
                  <img src={item.url} alt="" />
                  <div className={style.info}>
                    <p>{item.name}</p>
                    <span>{item.price} руб.</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={style.summary}>
            <h3>ВСЕГО К ОПЛАТЕ - {cost} руб.</h3>
          </div>
        </div>
      </div>
      {basket.length === 0 ? <Redirect to="/" /> : null}
    </div>
  );
};

export default Payment;
