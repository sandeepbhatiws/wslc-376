import React, { useState } from 'react'

export default function AboutUs() {

    var count = 10;

    let [counter, setCounter] = useState(5);

    const plus = () => {
        counter++;
        setCounter(counter);
        console.log(counter);
    }

    const minus = () => {
        counter--;
        setCounter(counter);
        console.log(counter);
    }

  return (
    <>
        <div className="row" style={{ backgroundColor : 'black', color : 'white' }}>
        About Us
        </div>

        <div className='buttons'>
            <button onClick={ plus }>+</button>
            <button>{ counter }</button>
            <button onClick={ minus } >-</button>
        </div>
        
    </>

    
  )
}
