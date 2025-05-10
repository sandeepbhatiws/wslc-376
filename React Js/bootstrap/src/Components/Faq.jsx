import React, { useState } from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import data from '../../data/faqData';
import FaqQuestion from './FaqQuestion';
import Accordion from 'react-bootstrap/Accordion';


export default function Faq() {
    const [getFaq, setGetFaq] = useState(data);

    return (
        <>
            <div className='container-fluid p-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h1>Frequently Asked Questions</h1>
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
            </div>
        </>
    )
}
