"use client"
import React, { useState } from 'react'
import "./frequently-questions.css"
export default function page() {

    let myFaq = [
        {
            id: 1,
            question: 'Popular Articles',
            answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
        },
        {
            id: 2,
            question: 'Fix problems  request removals',
            answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
        },
        {
            id: 3,
            question: 'Browse the web',
            answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
        },
        {
            id: 4,
            question: 'Search on your phone or tablet',
            answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
        },

    ]

    let [data, setData] = useState(1);

  

    const handleClick = (id) => {
        setData(data === id ? null : id);
    };
    return (
        <div>
            <div className="breadcrumbs_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <h3>Frequently Questions</h3>
                                <ul>
                                    <li><a href="index.html">home</a></li>
                                    <li> {">"} </li>
                                    <li>Frequently Questions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className='w-100  '>
                <div className="main">
                    {myFaq.map((v) => ( 
                        
                        
                        <div className="row" key={v.id}>
                            <h2  className={data == v.id ? "activeH2" : "" }  onClick={() => handleClick(v.id)}>
                                {v.question} {data === v.id ? <span>&#x2212;</span> : <span>&#x2b; </span>}
                            </h2>
                            {data === v.id && <p className="activep">{v.answer}</p>}
                        </div>
                        

                    ))}
                </div>
            </div>
        </div>
    )
}
