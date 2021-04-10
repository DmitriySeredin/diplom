import React from "react";
import style from "./Payments.module.css";

const Payments = () => {
  return (
    <div className={style.component}>
      <div className={style.wrapper}>
        <div className={style.social}>
          <img
            src="https://puntlandpost.net/wp-content/uploads/2020/12/4.png"
            alt=""
          />
          <img
            src="https://pics.freeicons.io/uploads/icons/png/14198198341555589920-512.png"
            alt=""
          />
          <img
            src="https://cdn.icon-icons.com/icons2/1121/PNG/512/1486147202-social-media-circled-network10_79475.png"
            alt=""
          />
        </div>
        <div className={style.line}></div>
        <div className={style.payments}>
          <img src="https://images.asos-media.com/navigation/visa-png" alt="" />
          <img
            src="https://images.asos-media.com/navigation/mastercard-png"
            alt=""
          />
          <img src="https://images.asos-media.com/navigation/mir-png" alt="" />
          <img
            src="https://images.asos-media.com/navigation/pay-pal-png"
            alt=""
          />
          <img
            src="https://images.asos-media.com/navigation/american-express-png"
            alt=""
          />
          <img
            src="https://images.asos-media.com/navigation/visa-electron-png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Payments;
