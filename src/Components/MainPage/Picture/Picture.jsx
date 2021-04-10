import React from "react";
import style from "./Picture.module.css";
const Picture = () => {
  return (
    <div className={style.block}>
      <img
        className={style.img}
        src="https://content.asos-media.com/-/media/homepages/unisex/ts-tm/tm/desktop/ru-tm-trossard-hp-desktop-hero-coming-soon.jpg"
        alt=""
      />
    </div>
  );
};
export default Picture;
