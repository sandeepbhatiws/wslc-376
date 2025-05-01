import React, { useEffect } from 'react'
import '../assets/css/product.css'
import Header from './Common/Header'
import DiscoverProduct from './DiscoverProduct'
import Footer from './Common/Footer'
import ProductListing from './ProductListing'

export default function Product() {

    const getData = () => {
        console.log('Hello');
    }

    useEffect(() => {
        getData();
    },[]);  // [] means blank dependencies

    
    return (
        <>
            <Header />
            <DiscoverProduct />
            <ProductListing />
            <Footer />
        </>
    )
}
