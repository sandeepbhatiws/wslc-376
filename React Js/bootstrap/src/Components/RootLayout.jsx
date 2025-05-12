import React from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export default function RootLayout() {

  return (
    <>
        <Header/>
            <ToastContainer/>
            <Outlet/>
        <Footer/>
    </>
  )
}
