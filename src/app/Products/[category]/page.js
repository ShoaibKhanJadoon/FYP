import React from 'react'
import Products from "@/components/Products"

// const page = () => {
  const page =async (params)=>{

  let category=(await params).category;
  console.log("shoaib khan="+category)
  
  

  return (
    <div>
        <Products productCategory={category} />
    </div>
  )
}

export default page