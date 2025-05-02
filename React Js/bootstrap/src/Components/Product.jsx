import React, { useEffect } from 'react'
import '../assets/css/product.css'
import Header from './Common/Header'
import DiscoverProduct from './DiscoverProduct'
import Footer from './Common/Footer'
import ProductListing from './ProductListing'
import { ToastContainer } from 'react-toastify'

export default function Product() {
    
    return (
        <>
            <ToastContainer/>
            <Header />
            <DiscoverProduct />
            <ProductListing />
            <Footer />
        </>
    )
}
