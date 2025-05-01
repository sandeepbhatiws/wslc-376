import React, { useState } from 'react'
import FaqQuestion from './FaqQuestion'
import data from '../data/faqData.js';

export default function Faq() {

    const [faqData, setFaqData] = useState(data);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            <div className="outer_faqs">
                <h1> Frequently Asked Questions </h1>

                {/* {
                    faqData.map((v,i) => {
                        return(
                            <div className="faq" key={i}>
                                <div className="faq_question">
                                    {v.question}
                                    <span>-</span>
                                </div>
                                <div className="faq_answer">
                                    {v.answer}
                                </div>
                            </div>
                        )
                    })
                } */}

                {
                    faqData.map((v,i) => {
                        return(
                            <FaqQuestion key={i} faqs={v} index={i} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                        )
                    })
                }
            </div>

            
        </>
    )
}
