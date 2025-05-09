import React, { useState } from 'react'
import logo from '../assets/images/ws-cube-white-logo.svg';
import { CiFacebook } from "react-icons/ci";
import Accordion from 'react-bootstrap/Accordion';
import data from '../../data/faqData';
import FaqQuestion from './FaqQuestion';
import '../assets/css/style.css'

export default function Home() {

    const [getFaq, setGetFaq] = useState(data);

    return (
        <>
            <header className='container-fluid bg-black text-center text-white p-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <CiFacebook className='' />
                            <img src={logo} />
                            <img src='./vite.svg' />
                            <h1>Welcome to WsCube Tech</h1>
                        </div>
                    </div>
                </div>
            </header>

            <header className='container-fluid p-4 text-center'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h2>Frequently Asked Questions</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <Accordion defaultActiveKey="0">
                                {
                                    getFaq.map((v,i) => {
                                        return(
                                            <FaqQuestion key={i} index={i} data={v}/>
                                        )
                                    })
                                }
                            </Accordion>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
