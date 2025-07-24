import React, { useEffect, useState } from 'react'
import BannerSlider from './BannerSlider'
import ProductCard from './ProductCard'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function HomePage() {

  const [bestSellings, setBestSellings] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/products.php', {
      params: {
        limit: 8,
        categories: 'mens-shirts,mens-shoes'
      }
    })
      .then((result) => {
        setBestSellings(result.data.data)
      })
      .catch((error) => {
        toast.error('Something went wrong !');
      })
  }, []);

  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/products.php', {
      params: {
        limit: 8,
        categories: 'tops,home-decoration'
      }
    })
      .then((result) => {
        setTopRated(result.data.data)
      })
      .catch((error) => {
        toast.error('Something went wrong !');
      })
  }, []);

  return (
    <>
      <BannerSlider />

      {
        bestSellings.length > 0
          ?
            <div className="bg-white">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Best Sellings</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {
                    bestSellings.map((items, index) => {
                      return (
                        <ProductCard key={index} item={items}  />
                      )
                    })
                  }

                </div>
              </div>
            </div>
          :
          ''
      }


      {
        topRated.length > 0
          ?
            <div className="bg-white">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Top Rated</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {
                    topRated.map((v, index) => {
                      return (
                        <ProductCard key={index} item={v}  />
                      )
                    })
                  }

                </div>
              </div>
            </div>
          :
          ''
      }
    </>
  )
}
