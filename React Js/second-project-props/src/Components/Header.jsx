import React from 'react'

export default function Header(props) {

    console.log(props);

  return (
    <div>
      <h2>{props.heading}</h2>
      <p className=''>{props.children}</p>
    </div>
  )
}
