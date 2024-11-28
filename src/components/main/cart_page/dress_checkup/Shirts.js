"use client";
import React, { useState } from "react";
import "./styles.css";

const Shirts = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://media.istockphoto.com/id/1830111752/photo/black-t-shirt-short-sleeve-mockup.webp?a=1&b=1&s=612x612&w=0&k=20&c=vm0iiyFYBSSYTagEAgwJH0ESP5ZYMo-Vw6EmF9XOSUw="
  );
  const [isFullScreen, setIsFullScreen] = useState(false);

  const images = [
    {
      src: "https://media.istockphoto.com/id/1830111752/photo/black-t-shirt-short-sleeve-mockup.webp?a=1&b=1&s=612x612&w=0&k=20&c=vm0iiyFYBSSYTagEAgwJH0ESP5ZYMo-Vw6EmF9XOSUw=",
      alt: "Black T-shirt Mockup",
    },
    {
      src: "https://media.istockphoto.com/id/1542566108/photo/young-businessman-smiling-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=wmImvJ9PG_lr7XTm2cgStbBE2TT55D4rh-zz4qc_1l0=",
      alt: "Young Businessman",
    },
    {
      src: "https://media.istockphoto.com/id/1501781167/photo/black-t-shirt-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=7PpSLoCEjfwJE5nJi62tnzr-wcp-VxoQy2mF3rHyPh8=",
      alt: "Black T-shirt Isolated",
    },
  ];

  const openFullScreen = () => {
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <div className="whole-container">
      <div className="img-container">
        {/* Left Container with Thumbnails */}
        <div className="left-container">
          {images.map((image, index) => (
            <img
              key={index}
              className={`lft-img ${
                selectedImage === image.src ? "active" : ""
              }`}
              src={image.src}
              alt={image.alt}
              onClick={() => setSelectedImage(image.src)}
            />
          ))}
        </div>

        {/* Right Container with Selected Image */}
        <div className="right-container">
          <img
            className="selected-img"
            src={selectedImage}
            alt="Selected Shirt"
            onClick={openFullScreen}
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="cstm-details">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>*****</p>
        <p>$300</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          maiores odio reiciendis harum ipsam quibusdam non vero. Minus, et
          accusantium.
        </p>
        <hr className="line-seg" />
        <div className="color">
          <p>Choose Color</p>
          <p>Black White Green</p>
        </div>
        <div className="size">
          <p>Select Size</p>
          <p>small large xtra large xxl large</p>
        </div>
        <div className="quantity">
          - 1 + <button>Add to Cart</button>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullScreen && (
        <div className="fullscreen-modal" onClick={closeFullScreen}>
          <img
            className="fullscreen-img"
            src={selectedImage}
            alt="Full Screen Preview"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
          />
        </div>
      )}
    </div>
  );
};

export default Shirts;
