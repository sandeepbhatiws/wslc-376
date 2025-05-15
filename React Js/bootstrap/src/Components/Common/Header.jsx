import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { cartContext } from '../../Context API/Context';

export default function Header() {

  let { cartItems } = useContext(cartContext);

  return (
    <>
      {/* <!-- Header --> */}
    <header class="sticky-top bg-white border-bottom shadow-sm">
      <div class="container py-3">
        <div class="row align-items-center">
          {/* <!-- Logo --> */}
          <div class="col-md-3 col-6 mb-2 mb-md-0">
            <Link to="/" class="text-decoration-none">
              <h1 class="fs-4 fw-bold m-0">ShopHub</h1>
            </Link>
          </div>

          {/* <!-- Search --> */}
          <div class="col-md-5 col-12 order-md-1 order-3 mt-2 mt-md-0">
            <div class="input-group">
              <span class="input-group-text bg-white border-end-0">
                <i class="fa fa-search text-muted"></i>
              </span>
              <input type="text" class="form-control border-start-0" placeholder="Search products..."/>
            </div>
          </div>

          {/* <!-- Navigation --> */}
          <div class="col-md-4 col-6 text-end order-md-2 order-2">
            <div class="d-flex justify-content-end align-items-center">
              <Link to="/products" class="btn btn-link text-dark d-none d-md-inline-block">Categories</Link>
              <a href="#" class="btn btn-link text-dark d-none d-md-inline-block">Deals</a>
              <a href="#" class="btn btn-link text-dark position-relative">
                <i class="fa fa-user"></i>
              </a>
              <Link to="/view-carts" class="btn btn-link text-dark position-relative">
                <i class="fa fa-shopping-cart"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  { cartItems.length }
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}
