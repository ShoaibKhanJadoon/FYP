"use client"
import Cart from "./Cart";
import Navigation from "./Navigation";
import { useState , useEffect} from "react";

const NavigationAndCart=()=>{
    const [viewCart, setViewCart] = useState(false);
    
  const toggleCart = () => {
    setViewCart((prev) => !prev);
  };
  // Lock scrolling on the main website when the cart is open
  useEffect(() => {
    if (viewCart) {
      document.body.style.overflow = "hidden"; // Lock main website scrolling
    } else {
      document.body.style.overflow = ""; // Unlock main website scrolling
    }
    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [viewCart]);
    return(
        <>
            <Navigation toggleCart={toggleCart} />
            <Cart viewCart={viewCart} toggleCart={toggleCart} />
        </>
    )
}
export default NavigationAndCart;