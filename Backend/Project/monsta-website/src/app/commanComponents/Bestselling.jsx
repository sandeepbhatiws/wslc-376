"use client"
import Link from 'next/link'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../globals.css"

export default function Bestselling() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Default for large screens
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    return (
        <>
            <section className='product_section p_bottom p_section1 py-5'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="section_title">
                                <h2>Bestselling Products</h2>
                            </div>
                        </Col>


                        <Col lg={12} className='py-3'>
                            <Slider {...settings}>
                                
                            
                                <Card className='single_product'>
                                    <Card.Img variant="top" src="/1617829052195Caroline Study Tables__.jpg" />
                                    <Card.Body className='product_content'>

                                        <Card.Title >Side and End Tables</Card.Title>

                                        <h3><Link href="https://wscubetech.co/Assignments/furniture/product-details/isaac-chest-of-drawer">Isaac Chest of Drawer</Link></h3>


                                        <div className="price_box">
                                            <span className="old_price">Rs. 32,000</span>
                                            <span className="current_price">Rs. 25,000</span>
                                        </div>

                                        <div className="action_links mt-3">
                                            <ul className='d-flex'>
                                                <li>
                                                    <a className="wishlist_tooltip" title="Add to Wishlist">
                                                        <span className="icon">
                                                            <img src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/heart-regular.svg" className="wishlist_img" />
                                                        </span>
                                                    </a>
                                                </li>

                                                <li className="add_to_cart">
                                                    <a title="Add to Cart" id="">
                                                        <div className="cartShow">add to cart</div>
                                                        <div className="cartHide d-none">Loading...</div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Card.Body>
                                </Card>
                               
                                <Card className='single_product'>
                                    <Card.Img variant="top" src="/1617829052195Caroline Study Tables__.jpg" />
                                    <Card.Body className='product_content'>

                                        <Card.Title >Side and End Tables</Card.Title>

                                        <h3><Link href="https://wscubetech.co/Assignments/furniture/product-details/isaac-chest-of-drawer">Isaac Chest of Drawer</Link></h3>


                                        <div className="price_box">
                                            <span className="old_price">Rs. 32,000</span>
                                            <span className="current_price">Rs. 25,000</span>
                                        </div>

                                        <div className="action_links mt-3">
                                            <ul className='d-flex'>
                                                <li>
                                                    <a className="wishlist_tooltip" title="Add to Wishlist">
                                                        <span className="icon">
                                                            <img src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/heart-regular.svg" className="wishlist_img" />
                                                        </span>
                                                    </a>
                                                </li>

                                                <li className="add_to_cart">
                                                    <a title="Add to Cart" id="">
                                                        <div className="cartShow">add to cart</div>
                                                        <div className="cartHide d-none">Loading...</div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Card.Body>
                                </Card>
                              
                                <Card className='single_product'>
                                    <Card.Img variant="top" src="/1617829052195Caroline Study Tables__.jpg" />
                                    <Card.Body className='product_content'>

                                        <Card.Title >Side and End Tables</Card.Title>

                                        <h3><Link href="https://wscubetech.co/Assignments/furniture/product-details/isaac-chest-of-drawer">Isaac Chest of Drawer</Link></h3>


                                        <div className="price_box">
                                            <span className="old_price">Rs. 32,000</span>
                                            <span className="current_price">Rs. 25,000</span>
                                        </div>

                                        <div className="action_links mt-3">
                                            <ul className='d-flex'>
                                                <li>
                                                    <a className="wishlist_tooltip" title="Add to Wishlist">
                                                        <span className="icon">
                                                            <img src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/heart-regular.svg" className="wishlist_img" />
                                                        </span>
                                                    </a>
                                                </li>

                                                <li className="add_to_cart">
                                                    <a title="Add to Cart" id="">
                                                        <div className="cartShow">add to cart</div>
                                                        <div className="cartHide d-none">Loading...</div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Card.Body>
                                </Card>
                               
                                <Card className='single_product'>
                                    <Card.Img variant="top" src="/1617829052195Caroline Study Tables__.jpg" />
                                    <Card.Body className='product_content'>

                                        <Card.Title >Side and End Tables</Card.Title>

                                        <h3><Link href="https://wscubetech.co/Assignments/furniture/product-details/isaac-chest-of-drawer">Isaac Chest of Drawer</Link></h3>


                                        <div className="price_box">
                                            <span className="old_price">Rs. 32,000</span>
                                            <span className="current_price">Rs. 25,000</span>
                                        </div>

                                        <div className="action_links mt-3">
                                            <ul className='d-flex'>
                                                <li>
                                                    <a className="wishlist_tooltip" title="Add to Wishlist">
                                                        <span className="icon">
                                                            <img src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/heart-regular.svg" className="wishlist_img" />
                                                        </span>
                                                    </a>
                                                </li>

                                                <li className="add_to_cart">
                                                    <a title="Add to Cart" id="">
                                                        <div className="cartShow">add to cart</div>
                                                        <div className="cartHide d-none">Loading...</div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Card.Body>
                                </Card>
                               
                                <Card className='single_product'>
                                    <Card.Img variant="top" src="/1617829052195Caroline Study Tables__.jpg" />
                                    <Card.Body className='product_content'>

                                        <Card.Title >Side and End Tables</Card.Title>

                                        <h3><Link href="https://wscubetech.co/Assignments/furniture/product-details/isaac-chest-of-drawer">Isaac Chest of Drawer</Link></h3>


                                        <div className="price_box">
                                            <span className="old_price">Rs. 32,000</span>
                                            <span className="current_price">Rs. 25,000</span>
                                        </div>

                                        <div className="action_links mt-3">
                                            <ul className='d-flex'>
                                                <li>
                                                    <a className="wishlist_tooltip" title="Add to Wishlist">
                                                        <span className="icon">
                                                            <img src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/heart-regular.svg" className="wishlist_img" />
                                                        </span>
                                                    </a>
                                                </li>

                                                <li className="add_to_cart">
                                                    <a title="Add to Cart" id="">
                                                        <div className="cartShow">add to cart</div>
                                                        <div className="cartHide d-none">Loading...</div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Card.Body>
                                </Card>
                             
                                <Card className='single_product'>
                                    <Card.Img variant="top" src="/1617829052195Caroline Study Tables__.jpg" />
                                    <Card.Body className='product_content'>

                                        <Card.Title >Side and End Tables</Card.Title>

                                        <h3><Link href="https://wscubetech.co/Assignments/furniture/product-details/isaac-chest-of-drawer">Isaac Chest of Drawer</Link></h3>


                                        <div className="price_box">
                                            <span className="old_price">Rs. 32,000</span>
                                            <span className="current_price">Rs. 25,000</span>
                                        </div>

                                        <div className="action_links mt-3">
                                            <ul className='d-flex'>
                                                <li>
                                                    <a className="wishlist_tooltip" title="Add to Wishlist">
                                                        <span className="icon">
                                                            <img src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/heart-regular.svg" className="wishlist_img" />
                                                        </span>
                                                    </a>
                                                </li>

                                                <li className="add_to_cart">
                                                    <a title="Add to Cart" id="">
                                                        <div className="cartShow">add to cart</div>
                                                        <div className="cartHide d-none">Loading...</div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Card.Body>
                                </Card>
                             

                            </Slider>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}
