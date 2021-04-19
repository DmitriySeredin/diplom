import React from "react";
import TopHeader from "./TopHeader/TopHeader";
import style from "./MainPage.module.css";
import Header from "./Header/Header";
import Sales from "./Sales/Sales";
import Picture from "./Picture/Picture";
import Separator from "./Separator/Separator";
import Models from "./Models/Models";
import Brands from "./Brands/Brands";
import Payments from "./Payments/Payments";
import Footer from "./Footer/Footer";

const MainPage = () => {
  return (
    <div className={style.mainPage}>
      <TopHeader />
      <Header />
      <Sales />
      <Picture />
      <Separator />
      <Models />
      <Brands />
      <Payments />
      <Footer />
    </div>
  );
};

export default MainPage;
