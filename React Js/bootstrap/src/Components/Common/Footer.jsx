import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer class="bg-light border-top mt-5">
        <div class="container py-5">
          <div class="row g-4">
            {/* <!-- Company Info --> */}
            <div class="col-lg-3 col-md-6">
              <h5 class="fw-bold mb-3">ShopHub</h5>
              <p class="text-muted">Your one-stop destination for quality products at competitive prices.</p>
              <div class="d-flex gap-3">
                <a href="#" class="text-muted"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="text-muted"><i class="fab fa-instagram"></i></a>
                <a href="#" class="text-muted"><i class="fab fa-twitter"></i></a>
              </div>
            </div>

            {/* <!-- Quick Links --> */}
            <div class="col-lg-3 col-md-6">
              <h5 class="fw-bold mb-3">Shop</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="#" class="text-decoration-none text-muted">Electronics</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-muted">Clothing</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-muted">Home Appliances</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-muted">Deals</a></li>
                <li><a href="#" class="text-decoration-none text-muted">New Arrivals</a></li>
              </ul>
            </div>

            {/* <!-- Customer Service --> */}
            <div class="col-lg-3 col-md-6">
              <h5 class="fw-bold mb-3">Customer Service</h5>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <Link to="/contact-us" class="text-decoration-none text-muted">Contact Us</Link>
                </li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-muted">Shipping Policy</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-muted">Returns & Exchanges</a></li>
                <li>
                  <Link to="/faqs" class="text-decoration-none text-muted">FAQs</Link>
                  </li>
              </ul>
            </div>

            {/* <!-- Newsletter --> */}
            <div class="col-lg-3 col-md-6">
              <h5 class="fw-bold mb-3">Stay Updated</h5>
              <p class="text-muted mb-3">Subscribe for the latest products and deals.</p>
              <div class="input-group mb-3">
                <input type="email" class="form-control" placeholder="Your email" />
                <button class="btn btn-primary" type="button">Subscribe</button>
              </div>
            </div>
          </div>

          <div class="border-top mt-4 pt-4 d-flex flex-column flex-md-row justify-content-between">
            <p class="text-muted small">© 2025 ShopHub. All rights reserved.</p>
            <div class="d-flex gap-3">
              <a href="#" class="text-decoration-none text-muted small">Privacy Policy</a>
              <a href="#" class="text-decoration-none text-muted small">Terms of Service</a>
              <a href="#" class="text-decoration-none text-muted small">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
