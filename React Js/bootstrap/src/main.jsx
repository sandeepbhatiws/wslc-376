import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Product from './Components/Product';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home/> */}
    <Product/>
  </StrictMode>,
)
