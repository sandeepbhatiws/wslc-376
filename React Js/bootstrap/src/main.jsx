import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Product from './Components/Product';
import Contact from './Components/Contact';
import Faq from './Components/Faq';
import './assets/css/style.css';

import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from './Components/RootLayout';
import ProductDetail from './Components/ProductDetail';
import Context from './Context API/Context';
import ViewCart from './Components/ViewCart';
import LoginRegister from './Components/LoginRegister';

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

    <Context>
      <Routes>
        <Route element={ <RootLayout /> }>
          <Route path="/" element={<Home />} />
          <Route path="faqs" element={<Faq />} />
          <Route path="products" element={<Product />} />
          <Route path="product/product-details/:id" element={<ProductDetail />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/view-carts" element={<ViewCart />} />
          <Route path="/login-register" element={<LoginRegister />} />
        </Route>
      </Routes>
    </Context>

    
  </BrowserRouter>,
)
