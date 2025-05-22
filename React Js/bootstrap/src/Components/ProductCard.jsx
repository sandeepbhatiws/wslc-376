import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../Context API/Context';
import { toast } from 'react-toastify';
import { getDatabase, ref, set } from "firebase/database";
import app from '../config/firebase';

export default function ProductCard({product}) {

    let { cartItems, setCartItems} = useContext(cartContext);

    var discount_price = (product.price * product.discount_percentage)/100;
    var discount_price = product.price - discount_price;

    const addToCart = (productInfo) => {
        var userId = localStorage.getItem('uid');

        if(!userId){
            toast.error('Login First !');
            return false;
        }

        var discount_price = (productInfo.price * productInfo.discount_percentage)/100;
        var discount_price = productInfo.price - discount_price;

        const checkProduct = cartItems.filter((v) => {
            if(productInfo.id == v.id){
                return v;
            }
        })

        if(checkProduct.length > 0){
            var finalData = cartItems.map((v) => {
                if(productInfo.id == v.id){
                    if(v.quantity < 10){
                        v.quantity++;
                        toast.success('Update cart succussfully !')
                        return v;
                    } else {
                        toast.error('maximum quantity reached !')
                        return v;
                    }  
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
            const info = {
                id : productInfo.id,
                name : productInfo.name,
                image : productInfo.image,
                price : productInfo.price,
                discount_price : discount_price,
                quantity : 1
            }

            const finalData = [info, ...cartItems];
            setCartItems(finalData);
            toast.success('Add to cart succussfully !')
            localStorage.setItem('cartItems',JSON.stringify(finalData));

            if(userId){
                const db = getDatabase(app);
                set(ref(db, 'user_carts/' + userId), finalData);
            }
        }
    }


    return (
        <>
            <div class="col">
                <div class="card h-100 product-card">
                    <div class="position-relative">
                        <img src={product.image} class="card-img-top" alt="Ultra HD 4K Smart TV" />
                        <span class="position-absolute top-0 start-0 badge bg-danger m-2">{product.brand_name}</span>
                    </div>
                    <div class="card-body">
                        <Link className='text-decoration-none text-black' to={ `${'product/product-details/'+product.id  }` }>
                            <h5 class="card-title">{product.name}</h5>
                        </Link>
                        
                        <p class="card-text text-muted small mb-0">{product.category_name}</p>
                        <div class="d-flex align-items-center mb-2">
                            <div class="text-warning me-1">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-alt"></i>
                            </div>
                            <span class="text-muted small">4.5</span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <span class="fs-5 fw-bold">Rs. {discount_price}</span>
                                <span class="text-decoration-line-through text-muted ms-2">Rs. {product.price}</span>
                            </div>
                            <button class="btn btn-sm btn-outline-primary" onClick={ () => addToCart(product) }>
                                <i class="fa fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
