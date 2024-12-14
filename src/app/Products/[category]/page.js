import React from 'react'
import Products from "@/components/Products"

// const page = () => {
  const page =async ({params})=>{

  let categoryencoded=(await params).category;

  let category = decodeURIComponent(categoryencoded);
  
  return (
    <div>
        <Products selectedCategory={category} />
    </div>
  )
}

export default page