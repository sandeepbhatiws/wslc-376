import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Product from './Components/Product';
import Contact from './Components/Contact';
import Faq from './Components/Faq';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path : '/contact-us',
    element: <Contact/>
  },{
    path : '/faqs',
    element: <Faq/>
  },{
    path: '/products',
    element: <Product/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
