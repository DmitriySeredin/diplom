import React from "react";
import style from "./Picture.module.css";
const Picture = () => {
  return (
    <div className={style.block}>
      <img
        className={style.img}
        src="http://bowandtie.ru/wp-content/uploads/2014/07/Dress-kod-v-nashey-zhizni.jpg"
        alt=""
      />
      <h1>HARAKTER</h1>
    </div>
  );
};
export default Picture;
