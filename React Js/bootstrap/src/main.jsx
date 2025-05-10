import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Product from './Components/Product';
import Contact from './Components/Contact';
import Faq from './Components/Faq';

import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from './Components/RootLayout';
import ProductDetail from './Components/ProductDetail';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//   },
//   {
//     path : '/contact-us',
//     element: <Contact/>
//   },{
//     path : '/faqs',
//     element: <Faq/>
//   },{
//     path: '/products',
//     element: <Product/>
//   }
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//       {/* <RouterProvider router={router} /> */}


//   </StrictMode>,
// )

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      <Route element={ <RootLayout /> }>
        <Route path="/" element={<Home />} />
        <Route path="faqs" element={<Faq />} />
        <Route path="products" element={<Product />} />
        <Route path="product/product-details/:id/:slug?" element={<ProductDetail />} />
        <Route path="/contact-us" element={<Contact />} />
      </Route>

      
    </Routes>
  </BrowserRouter>,
)
