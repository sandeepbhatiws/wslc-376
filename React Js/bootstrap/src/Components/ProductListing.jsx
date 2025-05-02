import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function ProductListing() {

  let [categories, setCategories] = useState([]);
  let [brands, setBrands] = useState([]);

  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/categories.php')
      .then((results) => {
        setCategories(results.data.data);
      })
      .catch((error) => {
        toast.error('Something went wrong. Please try again !');
      })
  }, []);

  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/brands.php')
      .then((results) => {
        setBrands(results.data.data);
      })
      .catch((error) => {
        toast.error('Something went wrong. Please try again !');
      })
  }, []);


  return (
    <>
      {/* <!-- Main Content --> */}
      <div class="container py-5">
        <div class="row">
          {/* <!-- Filter Button (Mobile) --> */}
          <div class="col-12 d-lg-none mb-3">
            <button class="btn btn-outline-secondary w-100 d-flex justify-content-center align-items-center gap-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#filterSidebar">
              <i class="fa fa-filter"></i> Filter Products
            </button>
          </div>

          {/* <!-- Sidebar Filters --> */}
          <div class="col-lg-3">
            {/* <!-- Desktop Filters --> */}
            <div class="card shadow-sm d-none d-lg-block">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h5 class="card-title mb-0">Filters</h5>
                  <button class="btn btn-sm btn-link text-decoration-none p-0">Clear All</button>
                </div>

                {/* <!-- Categories Filter --> */}
                <div class="mb-4">
                  <h6 class="fw-bold mb-3">Categories</h6>

                  {
                    categories.map((v, i) => {
                      return (
                        <DisplayCategories key={i} category={v} />
                      )
                    })
                  }
                </div>

                {/* <!-- Brands Filter --> */}
                <div class="mb-4">
                  <h6 class="fw-bold mb-3">Brands</h6>
                  {
                    brands.map((v, i) => {
                      return (
                        <DisplayBrands key={i} brand={v} />
                      )
                    })
                  }
                </div>

                {/* <!-- Price Range Filter --> */}
                <div class="mb-3">
                  <h6 class="fw-bold mb-3">Price Range</h6>
                  <div class="d-flex justify-content-between mb-2">
                    <span>$0</span>
                    <span>$1500</span>
                  </div>
                  <input type="range" class="form-range" min="0" max="1500" step="10" id="priceRange" />
                  <div class="row g-2 mt-2">
                    <div class="col-6">
                      <div class="input-group input-group-sm">
                        <span class="input-group-text">$</span>
                        <input type="number" class="form-control" placeholder="Min" min="0" />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="input-group input-group-sm">
                        <span class="input-group-text">$</span>
                        <input type="number" class="form-control" placeholder="Max" min="0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Mobile Filters (Offcanvas) --> */}
            <div class="offcanvas offcanvas-start" tabindex="-1" id="filterSidebar">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title">Filters</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                {/* <!-- Categories Filter --> */}
                <div class="mb-4">
                  <h6 class="fw-bold mb-3">Categories</h6>
                  {
                    categories.map((v, i) => {
                      return (
                        <DisplayCategories key={i} category={v}/>
                      )
                    })
                  }

                </div>

                {/* <!-- Brands Filter --> */}
                <div class="mb-4">
                  <h6 class="fw-bold mb-3">Brands</h6>
                  {
                    brands.map((v, i) => {
                      return (
                        <DisplayBrands key={i} brand={v} />
                      )
                    })
                  }
                </div>

                {/* <!-- Price Range Filter --> */}
                <div class="mb-4">
                  <h6 class="fw-bold mb-3">Price Range</h6>
                  <div class="d-flex justify-content-between mb-2">
                    <span>$0</span>
                    <span>$1500</span>
                  </div>
                  <input type="range" class="form-range" min="0" max="1500" step="10" id="mobilePriceRange" />
                  <div class="row g-2 mt-2">
                    <div class="col-6">
                      <div class="input-group input-group-sm">
                        <span class="input-group-text">$</span>
                        <input type="number" class="form-control" placeholder="Min" min="0" />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="input-group input-group-sm">
                        <span class="input-group-text">$</span>
                        <input type="number" class="form-control" placeholder="Max" min="0" />
                      </div>
                    </div>
                  </div>
                </div>

                <button class="btn btn-primary w-100">Apply Filters</button>
              </div>
            </div>
          </div>

          {/* <!-- Main Product Content --> */}
          <div class="col-lg-9">
            {/* <!-- Top bar with results count and sorting --> */}
            <div class="card shadow-sm mb-4">
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col-md-6 mb-2 mb-md-0">
                    <h6 class="mb-0">12 Products</h6>
                    <small class="text-muted">Filtered results</small>
                  </div>
                  <div class="col-md-6">
                    <div class="d-flex align-items-center justify-content-md-end">
                      <i class="fa fa-sort text-muted me-2"></i>
                      <span class="text-nowrap me-2 d-none d-sm-inline">Sort by:</span>
                      <select class="form-select form-select-sm w-auto">
                        <option value="featured">Featured</option>
                        <option value="newest">Newest</option>
                        <option value="price_low">Price: Low to High</option>
                        <option value="price_high">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Product Grid --> */}
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
              {/* <!-- Product 1 --> */}
              <div class="col">
                <div class="card h-100 product-card">
                  <div class="position-relative">
                    <img src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=500&auto=format&fit=crop" class="card-img-top" alt="Ultra HD 4K Smart TV" />
                    <span class="position-absolute top-0 start-0 badge bg-danger m-2">Sale</span>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Ultra HD 4K Smart TV 55-inch</h5>
                    <p class="card-text text-muted small mb-0">Samsung</p>
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
                        <span class="fs-5 fw-bold">$699.99</span>
                        <span class="text-decoration-line-through text-muted ms-2">$899.99</span>
                      </div>
                      <button class="btn btn-sm btn-outline-primary">
                        <i class="fa fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Product 2 --> */}
              <div class="col">
                <div class="card h-100 product-card">
                  <div class="position-relative">
                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop" class="card-img-top" alt="Wireless Headphones" />
                    <span class="position-absolute top-0 start-0 badge bg-primary m-2">New</span>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Wireless Noise Cancelling Headphones</h5>
                    <p class="card-text text-muted small mb-0">Sony</p>
                    <div class="d-flex align-items-center mb-2">
                      <div class="text-warning me-1">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <span class="text-muted small">4.8</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="fs-5 fw-bold">$249.99</span>
                      <button class="btn btn-sm btn-outline-primary">
                        <i class="fa fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


function DisplayCategories({category}) {
  return (
    <div class="form-check mb-2">
      <input class="form-check-input" type="checkbox" id={`${ 'category_'+category.id }`} />
      <label class="form-check-label" for={`${ 'category_'+category.id }`}>{ category.name }</label>
    </div>
  )
}

function DisplayBrands({brand}) {
  return (
    <div class="form-check mb-2">
      <input class="form-check-input" type="checkbox" id={`${ 'brand_'+brand.id }`} />
      <label class="form-check-label" for={`${ 'brand_'+brand.id }`}>{ brand.name }</label>
    </div>
  )
}