"use client"
import React, { useState } from 'react'
import CategoryCard from './Common/CategoryCard'

export default function CategorySection() {

    const [catgeories, setCategories] = useState([1,2,3,4,5,6]);

    return (
        <>
            <h2 class="mx-auto mb-5 max-w-[1200px] px-5">SHOP BY CATHEGORY</h2>

            {/* <!-- Cathegories --> */}
            <section
                class="mx-auto grid max-w-[1200px] grid-cols-2 px-5 lg:grid-cols-3 lg:gap-5"
            >
                {/* <!-- 1 --> */}

                {
                    catgeories.map(() => {
                        return(
                            <CategoryCard/>
                        )
                    })
                }
            </section>
            {/* <!-- /Cathegories  --> */}
        </>
    )
}
