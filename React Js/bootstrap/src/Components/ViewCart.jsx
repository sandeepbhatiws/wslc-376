import React, { useContext } from 'react'
import { cartContext } from '../Context API/Context'

export default function ViewCart() {

    const { cartItems, setCartItems } = useContext(cartContext);

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
                                                                    {v.quantity * v.discount_price}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                                        <div class="d-flex justify-content-between">
                                                            <div>
                                                                <select class="form-select">
                                                                    <option value="1" 
                                                                    selected={v.quantity == 1 ? 'selected' : ''}>1</option>
                                                                    <option value="2" selected={v.quantity == 2 ? 'selected' : ''}>2</option>
                                                                    <option value="3"
                                                                    selected={v.quantity == 3 ? 'selected' : ''}>3</option>
                                                                    <option value="4" selected={v.quantity == 4 ? 'selected' : ''}>4</option>
                                                                    <option value="5" selected={v.quantity == 5 ? 'selected' : ''}>5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                    <option value="9">9</option>
                                                                    <option value="10">10</option>
                                                                </select>
                                                            </div>
                                                            <div>
                                                                <button
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
                                    <div><strong>Rs. 5000</strong></div>
                                </div>
                                <hr />
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>Delivery Charge</div>
                                    <div><strong>Rs. 100</strong></div>
                                </div>
                                <hr />
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>Total</div>
                                    <div><strong>Rs.5100</strong></div>
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
