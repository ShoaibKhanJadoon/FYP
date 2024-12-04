// src/app/Products/Product/[id]/page.js
import ProductDetail from "@/components/ProductDetail";

const Page = async ({ params }) => {
  const  id  =(await params).id;
  // console.log(id) 

  return (
    <div>
      <ProductDetail id={id} />
    </div>
  );
};

export default Page;


