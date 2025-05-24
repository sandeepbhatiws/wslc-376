import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './Components/HomePage';
import RootLayout from './Components/RootLayout';
import AboutUsPage from './Components/AboutUsPage';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>
      <Route element={ <RootLayout/> }>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Route>
      
    </Routes>

  </BrowserRouter>
)
