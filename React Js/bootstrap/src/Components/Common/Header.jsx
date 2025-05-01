import React from 'react'

export default function Header() {
  return (
    <>
      {/* <!-- Header --> */}
    <header class="sticky-top bg-white border-bottom shadow-sm">
      <div class="container py-3">
        <div class="row align-items-center">
          {/* <!-- Logo --> */}
          <div class="col-md-3 col-6 mb-2 mb-md-0">
            <a href="index.html" class="text-decoration-none">
              <h1 class="fs-4 fw-bold m-0">ShopHub</h1>
            </a>
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
              <a href="#" class="btn btn-link text-dark d-none d-md-inline-block">Categories</a>
              <a href="#" class="btn btn-link text-dark d-none d-md-inline-block">Deals</a>
              <a href="#" class="btn btn-link text-dark position-relative">
                <i class="fa fa-user"></i>
              </a>
              <a href="#" class="btn btn-link text-dark position-relative">
                <i class="fa fa-shopping-cart"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  2
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}
