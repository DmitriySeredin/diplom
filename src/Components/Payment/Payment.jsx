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
  const [pay, setPay] = useState(false);
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [ap, setAp] = useState("");
  const [number, setNumber] = useState("");
  const [index, setIndex] = useState("");
  const [delivery, setDelivery] = useState("Самовывозом");
  const basket = useSelector(selectBasket);
  const userEmail = useSelector(email);
  const submit = (e) => {
    e.preventDefault();
    alert("Ваш заказ оплачен");
    dispatch(clearBasket());
  };
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
  return (
    <div className={style.payment}>
      <div className={style.header}>
        <NavLink to="/" className={style.a}>
          <h1>HARAKTER</h1>
        </NavLink>
        <h2>ОФОРМЛЕНИЕ ЗАКАЗА</h2>
      </div>
      <div className={style.main}>
        {pay ? (
          <div className={style.check}>
            <div className={style.section}>
              <span>ДАННЫЕ ОПЛАТЫ:</span>
              <p>
                <strong>Город: </strong>БЛАГОВЕЩЕНСК
              </p>
              <p>
                <strong>Улица: </strong>
                {street}
              </p>
              <p>
                <strong>Дом: </strong>
                {house}
              </p>
              <p>
                <strong>Квартира: </strong>
                {ap}
              </p>
              <p>
                <strong>Почтовый Индекс: </strong>
                {index}
              </p>
              <p>
                <strong>Номер телефона: </strong>
                {number}
              </p>
              <p>
                <strong>Способ доставки: </strong>
                {delivery}
              </p>
            </div>
            <div className={style.newsection}>
              <span>СПОСОБ ОПЛАТЫ</span>
              <form className={style.payForm} onSubmit={(e) => submit(e)}>
                <label>Номер карты:</label>
                <input required type="text" />
                <label>Дата истечения срока действия:</label>
                <input required type="date" />
                <label>CVV:</label>
                <input required type="password" />
                <button className={style.offer}>ОПЛАТИТЬ ЗАКАЗ</button>
              </form>
            </div>
          </div>
        ) : (
          <div className={style.check}>
            <div className={style.section}>
              <span>ГОРОД ДОСТАВКИ:</span>
              <p>БЛАГОВЕЩЕНСК</p>
            </div>
            <div className={style.section}>
              <span>ЭЛЕКТРОННАЯ ПОЧТА:</span>
              <p>{userEmail}</p>
            </div>
            <form className={style.bigform} onSubmit={() => setPay(true)}>
              <div className={style.section}>
                <span>АДРЕС ДОСТАВКИ:</span>
                <div className={style.form}>
                  <label>Улица:</label>
                  <input
                    required
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    className={style.input}
                  />
                  <label>Дом:</label>
                  <input
                    required
                    type="text"
                    value={house}
                    onChange={(e) => setHouse(e.target.value)}
                    className={style.input}
                  />
                  <label>Квартира:</label>
                  <input
                    required
                    type="text"
                    value={ap}
                    onChange={(e) => setAp(e.target.value)}
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
                  <label>Номер телефона:</label>
                  <input
                    required
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
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
                    <option value="Самовывозом">Самовывоз</option>
                    <option value="Курьером (2-3 дня)">
                      Курьером бесплатно (2-3 дня)
                    </option>
                  </select>
                </div>
              </div>
              <button className={style.offer}>ЗАКАЗАТЬ</button>
            </form>
          </div>
        )}
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
