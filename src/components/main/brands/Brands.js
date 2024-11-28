import React from "react";
import "./../brands/Brand.css";

const Brands = () => {
  return (
    <div>
      <div className="brands-logos">
        <div className="scrolling">
          <h2>VERSACE</h2>
          <h2>ZARA</h2>
          <h2>GUCCI</h2>
          <h2>PRADA</h2>
          <h2>Calvin Klein</h2>
          {/* Duplicate brand names for seamless scrolling */}
          <h2>VERSACE</h2>
          <h2>ZARA</h2>
          <h2>GUCCI</h2>
          <h2>PRADA</h2>
          <h2>Calvin Klein</h2>
        </div>
      </div>
    </div>
  );
};

export default Brands;
