import React, { useEffect, useState } from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import Slider from './Slider'
import axios from 'axios'
import { toast } from 'react-toastify'
import ProductCard from './ProductCard'

export default function Home() {

    let [products, setProducts] = useState([]);
 
    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/products.php', {
            params : {
                limit : 8,
                categories : 'mens-shirts,mens-shoes'
            }
        })
        .then((result) => {
            setProducts(result.data.data)
        })
        .catch((error) => {
            toast.error('Something went wrong !');
        })
    },[]);

  return (
    <>
        <div className='container-fluid p-0'>
            <Slider/>
        </div>
        <div className='container-fluid p-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 pb-4 text-center'>
                        <h1>Best Seller Products</h1>
                    </div>
                </div>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'>
                    {
                        (products.length > 0)
                        ?
                        products.map((v, i) => {
                            return (
                            <ProductCard key={i} product={v}/>
                            )
                        })
        
                        :
                        ''
                        }
                </div>
            </div>
        </div>
    </>
  )
}
