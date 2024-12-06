import React from 'react'
import Products from "@/components/Products"

const page = async ({params}) => {
  let category=(await params).category;
  if(!category){
    category="Recomended"
  }

  return (
    <div>
        <Products productCategory={category} />
    </div>
  )
}

export default page