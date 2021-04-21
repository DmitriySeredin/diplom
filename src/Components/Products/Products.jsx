import React from "react";
import style from "./Products.module.css";
import TopHeader from "../MainPage/TopHeader/TopHeader";
import Header from "../MainPage/Header/Header";
import Payments from "../MainPage/Payments/Payments";
import Footer from "../MainPage/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  selectProduct,
} from "../../store/reducers/products-reducer";
import { Route, Switch } from "react-router";

const Products = () => {
  const jackets = useSelector(selectProduct);
  const dispatch = useDispatch();
  return (
    <div className={style.products}>
      <TopHeader />
      <Header />
      <Switch>
        <Route path="/products/jackets">
          <div className={style.component}>
            <h3>ПИДЖАКИ</h3>
            <div className={style.main}>
              {jackets.map((jacket) => {
                return (
                  <div className={style.product} key={jacket.id}>
                    <img src={jacket.url} alt="" />
                    <div className={style.block}>
                      <button>В корзину</button>
                      <button onClick={() => dispatch(addFavorite(jacket.id))}>
                        В избранное
                      </button>
                    </div>
                    <p>{jacket.name}</p>
                    <span>От {jacket.price} руб.</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Route>
      </Switch>
      <Payments />
      <Footer />
    </div>
  );
};

export default Products;
