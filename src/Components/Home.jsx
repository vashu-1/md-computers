import React from "react";
import Banner from "./Home/Banner";
import Swiper from "./Home/Swiper";
import OfferZone from "./Home/OfferZone";
import Products from "./Home/Products";
import MackbookPlus from "./Home/MackbookPlus";
import Explore from "./Home/Explore";
import MainCategories from "./Home/MainCategories";
import Brand from "./Home/Brand";
import WhatYouSayAboutUs from "./Home/WhatYouSayAboutUs";
import ContactInfo from "./Home/ContactInfo";

function HomePage() {
  return (
    <>
      <Banner />
      <Swiper />
      <OfferZone />
      <Products />
      <MackbookPlus />
      <Explore />
      <MainCategories />
      <Brand />
      <WhatYouSayAboutUs />
      <ContactInfo />
    </>
  );
}

export default HomePage;
