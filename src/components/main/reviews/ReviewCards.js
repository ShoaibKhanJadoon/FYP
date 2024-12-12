"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import "./ReviewCard.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ReviewCards = () => {
  const autoplay = Autoplay({ delay: 2000 }); // Set autoplay delay in milliseconds

  return (
    <div className="flex justify-center items-center w-full p-8 flex-col">
      <h2 className="flex justify-center items-center md:text-3xl text-2xl font-bold">
        What Our Customers Say
      </h2>
      <Carousel
        className="w-4/5 h-auto"
        plugins={[autoplay]} // Pass the autoplay instance
        options={{
          loop: true, // Ensure the carousel loops for autoplay
        }}
      >
        <CarouselContent className="p-8">
          {reviewsData.map((user, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 rounded-3xl"
            >
              <div className="p-1">
                <div>
                  <div className="py-3 px-2 min-h-40 bg-gray-100 border-black border-2 rounded-3xl">
                    <p className="user-name font-bold">{user.name}</p>
                    <p className="text-yellow-500">{user.stars}</p>
                    <p className="user-review text-gray-700 mt-2">{user.review}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

const reviewsData = [
  {
    name: "Ayesha Khan",
    stars: "⭐⭐⭐⭐ 4/5",
    review: "The shirts I ordered fit perfectly! Great quality and fast delivery. Will shop again.",
  },
  {
    name: "Omar Ali",
    stars: "⭐⭐⭐ 3/5",
    review: "Amazing pants collection! The virtual try-on feature helped me a lot.",
  },
  {
    name: "Fatima Ahmed",
    stars: "⭐⭐⭐⭐ 4/5",
    review: "The customer support was super helpful when I had questions about sizes. Highly recommend this store!",
  },
  {
    name: "Hassan Raza",
    stars: "⭐⭐⭐⭐ 4/5",
    review: "I loved the recommendations! Found exactly what I was looking for in no time.",
  },
  {
    name: "Zara Noor",
    stars: "⭐⭐⭐⭐⭐ 5/5",
    review: "The AR visualization feature is incredible. It made shopping so much easier!",
  },
];

export default ReviewCards;

// "use client"
// import React from "react";
// import Autoplay from "embla-carousel-autoplay"
// import "./ReviewCard.css";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// const ReviewCards = () => {
//   return (
//     <div className="flex justify-center items-center w-full  p-8 flex-col">
//       <h2 className="flex justify-center items-center md:text-3xl text-2xl font-bold">
//         What Our Customers Say
//       </h2>
//       <Carousel className="w-4/5 h-max "
//          plugins={[
//           Autoplay({
//             delay: 200,
//           }),
//         ]}
//         options={{
//           loop: true, // Ensure the carousel loops for autoplay
//         }}
//       >
//         <CarouselContent className="p-8">
//           {reviewsData.map((user, index) => (
//             <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 rounded-3xl">
//               <div className="p-1">
//                 <div>
//                   <div className=" py-3 px-2 min-h-40 bg-gray-100 border-black border-2 rounded-3xl">
//                     <p className="user-name">{user.name}</p>
//                     <p>{user.stars}</p>
//                     <p className="user-review">{user.review}</p>
//                   </div>
//                 </div>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   );
// };

// const reviewsData = [
//   {
//     name: "Ayesha Khan",
//     stars:"⭐⭐⭐⭐ 4/5",
//     review: "The shirts I ordered fit perfectly! Great quality and fast delivery. Will shop again.",
//   },
//   {
//     name: "Omar Ali",
//     stars:"⭐⭐⭐ 3/5",
//     review: "Amazing pants collection! The virtual try-on feature helped me a lot.",
//   },
//   {
//     name: "Fatima Ahmed",
//     stars:"⭐⭐⭐⭐ 4/5",
//     review: "The customer support was super helpful when I had questions about sizes. Highly recommend this store!",
//   },
//   {
//     name: "Hassan Raza",
//     stars:"⭐⭐⭐⭐ 4/5",
//     review: "I loved the recommendations! Found exactly what I was looking for in no time.",
//   },
//   {
//     name: "Zara Noor",
//     stars:"⭐⭐⭐⭐⭐ 5/5",
//     review: "The AR visualization feature is incredible. It made shopping so much easier!",
    
//   },
// ];


// export default ReviewCards;
