import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumb({ path, path2, slash, link }) {
  return (
    <nav className="flex border-b-2" aria-label="Breadcrumb">
      <ol className="p-3 px-6 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center ">
          <Link to={"/home"} className="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            /
            <Link to={link} className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2">{path}</Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            {slash}
            <span className="ms-1 text-md font-medium text-gray-500 md:ms-2">{path2}</span>
          </div>
        </li>
      </ol>
    </nav>

  )
}
