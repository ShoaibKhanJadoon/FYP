import React from "react";
import "./../hero_section/HeroSection.css";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <div className="w-full flex flex-col justify-between sm:flex-row">
        <div className="left-side">
          <div>
            <div className="heading ">
              <h2>
                FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
              </h2>
            </div>
            <div className="description">
              <p className="text-xl text-black ">
                Discover a wide range of stylish and comfortable clothing
                tailored to your unique preferences. Whether you&apos;re looking
                for everyday essentials or statement pieces, we&apos;ve got you
                covered with quality and elegance in every stitch.
              </p>
            </div>
            <div className="shop-btn">
              <Link className="btn" href={"/Products/Recomended Products"}>
                Shop Now
              </Link>
            </div>

            <div className="stats">
              <div className="stats-desc">
                <h3>200+</h3>
                <p>International Brands</p>
              </div>
              <div className="line"></div>
              <div className="stats-desc">
                <h3>200+</h3>
                <p>International Brands</p>
              </div>
              <div className="line"></div>
              <div className="stats-desc">
                <h3>200+</h3>
                <p>International Brands</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <img
            src="https://images.pexels.com/photos/29504483/pexels-photo-29504483/free-photo-of-stylish-fashion-portrait-in-lahore-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Stylish Fashion Portrait"
            layout="responsive"
            width={1260}
            height={750}
            
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
