import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './Components/HomePage';
import RootLayout from './Components/RootLayout';
import AboutUsPage from './Components/AboutUsPage';
import ProductLisitng from './Components/ProductLisitng';
import ProductDetails from './Components/ProductDetails';
import ViewCart from './Components/ViewCart';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
    <Routes>
      <Route element={ <RootLayout/> }>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/products/:slug?" element={<ProductLisitng />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/view-carts" element={<ViewCart />} />
      </Route>
      
    </Routes>

  </BrowserRouter>
)
