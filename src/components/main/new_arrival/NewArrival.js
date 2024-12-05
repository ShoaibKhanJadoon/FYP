"use client"
import React from "react";
import "./../new_arrival/NewArrival.css";
import Link from 'next/link';
const NewArrival = ({products}) => {


  return (
    <div>
      <div className="container2">
        <h2></h2>
      </div>
      <div className="btn">
        <Link href={"/Products/Recomended"} className="btn">View All</Link>
      </div>
      <div className="clothes">
      {products.map((product,index)=>(
        <div className="opt1" key={index} >
        <div className="imag">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
          />
        </div>
        <div className="desc">
          <h4 className="title">{product.name}</h4>
          <p>⭐⭐⭐⭐⭐ 5/5</p>
          <h3 className="price">{product.price}</h3>
        </div>
      </div>
      ))}
        
        
      </div>
      <hr className="line2" />
    </div>
  );
};

export default NewArrival;
