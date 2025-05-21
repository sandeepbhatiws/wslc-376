import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../Context API/Context'
import { toast } from 'react-toastify';
import app from '../config/firebase';
import { getDatabase, ref, set } from "firebase/database";

export default function ViewCart() {

    const { cartItems, setCartItems } = useContext(cartContext);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        var sum = 0;

        cartItems.forEach((v) => {
            sum += v.discount_price * v.quantity;
        })

        setCartTotal(sum)

    },[cartItems]);


    const updateCart = (id, qty, type) => {
        var userId = localStorage.getItem('uid');

        if(type == 'plus'){
            if(qty < 15){
                var finalData = cartItems.map((v) => {
                    if(id == v.id){
                        v.quantity++;
                        toast.success('Update cart succussfully !')
                        return v;
                    } else {
                        return v;
                    }
                })
                var finalData = [...finalData];
                setCartItems(finalData);
                localStorage.setItem('cartItems',JSON.stringify(finalData));

                if(userId){
                    const db = getDatabase(app);
                    set(ref(db, 'user_carts/' + userId), finalData);
                }

            } else {
                toast.error('maximum quantity reached !')
            }
        } else {
            if(qty > 1){
                var finalData = cartItems.map((v) => {
                    if(id == v.id){
                        v.quantity--;
                        toast.success('Update cart succussfully !')
                        return v;
                    } else {
                        return v;
                    }
                })
                var finalData = [...finalData];
                setCartItems(finalData);
                localStorage.setItem('cartItems',JSON.stringify(finalData));

                if(userId){
                    const db = getDatabase(app);
                    set(ref(db, 'user_carts/' + userId), finalData);
                }
            }
        }
    }

    const deleteProduct = (product_id) => {
        var userId = localStorage.getItem('uid');

        if(confirm('Are you sure you want to delete ?')){
            const finalData = cartItems.filter((v) => {
                if(product_id != v.id){
                    return v;
                }
            })
            setCartItems([...finalData]);
            localStorage.setItem('cartItems', JSON.stringify(finalData))

            if(userId){
                const db = getDatabase(app);
                set(ref(db, 'user_carts/' + userId), finalData);
            }
        }
        
    }


    return (
        <>
            <div className='container-fluid'>
                <div class="container py-3">
                    <h3>Shopping Cart</h3>
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                            {/* <!-- single cart item  --> */}
                            <hr />
                            {
                                cartItems.map((v, i) => {
                                    return (
                                        <>
                                            <div class="cart-item py-2">
                                                <div class="row">
                                                    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                                        <div class="d-flex mb-3">
                                                            <img
                                                                class="cart-image d-block"
                                                                src={v.image}
                                                                alt=""
                                                            />
                                                            <div class="mx-3">
                                                                <h5>{v.name}</h5>
                                                                <p className='text-decoration-line-through'>Rs. {v.price}</p>
                                                                <h5>Rs. {v.discount_price}</h5>
                                                                
                                                            </div>

                                                            <div>
                                                                <div>
                                                                    {(v.quantity * v.discount_price).toFixed(2)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                                        <div class="d-flex justify-content-between">
                                                            <div>
                                                                <button 
                                                                onClick={() => updateCart(v.id,v.quantity, 'plus') } >+</button>
                                                                <button>{v.quantity}</button>
                                                                <button onClick={() => updateCart(v.id,v.quantity, 'minus') }>-</button>
                                                            </div>
                                                            <div>
                                                                <button onClick={ () => deleteProduct(v.id) }
                                                                    type="button"
                                                                    class="btn-close"
                                                                    aria-label="Close"
                                                                ></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                        </>
                                    )
                                })
                            }

                            {/* <!-- ./ single cart item end  --> */}
                        </div>
                        <div class="col-12 col-sm-12 col-md-8 col-lg-4">
                            <div class="bg-light rounded-3 p-4 sticky-top">
                                <h6 class="mb-4">Order Summary</h6>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>Subtotal</div>
                                    <div><strong>Rs. {cartTotal.toFixed(2) }</strong></div>
                                </div>
                                <hr />
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>Delivery Charge</div>
                                    <div><strong>Rs. 100</strong></div>
                                </div>
                                <hr />
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>Total</div>
                                    <div><strong>Rs.{ (cartTotal + 100).toFixed(2) }</strong></div>
                                </div>
                                <button class="btn btn-primary w-100 mt-4">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
