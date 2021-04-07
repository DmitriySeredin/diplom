import React from "react";
import TopHeader from "./TopHeader/TopHeader";
import style from "./MainPage.module.css";
import Header from "./Header/Header";

const MainPage = () => {
  return (
    <div className={style.mainPage}>
      <TopHeader />
      <Header />
    </div>
  );
};

export default MainPage;
