'use client';
import ProductList from "./ProductList"
import Link from 'next/link';

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'


const sortOptions = [
  // { name: 'Most Popular', href: '#', current: true },
  // { name: 'Best Rating', href: '#', current: false },
  // { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: "Recomended", href: "/Products/Recomended Products" },
  { name: "Men's Shirts", href: "/Products/Men's Shirts" },
  { name: "Women's Shirts", href: "/Products/Women's Shirts" },
  { name: "Men's Pants", href: "/Products/Men's Pants" },
  { name: "Women's Pants", href: "/Products/Women's Pants" },
  { name: "Casual Wear", href: "/Products/Casual Wear" },
];

const filters = [
  {
    id: 'colors', // Match the product attribute 'colors'
    name: 'Color',
    options: [
      { value: 'White', label: 'White', checked: false },
      { value: 'Beige', label: 'Beige', checked: false },
      { value: 'Blue', label: 'Blue', checked: false },
      { value: 'Brown', label: 'Brown', checked: false },
      { value: 'Green', label: 'Green', checked: false },
      { value: 'Purple', label: 'Purple', checked: false },
      { value: 'Black', label: 'Black', checked: false }, // Add missing color
    ],
  },
  {
    id: 'categories', // Match the product attribute 'categories'
    name: 'Category',
    options: [
      { value: 'New Arrivals', label: 'New Arrivals', checked: false }, // Adjust value to match product data
      { value: 'Sale', label: 'Sale', checked: false },
      { value: 'Travel', label: 'Travel', checked: false },
      { value: 'Organization', label: 'Organization', checked: false },
      { value: 'Accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'sizes', // Match the product attribute 'sizes'
    name: 'Size',
    options: [
      { value: '2L', label: '2L', checked: false },
      { value: '6L', label: '6L', checked: false },
      { value: '12L', label: '12L', checked: false },
      { value: '18L', label: '18L', checked: false },
      { value: '20L', label: '20L', checked: false },
      { value: '40L', label: '40L', checked: false },
    ],
  },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

import { ProductsData } from "@/data/data"

export default function Products({ selectedCategory }) {

  // sorting
  const [sortOption, setSortOption] = useState(sortOptions[0].name);

  const handleSortSelection = (selectedName) => {
    setSortOption(selectedName);
    sortOptions.forEach((option) => {
      option.current = option.name === selectedName;
    });
  };

  const sortProducts = (products, sortOption) => {
    switch (sortOption) {
      // case 'Most Popular':
      //   // Assuming you have a popularity metric in your product data
      //   return [...products].sort((a, b) => b.popularity - a.popularity);
      // case 'Best Rating':
      //   // Assuming you have a rating metric in your product data
      //   return [...products].sort((a, b) => b.rating - a.rating);
      // case 'Newest':
      //   // Assuming each product has a `releaseDate` field
      //   return [...products].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
      case 'Price: Low to High':
        return [...products].sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
      case 'Price: High to Low':
        return [...products].sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
      default:
        return products;
    }
  };

  // applying category filters
  const productscategory = ProductsData.filter(
    (product) =>
      selectedCategory === "Recomended Products" || product.category === selectedCategory
  );



  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (sectionId, optionValue) => {
    console.log("handle change filter" + sectionId, optionValue)

    setSelectedFilters((prev) => {
      const currentOptions = prev[sectionId] || [];
      if (currentOptions.includes(optionValue)) {
        return {
          ...prev,
          [sectionId]: currentOptions.filter((value) => value !== optionValue),
        };
      } else {
        return {
          ...prev,
          [sectionId]: [...currentOptions, optionValue],
        };
      }
    });
  };
  console.log(selectedFilters)
  const sortedProducts = sortProducts(productscategory, sortOption);


  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  return (

    <div className="bg-white">

      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <Link href={category.href} className="block px-2 py-3">
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}

                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              onChange={() => handleFilterChange(section.id, option.value)}

                              className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />

                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:container 2xl:mx-auto">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 py-2">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">{selectedCategory}</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        {/* <Link
                          
                          href={option.href}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none',
                          )}
                        >
                          {option.name}
                        </Link> */}
                        <button
                          onClick={() => handleSortSelection(option.name)}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none'
                          )}
                        >{option.name}</button>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <Link href={category.href}>{category.name}</Link>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              onChange={() => handleFilterChange(section.id, option.value)}

                              className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3 z-0">
                <ProductList filters={selectedFilters} products={sortedProducts} />
              </div>
            </div>
          </section>
        </main>
      </div>

    </div>
  )
}
