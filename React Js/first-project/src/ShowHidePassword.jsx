import React, { useState } from 'react'

export default function ShowHidePassword() {

    let [ inputType, setInputType] = useState('password');
    
    const hidePassword = () => {
        if(inputType == 'password'){
            setInputType('text')
        } else {
            setInputType('password');
        }
    }

  return (
    <div>
        <input type={ inputType == 'password' ? 'password' : 'text' }/>
        <button onClick={ hidePassword }>
            { inputType == 'password' ? 'Show' : 'Hide' }
        </button>
    </div>
  )
}
