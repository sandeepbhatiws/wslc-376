import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import Header from './Header'
import AboutUs from './AboutUs'
import './assets/CSS/style.css';
import ShowHidePassword from './ShowHidePassword'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Welcome to WsCube Tech */}
    {/* <Header/>
    <Home/>
    <Home></Home>
    <header></header> */}
    {/* <Home/> */}

      {/* <AboutUs/> */}
    
    <ShowHidePassword/>


  </StrictMode>,
)
