import React from 'react'
import Header from './Header'

export default function Home() {

    var name = 'Hello World';

    var status = true;

  return (
    <>
        <Header/>
        <div>
        Hello World
        </div>

        {
            status
                ?
                <div>Name :- { name } </div>
                :
                <div>No name Found </div>
        }

        {
            status == 1
                ?
                <div>Name :- { name } </div>
                :
                <div>No name Found </div>
        }


        
        <img src=''  />

        <div>

        </div>
    </>
    
    
  )
}
