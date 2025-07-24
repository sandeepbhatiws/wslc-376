import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { FaTelegram } from "react-icons/fa6";
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <Container className='py-3'>
        <Row className='py-4'>
          <Col lg={4} md={6} sm={8} className='widgets_container'>
            <h3>Contact Us</h3>
            <div className="footer_contact">
              <p>Address: Claritas est etiam processus dynamicus</p>
              <p>Phone: <a href="tel:9781234560">9781234560</a></p>
              <p>Email: furniture@gmail.com</p>
              <ul className='p-0'>
                <li><a href="https://facebook.com" target="_blank"><FaFacebookF /></a></li>
                <li><a href="https://instagram.com" target="_blank"><FaInstagram /></a></li>
                <li><a href="https://twitter.com" target="_blank"><FaTwitter /></a></li>
                <li><a href="https://linkedin.com" target="_blank"><FaLinkedinIn /></a></li>
                <li><a href="https://youtube.com" target="_blank"><TiSocialYoutube /></a></li>
                <li><a href="https://telegram.com" target="_blank"><FaTelegram /></a></li>
              </ul>
            </div>
          </Col>

          <Col lg={2} md={6} sm={4} xs={6} className='widgets_container'>
            <h3>Information</h3>
            <div className='footer_menu'>
              <ul className='p-0'>
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/contact-us">Contact Us</Link></li>
                <li><Link href="/frequently-questions">Frequently Questions</Link></li>
              </ul>
            </div>
          </Col>

          <Col lg={2} md={6} sm={5} xs={6} className='widgets_container'>
            <h3>My Account</h3>
            <div className="footer_menu">
              <ul className='p-0'>
                <li><Link href="/my-dashboard">My Dashboard</Link></li>
                <li><Link href="/">Wishlist</Link></li>
                <li><Link href="/">Cart</Link></li>
                <li><Link href="/">Checkout</Link></li>
              </ul>
            </div>
          </Col>

          <Col lg={4} md={6} sm={7} className='widgets_container'>
            <h3>Top Rated Products</h3>
            <div className="simple_product">

              <div className="simple_product_items">
                <div className="simple_product_thumb">
                  <a href="https://wscubetech.co/Assignments/furniture/product-details/winona-mirror">
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617989633213Winona%20Mirror__.jpg" className='img-fluid' alt="" />
                  </a>
                </div>
                <div className="simple_product_content">
                  <div className="tag_cate">
                    <a>Wooden Mirrors</a>
                  </div>
                  <div className="product_name">
                    <h3><a href="https://wscubetech.co/Assignments/furniture/product-details/winona-mirror">Winona Mirror</a></h3>
                  </div>
                  <div className="product_price">
                    <span className="old_price">Rs. 2,000</span>
                    <span className="current_price">Rs. 1,500</span>
                  </div>
                </div>
              </div>

              <div className="simple_product_items">
                <div className="simple_product_thumb">
                  <a href="https://wscubetech.co/Assignments/furniture/product-details/rex-console-table">
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617828789760Rex%20Console%20Table__.jpg" className='img-fluid' alt="" />
                  </a>
                </div>
                <div className="simple_product_content">
                  <div className="tag_cate">
                    <a>Console Table</a>
                  </div>
                  <div className="product_name">
                    <h3><a href="https://wscubetech.co/Assignments/furniture/product-details/rex-console-table">Rex Console Table</a></h3>
                  </div>
                  <div className="product_price">
                    <span className="old_price">Rs. 3,000</span>
                    <span className="current_price">Rs. 2,200</span>
                  </div>
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>

      <Container className='py-3'>
        <Row>
          <Col lg={12}>
          <div className="footer_middel_menu">
                        <ul>
                            <li><Link href="https://wscubetech.co/Assignments/furniture">Home</Link></li>
                            <li><Link href="https://wscubetech.co/Assignments/furniture/online-store">Online Store</Link></li>
                            <li><Link href="https://wscubetech.co/Assignments/furniture/privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="https://wscubetech.co/Assignments/furniture/term-of-use">Terms Of Use</Link></li>
                        </ul>
                    </div>
          </Col>
        </Row>
      </Container>


      <Container className='py-3 footer_bottom'>
        <Row>
          <Col lg={12}>
          <div className="copyright_area">
                        <p>All Rights Reserved By Furniture | © 2025 </p>
                        <img src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/papyel2.png" width={100} alt="" />
                    </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
