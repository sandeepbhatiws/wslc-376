import React from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'

export default function Home() {
  return (
    <>
        <Header/>

        <div className='container-fluid p-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h1>Home Page</h1>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}
