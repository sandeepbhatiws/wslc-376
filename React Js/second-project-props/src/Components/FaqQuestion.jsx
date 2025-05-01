import React, { useState } from 'react'

export default function FaqQuestion({ faqs, index, currentIndex, setCurrentIndex }) {

    const faqValue =(i) => {
        setCurrentIndex(i);
    }

    return (
        <>
            <div className="faq">
                <div className="faq_question" onClick={ () => faqValue(index) }>
                    {faqs.question}
                    <span>
                        {
                            (currentIndex == index) ? '-' : '+'
                        }
                    </span>
                </div>
                <div className={`${ (currentIndex == index) ? 'faq_answer' : 'faq_answer faq_display' }`}>
                {faqs.answer}
                </div>
            </div>
        </>
    )
}
