import React from 'react'

export default function CategoryCard() {
    return (
        <>
            <a href="#">
                <div class="relative cursor-pointer">
                    <img
                        class="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
                        src="/images/bedroom.png"
                        alt="bedroom cathegory image"
                    />

                    <p
                        class="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl"
                    >
                        Bedroom
                    </p>
                </div>
            </a>
        </>
    )
}
