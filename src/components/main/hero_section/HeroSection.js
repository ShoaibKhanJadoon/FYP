import React from "react";
import "./../hero_section/HeroSection.css";

const HeroSection = () => {
  return (
    <div>
      <div className="container">
        <div className="left-side">
          <div>
            <div className="heading">
              <h2>
                FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
              </h2>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                sint tenetur eos ipsam repellat non illum nobis voluptatibus,
                aspernatur quis.
              </p>
            </div>
            <div className="shop-btn">
              <button className="btn">Shop Now</button>
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
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
