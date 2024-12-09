import React from 'react'
import Products from "@/components/Products"

// const page = () => {
  const page =async ({params})=>{

  let categoryencoded=(await params).category;

  let category = decodeURIComponent(categoryencoded);
  console.log("shoaib khan="+category)
  
  

  return (
    <div>
        <Products productCategory={category} />
    </div>
  )
}

export default page