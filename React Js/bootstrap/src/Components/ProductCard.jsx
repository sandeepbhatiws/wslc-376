import React from 'react'

export default function ProductCard({product}) {

    var discount_price = (product.price * product.discount_percentage)/100;
    var discount_price = product.price - discount_price;

    return (
        <>
            <div class="col">
                <div class="card h-100 product-card">
                    <div class="position-relative">
                        <img src={product.image} class="card-img-top" alt="Ultra HD 4K Smart TV" />
                        <span class="position-absolute top-0 start-0 badge bg-danger m-2">{product.brand_name}</span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
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
                            <button class="btn btn-sm btn-outline-primary">
                                <i class="fa fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
