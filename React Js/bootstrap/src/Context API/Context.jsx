import React, { createContext, useState } from 'react'
import { getDatabase, ref, set, onValue  } from "firebase/database";
import app from '../config/firebase';

const cartContext = createContext();

export default function Context({children}) {

    var uid = localStorage.getItem('uid');

    if(uid){
        const db = getDatabase(app);
        const getUserCarts = ref(db, 'user_carts/' + uid);
        onValue(getUserCarts, (cart) => {
            var cartData = cart.val();
            localStorage.setItem('cartItems', JSON.stringify(cartData));
        });

        var cartData = localStorage.getItem('cartItems');
        var cartData = JSON.parse(cartData);
    }

    

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