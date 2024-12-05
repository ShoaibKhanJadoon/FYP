import React from "react";
import HeroSection from "../hero_section/HeroSection";
import Brands from "../brands/Brands";
import NewArrival from "../new_arrival/NewArrival";
import DressStyles from "../browse_by_dress_styles/DressStyles";

const Home = () => {
  const product = {
    id: 5,
    name: 'Basic Tee',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  };
  return (
    <div>
      <HeroSection />
      <Brands />
      <NewArrival  props={{product}}/>
      <NewArrival />
      <DressStyles />
    </div>
  );
};

export default Home;
