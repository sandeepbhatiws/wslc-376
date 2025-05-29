import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../Redux Toolkit/cart';

export default function ProductCard({ item }) {

  const dispatch = useDispatch();

  return (
    <>
      <div className="group relative">
        <img
          alt={item.name}
          src={item.image}
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <Link to={`/product-details/${item.id}`}>
                {item.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{item.category_name}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{item.price}</p>
        </div>
        <div className="mt-4 flex justify-center">
          <button onClick={ () => dispatch(addToCart(item)) } type="button" class="h-10 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer">
            Add to Cart
        </button>
        </div>
        
      </div>
    </>
  )
}
