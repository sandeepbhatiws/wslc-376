"use client";
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

  const params = useParams();

  console.log(params);

  return (
    <>
      Men
    </>
  )
}
