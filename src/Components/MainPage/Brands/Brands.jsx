import React from "react";
import style from "./Brands.module.css";
const Brands = () => {
  return (
    <div className={style.brands}>
      <div>
        <h3>МОДНЫЕ БРЕНДЫ</h3>
      </div>
      <ul>
        <li>
          <img
            src="https://status-up.ru/image/cache/catalog/manufacturer/barkland_logo-320x430.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://a.mktgcdn.com/p/5Iamrj38U0RyFCy3TWNHSHqu7pWCGz6xP6MVLgv5-dE/400x400.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://kasta.ua/imgw/loc/0x0/io/brand-logo/47802/default_c0b92d82-2d58-4f36-97b3-cd536879a160.png"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/carhartt-hp-logos-256x256.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/ellesse-hp-logos-256x256.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://content.asos-media.com/-/media/homepages/unisex/brands/256x256/dr-martens-hp-logos-256x256.jpg"
            alt=""
          />
        </li>
      </ul>
    </div>
  );
};
export default Brands;
