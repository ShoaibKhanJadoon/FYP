"use client"
import React from "react";
import "./../new_arrival/NewArrival.css";
import Link from 'next/link';
const NewArrival = ({products,category}) => {



  return (
    <div>
      <div className="container2">
        <h2></h2>
      </div>
      <div className="flex justify-center items-center md:text-3xl text-2xl font-bold">{category}</div>
      <div className="flex justify-end items-center">
        <Link href={"/Products/Recomended"} className="bg-black px-3 py-1 mr-1 text-white rounded-3xl">View All</Link>
      </div>
      <div className="clothes">
      {products.map((product,index)=>(
        <Link key={index} href={`/Products/Product/${product.id}`} >
        <div className="opt1 p-4 m-8 hover:bg-slate-500 "  >
        <div className="imag ">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
          />
        </div>
        <div className="desc rounded-lg">
          <h4 className="title">{product.name}</h4>
          <p>⭐⭐⭐⭐⭐ 5/5</p>
          <h3 className="price">{product.price}</h3>
        </div>
      </div>
      </Link>
      ))}
        
        
      </div>
      <hr className="line2" />
    </div>
  );
};

export default NewArrival;
