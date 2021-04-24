import React from "react";
import style from "./Products.module.css";
import TopHeader from "../MainPage/TopHeader/TopHeader";
import Header from "../MainPage/Header/Header";
import Payments from "../MainPage/Payments/Payments";
import Footer from "../MainPage/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteBrand,
  addFavoriteCardigan,
  addFavoriteJacket,
  addFavoritePants,
  addFavoriteShirt,
  addFavoriteSpirit,
  selectBrand,
  selectCardigan,
  selectJacket,
  selectPants,
  selectShirt,
  selectSpirit,
} from "../../store/reducers/products-reducer";
import { Route, Switch } from "react-router";

const Products = () => {
  const jackets = useSelector(selectJacket);
  const pants = useSelector(selectPants);
  const shirts = useSelector(selectShirt);
  const cardigans = useSelector(selectCardigan);
  const spirits = useSelector(selectSpirit);
  const brands = useSelector(selectBrand);
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
                      <button
                        onClick={() => dispatch(addFavoriteJacket(jacket.id))}
                      >
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
        <Route path="/products/pants">
          <div className={style.component}>
            <h3>БРЮКИ</h3>
            <div className={style.main}>
              {pants.map((pant) => {
                return (
                  <div className={style.product} key={pant.id}>
                    <img src={pant.url} alt="" />
                    <div className={style.block}>
                      <button>В корзину</button>
                      <button
                        onClick={() => dispatch(addFavoritePants(pant.id))}
                      >
                        В избранное
                      </button>
                    </div>
                    <p>{pant.name}</p>
                    <span>От {pant.price} руб.</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Route>
        <Route path="/products/shirts">
          <div className={style.component}>
            <h3>РУБАШКИ</h3>
            <div className={style.main}>
              {shirts.map((shirt) => {
                return (
                  <div className={style.product} key={shirt.id}>
                    <img src={shirt.url} alt="" />
                    <div className={style.block}>
                      <button>В корзину</button>
                      <button
                        onClick={() => dispatch(addFavoriteShirt(shirt.id))}
                      >
                        В избранное
                      </button>
                    </div>
                    <p>{shirt.name}</p>
                    <span>От {shirt.price} руб.</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Route>
        <Route path="/products/cardigans">
          <div className={style.component}>
            <h3>ДЖЕМПЕРЫ и КАРДИГАНЫ</h3>
            <div className={style.main}>
              {cardigans.map((cardigan) => {
                return (
                  <div className={style.product} key={cardigan.id}>
                    <img src={cardigan.url} alt="" />
                    <div className={style.block}>
                      <button>В корзину</button>
                      <button
                        onClick={() =>
                          dispatch(addFavoriteCardigan(cardigan.id))
                        }
                      >
                        В избранное
                      </button>
                    </div>
                    <p>{cardigan.name}</p>
                    <span>От {cardigan.price} руб.</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Route>
        <Route path="/products/styleone">
          <div className={style.component}>
            <h3>ДУХ ТВОРЧЕСТВА</h3>
            <div className={style.main}>
              {spirits.map((spirit) => {
                return (
                  <div className={style.product} key={spirit.id}>
                    <img src={spirit.url} alt="" />
                    <div className={style.block}>
                      <button>В корзину</button>
                      <button
                        onClick={() => dispatch(addFavoriteSpirit(spirit.id))}
                      >
                        В избранное
                      </button>
                    </div>
                    <p>{spirit.name}</p>
                    <span>От {spirit.price} руб.</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Route>
        <Route path="/products/styletwo">
          <div className={style.component}>
            <h3>BARKLAND</h3>
            <div className={style.main}>
              {brands.map((brand) => {
                return (
                  <div className={style.product} key={brand.id}>
                    <img src={brand.url} alt="" />
                    <div className={style.block}>
                      <button>В корзину</button>
                      <button
                        onClick={() => dispatch(addFavoriteBrand(brand.id))}
                      >
                        В избранное
                      </button>
                    </div>
                    <p>{brand.name}</p>
                    <span>От {brand.price} руб.</span>
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
