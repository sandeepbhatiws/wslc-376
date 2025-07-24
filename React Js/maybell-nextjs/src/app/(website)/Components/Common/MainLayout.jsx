import React from 'react'
import Header from './Header'
import Footer from './Footer'


export default function MainLayout({children}) {
  return (
    <>
        <Header/>

        {children}

        <Footer/>
    </>
  )
}
