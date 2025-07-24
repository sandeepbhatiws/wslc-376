import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

export default function notfound() {
  return (
    <div>
      <div className="error_section">
        <div className="container">   
            <div className="row">
                <div className="col-12">
                    <div className="error_form">
                        <h1>404</h1>
                        <h2>Opps! PAGE NOT BE FOUND</h2>
                        <p>Sorry but the page you are looking for does not exist, have been<br/> removed, name changed or is temporarily unavailable.</p>
                        <form action="#">
                            <input placeholder="Search..." type="text"/>
                            <button type="submit"><FaMagnifyingGlass /></button>
                        </form>
                        <a href="index.html">Back to home page</a>
                    </div>
                </div>
            </div>
        </div>    
    </div>
    </div>
  )
}
