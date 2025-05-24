import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import ProductCard from './ProductCard';

export default function ProductListing() {

  let [categories, setCategories] = useState([]);
  let [brands, setBrands] = useState([]);
  let [products, setProducts] = useState([]);
  let [sortBy, setSortBy] = useState('');
  let [filterCategoryValue, setFilterCategoryValue] = useState([]);
  let [priceFrom, setPriceFrom] = useState(0);
  let [priceTo, setPriceTo] = useState(100000);

  const filterCategories = (slug) => {
    if(filterCategoryValue.includes(slug)){
      var finalData = filterCategoryValue.filter((v) => {
        if(v != slug){
          return v
        }
      })
      var finalData = [...finalData];
      setFilterCategoryValue(finalData);
    } else {
      const finalData = [...filterCategoryValue, slug];
      setFilterCategoryValue(finalData);
    }

    console.log(slug);
  }

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

  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/products.php', {
      params : {
        limit : 12,
        sorting : sortBy,
        categories : filterCategoryValue.toString(),
        price_from : priceFrom,
        price_to : priceTo
      }
    })
      .then((results) => {
        setProducts(results.data.data);
      })
      .catch((error) => {
        toast.error('Something went wrong. Please try again !');
      })
  }, [sortBy, filterCategoryValue, priceFrom, priceTo]);

  const filterSorting = (event) => {
    setSortBy(event.target.value);
  }

  const rangePrice = (event) => {
    setPriceTo(event.target.value);
    console.log(priceTo);
  }

  const priceFromFilter = (event) => {
    setPriceFrom(event.target.value);
  }

  const priceToFilter = (event) => {
    setPriceTo(event.target.value);
  }

  const clearAll = () => {
    // console.log('Hello');
    setFilterCategoryValue([]);
  }

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
                  <button onClick={ clearAll } class="btn btn-sm btn-link text-decoration-none p-0">Clear All</button>
                </div>

                {/* <!-- Categories Filter --> */}
                <div class="mb-4 category-scroll">
                  <h6 class="fw-bold mb-3">Categories</h6>
                  {
                    (categories.length > 0)
                    ?
                    categories.map((v, i) => {
                      return (
                        <DisplayCategories filterCategoryValue={filterCategoryValue} filterCategories={filterCategories} key={i} category={v} />
                      )
                    })

                    :
                    ''
                  }
                </div>

                {/* <!-- Brands Filter --> */}
                <div class="mb-4 category-scroll">
                  <h6 class="fw-bold mb-3">Brands</h6>
                  {
                    (brands.length > 0)
                    ?
                    brands.map((v, i) => {
                      return (
                        <DisplayBrands key={i} brand={v} />
                      )
                    })

                    :
                    ''
                  }
                </div>

                {/* <!-- Price Range Filter --> */}
                <div class="mb-3">
                  <h6 class="fw-bold mb-3">Price Range</h6>
                  <div class="d-flex justify-content-between mb-2">
                    <span>$0</span>
                    <span>$100000</span>
                  </div>
                  <input type="range" onChange={ rangePrice } class="form-range" min="0" max="100000" step="1000" id="priceRange" />

                  <div class="row g-2 mt-2">
                    <div class="col-6">
                      <div class="input-group input-group-sm">
                        <span class="input-group-text">$</span>
                        <input type="number" class="form-control" placeholder="Min" min="0"  onChange={ priceFromFilter }/>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="input-group input-group-sm">
                        <span class="input-group-text">$</span>
                        <input type="number" class="form-control" placeholder="Max" min="0" onChange={ priceToFilter }/>
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
                    (categories.length > 0)
                    ?
                    categories.map((v, i) => {
                      return (
                        <DisplayCategories filterCategoryValue={filterCategoryValue} filterCategories={filterCategories} key={i} category={v} />
                      )
                    })

                    :
                    ''
                  }

                </div>

                {/* <!-- Brands Filter --> */}
                <div class="mb-4">
                  <h6 class="fw-bold mb-3">Brands</h6>
                  {
                    (brands.length > 0)
                    ?
                    brands.map((v, i) => {
                      return (
                        <DisplayBrands key={i} brand={v} />
                      )
                    })

                    :
                    ''
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
                    <h6 class="mb-0">{ products.length } Products</h6>
                    <small class="text-muted">Filtered results</small>
                  </div>
                  <div class="col-md-6">
                    <div class="d-flex align-items-center justify-content-md-end">
                      <i class="fa fa-sort text-muted me-2"></i>
                      <span class="text-nowrap me-2 d-none d-sm-inline">Sort by:</span>
                      <select class="form-select form-select-sm w-auto" onChange={ filterSorting }>
                        <option value="">Newest</option>
                        <option value="1">Name : A-Z</option>
                        <option value="2">Name : Z-A</option>
                        <option value="3">Price: Low to High</option>
                        <option value="4">Price: High to Low</option>
                        <option value="5">Discounted Price: Low to High</option>
                        <option value="6">Discounted Price: High to Low</option>
                        <option value="7">Rating: Low to High</option>
                        <option value="8">Rating: High to Low</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Product Grid --> */}
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
              {/* <!-- Product 1 --> */}

              {
                (products.length > 0)
                ?
                products.map((v, i) => {
                  return (
                    <ProductCard key={i} product={v}/>
                  )
                })

                :
                ''
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


function DisplayCategories({ category, filterCategories, filterCategoryValue }) {
  return (
    <div class="form-check mb-2">
      <input class="form-check-input" type="checkbox" id={`${'category_' + category.id}`} checked={ filterCategoryValue.includes(category.slug) ? "checked" : ''  }   onClick={ () => filterCategories(category.slug) }/>
      <label class="form-check-label" for={`${'category_' + category.id}`}>{category.name}</label>
    </div>
  )
}

function DisplayBrands({ brand }) {
  return (
    <div class="form-check mb-2">
      <input class="form-check-input" type="checkbox" id={`${'brand_' + brand.id}`} />
      <label class="form-check-label" for={`${'brand_' + brand.id}`}>{brand.name}</label>
    </div>
  )
}