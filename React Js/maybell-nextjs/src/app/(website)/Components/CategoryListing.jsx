"use client"
import React, { useState } from 'react'
import ProductCard from './Common/ProductCard'
import { useParams } from 'next/navigation';

export default function CategoryListing() {

  const params = useParams();

  console.log(params);

  const [products, setProducts] = useState([1,2,3,4,1,2,3,4,4]);

  return (
    <>
      <section
        class="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
      >
        {/* <!-- sidebar  --> */}
        <section class="hidden w-[300px] flex-shrink-0 px-4 lg:block">
          <div class="flex border-b pb-5">
            <div class="w-full">
              <p class="mb-3 font-medium">CATEGORIES</p>

              <div class="flex w-full justify-between">
                <div class="flex justify-center items-center">
                  <input type="checkbox" />
                  <p class="ml-4">Bedroom</p>
                </div>
                <div>
                  <p class="text-gray-500">(12)</p>
                </div>
              </div>

              <div class="flex w-full justify-between">
                <div class="flex justify-center items-center">
                  <input type="checkbox" />
                  <p class="ml-4">Sofa</p>
                </div>
                <div>
                  <p class="text-gray-500">(15)</p>
                </div>
              </div>

              <div class="flex w-full justify-between">
                <div class="flex justify-center items-center">
                  <input type="checkbox" />
                  <p class="ml-4">Office</p>
                </div>
                <div>
                  <p class="text-gray-500">(14)</p>
                </div>
              </div>

              <div class="flex w-full justify-between">
                <div class="flex justify-center items-center">
                  <input type="checkbox" />
                  <p class="ml-4">Outdoor</p>
                </div>
                <div>
                  <p class="text-gray-500">(124)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex border-b py-5">
            <div class="w-full">
              <p class="mb-3 font-medium">BRANDS</p>

              <div class="flex w-full justify-between">
                <div class="flex justify-center items-center">
                  <input type="checkbox" />
                  <p class="ml-4">APEX</p>
                </div>
                <div>
                  <p class="text-gray-500">(12)</p>
                </div>
              </div>

              <div class="flex w-full justify-between">
                <div class="flex justify-center items-center">
                  <input type="checkbox" />
                  <p class="ml-4">Call of SOFA</p>
                </div>
                <div>
                  <p class="text-gray-500">(15)</p>
                </div>
              </div>

              <div class="flex w-full justify-between">
                <div class="flex justify-center items-center">
                  <input type="checkbox" />
                  <p class="ml-4">Puff B&G</p>
                </div>
                <div>
                  <p class="text-gray-500">(14)</p>
                </div>
              </div>

              <div class="flex w-full justify-between">
                <div class="flex justify-center items-center">
                  <input type="checkbox" />
                  <p class="ml-4">Fornighte</p>
                </div>
                <div>
                  <p class="text-gray-500">(124)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex border-b py-5">
            <div class="w-full">
              <p class="mb-3 font-medium">PRICE</p>

              <div class="flex w-full">
                <div class="flex justify-between">
                  <input
                    x-mask="99999"
                    min="50"
                    type="number"
                    class="h-8 w-[90px] border pl-2"
                    placeholder="50"
                  />
                  <span class="px-3">-</span>
                  <input
                    x-mask="999999"
                    type="number"
                    max="999999"
                    class="h-8 w-[90px] border pl-2"
                    placeholder="99999"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="flex border-b py-5">
            <div class="w-full">
              <p class="mb-3 font-medium">SIZE</p>

              <div class="flex gap-2">
                <div
                  class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                >
                  XS
                </div>
                <div
                  class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                >
                  S
                </div>
                <div
                  class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                >
                  M
                </div>

                <div
                  class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                >
                  L
                </div>

                <div
                  class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                >
                  XL
                </div>
              </div>
            </div>
          </div>

          <div class="flex py-5">
            <div class="w-full">
              <p class="mb-3 font-medium">COLOR</p>

              <div class="flex gap-2">
                <div
                  class="h-8 w-8 cursor-pointer border border-white bg-gray-600 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                ></div>
                <div
                  class="h-8 w-8 cursor-pointer border border-white bg-violet-900 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                ></div>
                <div
                  class="h-8 w-8 cursor-pointer border border-white bg-red-900 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                ></div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /sidebar  --> */}

        <div>
          <div class="mb-5 flex items-center justify-between px-5">
            <div class="flex gap-3">
              <button class="flex items-center justify-center border px-6 py-2">
                Sort by
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="mx-2 h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              <button
                class="flex items-center justify-center border px-6 py-2 md:hidden"
              >
                Filters
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="mx-2 h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>

            <div class="hidden gap-3 lg:flex">
              <button class="border bg-amber-400 py-2 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>
              </button>

              <button class="border py-2 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <section
            class="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-3"
          >


            {
                products.map((v,i) => {
                    return(
                        <ProductCard key={i}/>
                    )
                })
            }

            
          </section>
        </div>
      </section>
    </>
  )
}
