import React from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import { reduxstore } from '../Redux Toolkit/reduxstore'

export default function RootLayout() {
  return (
    <>
      <Provider store={ reduxstore }>
        <Header />
 
        <Outlet />

        <Footer />
      </Provider>
    </>
  )
}
