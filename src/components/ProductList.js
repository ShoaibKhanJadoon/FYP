"use client"

import Link from 'next/link';

const ProductList = ({ filters, products}) => {
  // apply the fetch request here
  console.log("filter"+filters)

  const filteredProducts = products.filter((product) => {
    // Iterate over each filter section and check if product matches
    return Object.entries(filters).every(([sectionId, values]) => {
        // If no values are selected for this section, don't filter
        if (values.length === 0) return true;

        // Check if product's attribute includes any of the selected filter values
        return values.some((value) => product[sectionId]?.includes(value));
    });
});

  console.log("filter products"+filteredProducts)

  return (
    <div className="bg-white " >
      <div className="mx-auto max-w-2xl   lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        
        { filteredProducts.map((product) => (
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