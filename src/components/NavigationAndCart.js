"use client"
import Cart from "./Cart";
import Navigation from "./Navigation";
import { useState } from "react";

const NavigationAndCart=()=>{
    const [viewCart, setViewCart] = useState(false);

  const toggleCart = () => {
    setViewCart((prev) => !prev);
  };
    return(
        <>
            <Navigation toggleCart={toggleCart} />
            <Cart viewCart={viewCart} toggleCart={toggleCart} />
        </>
    )
}
export default NavigationAndCart;