import React, { createContext, useState } from 'react'

const cartContext = createContext();

export default function Context({children}) {

    let [cartItems, setCartItems] = useState([]);
    let [wishlistItems, setWishlistItems] = useState([]);

    const data = { cartItems, setCartItems, wishlistItems, setWishlistItems }

    return (

        <>
            <cartContext.Provider value={ data }>
                {children}
            </cartContext.Provider>
        </>
    )
}

export { cartContext }