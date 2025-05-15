import React, { createContext, useState } from 'react'

const cartContext = createContext();

export default function Context({children}) {

    var cartData = localStorage.getItem('cartItems');
    var cartData = JSON.parse(cartData);

    let [cartItems, setCartItems] = useState(cartData ?? []);
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