import React from 'react'

export default function Footer({ heading, content, children }) {
  return (
    <div>
    <h2>{heading}</h2>
    <p>{children}</p>
    </div>
  )
}
