import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css';
import MovieListing from './Components/MovieListing';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ToastContainer/>
    <MovieListing/>
  </StrictMode>,
)
