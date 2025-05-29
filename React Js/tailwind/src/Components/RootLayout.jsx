import React from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import { reduxstore } from '../Redux Toolkit/reduxstore'
import { ToastContainer } from 'react-toastify'

export default function RootLayout() {
  return (
    <>
      <Provider store={ reduxstore }>

        <ToastContainer/>
        <Header />
 
        <Outlet />

        <Footer />
      </Provider>
    </>
  )
}
