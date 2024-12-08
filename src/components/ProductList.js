"use client"

import Link from 'next/link';

const ProductList = ({ filters }) => {
  // apply the fetch request here
  const product =[{
    id: 5,
    name: 'Basic Tee',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },]
  console.log(filters)

  const filteredProducts = product.filter((product) => {
    const productMatches = Object.entries(filters).every(([sectionId, values]) => {
      return values.length === 0 || values.includes(product[sectionId]);
    });
    return productMatches;
  }); 
  // console.log(filteredProducts)

  return (
    <div className="bg-white" >
      <div className="mx-auto max-w-2xl   lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

        {filteredProducts.map((product) => (
            <Link key={product.id} href={`/Products/Product/${product.id}`}>
              <div className="group relative">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  )
}

export default ProductList;