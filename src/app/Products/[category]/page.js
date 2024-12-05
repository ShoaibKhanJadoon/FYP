import React from 'react'
import Products from "@/components/Products"

const page = async ({params}) => {
  const category=(await params).category;

  return (
    <div>
        <Products category={category} />
    </div>
  )
}

export default page