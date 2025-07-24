import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Home() {

    const [headerHeading, setHeaderHeading] = useState('This is Header Heading');
    const [headerContent, setHeaderContent] = useState('This is Header Content');

    const [footerHeading, setFooterHeading] = useState('This is Footer Heading');
    const [footerContent, setFooterContent] = useState('This is Footer Content');


    return (
        <>
            {/* Send value throught props */}
            <Header heading={headerHeading} content={headerContent}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime numquam ad sed facere in sapiente magnam ipsam sit eum doloribus, excepturi necessitatibus rem provident recusandae perspiciatis? Ipsum molestias aperiam ipsa?
            </Header>

            <div>
                <h1>Home Page</h1>
            </div>


            <Footer heading={footerHeading} content={footerContent}>
                <div>

                </div>
                <div></div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime numquam ad sed facere in sapiente magnam ipsam sit eum doloribus, excepturi necessitatibus rem provident recusandae perspiciatis? Ipsum molestias aperiam ipsa?
            </Footer>
        </>



    )
}
