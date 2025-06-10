"use client"
import React, { useState } from 'react'
import BestCollection from './Home Page/BestCollection'
import DeliveryOptions from './Home Page/DeliveryOptions'
import CategorySection from './CategorySection'
import ProductSection from './ProductSection'

export default function Home() {

  const [topNewArrivals, setTopNewArrivals] = useState([1,2,3,4]);
  const [recommendations, setRecommendations] = useState([1,2,3,4,5,6,7,8]);

  return (
    <>
      <BestCollection/>
      <DeliveryOptions/>
      <CategorySection/>
      <ProductSection title="TOP NEW ARRIVAL" productData = {topNewArrivals} />
      <ProductSection title="RECOMMENDED FOR YOU" productData = {recommendations}/>
    </>
  )
}
