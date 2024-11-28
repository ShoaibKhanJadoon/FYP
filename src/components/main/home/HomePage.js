import React from "react";
import HeroSection from "../hero_section/HeroSection";
import Brands from "../brands/Brands";
import NewArrival from "../new_arrival/NewArrival";
import DressStyles from "../browse_by_dress_styles/DressStyles";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Brands />
      <NewArrival />
      <NewArrival />
      <DressStyles />
    </div>
  );
};

export default Home;
