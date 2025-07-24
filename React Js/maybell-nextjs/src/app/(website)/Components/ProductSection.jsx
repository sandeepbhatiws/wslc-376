import React from 'react'
import ProductCard from './Common/ProductCard'

export default function ProductSection({ title, productData }) {
    return (
        <>
            <p class="mx-auto mt-10 mb-5 max-w-[1200px] px-5">{title}</p>

            {/* <!-- Recommendations --> */}
            <section
                class="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-4"
            >   
                {
                    productData.map((v,i) => {
                        return(
                            <ProductCard key={i}/>
                        )
                    })
                }   
            </section>
            {/* <!-- /Recommendations --> */}
        </>
    )
}
