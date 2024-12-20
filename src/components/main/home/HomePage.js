import React from "react";
import HeroSection from "../hero_section/HeroSection";
import Brands from "../brands/Brands";
import NewArrival from "../new_arrival/NewArrival";
import DressStyles from "../browse_by_dress_styles/DressStyles";
import Review from "../reviews/ReviewCards"

const Home = () => {
  const product = [{
    id: 4,
    name: 'Basic Tee',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 5,
    name: 'Basic Tee',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 6,
    name: 'Stylish Jacket',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Stylish Jacket in blue.",
    price: '$60',
    color: 'Blue',
  },
  {
    id: 7,
    name: 'Casual Shoes',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Front of men's Casual Shoes in brown.",
    price: '$50',
    color: 'Brown',
  },];
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 2xl:container 2xl:mx-auto">
      <HeroSection />
      <Brands />
      <NewArrival products={product} category={"NEW ARRIVALS"} />
      <NewArrival products={product}  category={"TOP SELLING"} />
      <DressStyles />
      <Review/>

    </div>
  );
};

export default Home;
