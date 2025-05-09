import React from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'

export default function Contact() {
    return (
        <>
            <Header />

            <div className='container-fluid p-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
