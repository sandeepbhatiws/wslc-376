'use client'
import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/Banner.css"
import Link from 'next/link';
import { BiWorld } from "react-icons/bi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import Bestselling from '../commanComponents/Bestselling';
import Testimonial from '../commanComponents/Testimonial';
import "../globals.css";

export default function Index() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const [activeTab, setActiveTab] = useState("featured");
    return (
        <>

            <Container fluid className='p-0 banner'>

                <Slider {...settings}>

                    <img src="/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="banner" className='img-fluid' />
                    <img src="/541928cd-e696-4c09-9f1c-bc9d7127c451-1671388153.jpg" alt="banner" className='img-fluid' />
                    <img src="/add8f1ce-ae5a-4d6b-b573-8c208b6745d5-1671388062.jpg" alt="banner" className='img-fluid' />

                </Slider>


            </Container>

            <section className='border-bottom'>
                <Container>
                    <Row className='my-4'>
                        <Col lg={4} md={6} className='p-2'>
                            <div className='category-1 '>
                                <img src='/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp' />
                                <div className="banner_content">
                                    <p>Design Creative</p>
                                    <h2>Chair Collection</h2>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className='p-2'>
                            <div className='category-2'>
                                <img src='0d588bec-d9a0-4645-8e7a-b49ef67b34be-1670180400.webp' />
                                <div className="banner_content">
                                    <p>Bestselling Products</p>
                                    <h2>Chair Collection</h2>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className='p-2'>
                            <div className='category-1 '>
                                <img src='/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp' />
                                <div className="banner_content">
                                    <p>Onsale Products</p>
                                    <h2>Chair Collection</h2>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>


            <section className='p_section1 pt-5'>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className='product_area'>

                                <div className="product_tab_button">
                                    <ul className="nav" role="tablist">
                                        <li>
                                            <a 
                                                className={activeTab === "featured" ? "active" : ""}
                                                onClick={() => setActiveTab("featured")}
                                            >
                                                Featured
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className={activeTab === "arrivals" ? "active" : ""}
                                                onClick={() => setActiveTab("arrivals")}
                                            >
                                                New Arrivals
                                            </a>
                                        </li>
                                        <li>
                                            <a className={activeTab === "onsale" ? "active" : ""}
                                                onClick={() => setActiveTab("onsale")}
                                            >
                                                Onsale
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-content">
                                    <div className={`tab-pane fade ${activeTab === "featured" ? "active show" : ""}`} id="featured" role="tabpanel">
                                        <div className="product_container">
                                            <Row>
                                                <Col md={3} className="full-width">
                                                    <Card className="single_product full-width">
                                                        <Card.Img variant="top" src="/1617829052195Caroline Study Tables__.jpg" />
                                                        <Card.Body className="product_content">
                                                            <Card.Title>Side and End Tables</Card.Title>
                                                            <h3>
                                                                <Link href="https://wscubetech.co/Assignments/furniture/product-details/isaac-chest-of-drawer">
                                                                    Isaac Chest of Drawer
                                                                </Link>
                                                            </h3>
                                                            <div className="price_box">
                                                                <span className="old_price">Rs. 32,000</span>
                                                                <span className="current_price">Rs. 25,000</span>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col md={3} className="full-width">
                                                    <Card className="single_product full-width">
                                                        <Card.Img variant="top" src="/1617829052195Caroline Study Tables__.jpg" />
                                                        <Card.Body className="product_content">
                                                            <Card.Title>Side and End Tables</Card.Title>
                                                            <h3>
                                                                <Link href="https://wscubetech.co/Assignments/furniture/product-details/isaac-chest-of-drawer">
                                                                    Isaac Chest of Drawer
                                                                </Link>
                                                            </h3>
                                                            <div className="price_box">
                                                                <span className="old_price">Rs. 32,000</span>
                                                                <span className="current_price">Rs. 25,000</span>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col md={3} className="full-width">
                                                    <Card className="single_product full-width">
                                                        <Card.Img variant="top" src="/1617829052195Caroline Study Tables__.jpg" />
                                                        <Card.Body className="product_content">
                                                            <Card.Title>Side and End Tables</Card.Title>
                                                            <h3>
                                                                <Link href="https://wscubetech.co/Assignments/furniture/product-details/isaac-chest-of-drawer">
                                                                    Isaac Chest of Drawer
                                                                </Link>
                                                            </h3>
                                                            <div className="price_box">
                                                                <span className="old_price">Rs. 32,000</span>
                                                                <span className="current_price">Rs. 25,000</span>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col md={3} className="full-width">
                                                    <Card className="single_product full-width">
                                                        <Card.Img variant="top" src="/1617829052195Caroline Study Tables__.jpg" />
                                                        <Card.Body className="product_content">
                                                            <Card.Title>Side and End Tables</Card.Title>
                                                            <h3>
                                                                <Link href="https://wscubetech.co/Assignments/furniture/product-details/isaac-chest-of-drawer">
                                                                    Isaac Chest of Drawer
                                                                </Link>
                                                            </h3>
                                                            <div className="price_box">
                                                                <span className="old_price">Rs. 32,000</span>
                                                                <span className="current_price">Rs. 25,000</span>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col md={3} className="full-width">
                                                    <Card className="single_product full-width">
                                                        <Card.Img variant="top" src="/1617829052195Caroline Study Tables__.jpg" />
                                                        <Card.Body className="product_content">
                                                            <Card.Title>Side and End Tables</Card.Title>
                                                            <h3>
                                                                <Link href="https://wscubetech.co/Assignments/furniture/product-details/isaac-chest-of-drawer">
                                                                    Isaac Chest of Drawer
                                                                </Link>
                                                            </h3>
                                                            <div className="price_box">
                                                                <span className="old_price">Rs. 32,000</span>
                                                                <span className="current_price">Rs. 25,000</span>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col md={3} className="full-width">
                                                    <Card className="single_product full-width">
                                                        <Card.Img variant="top" src="/1617829052195Caroline Study Tables__.jpg" />
                                                        <Card.Body className="product_content">
                                                            <Card.Title>Side and End Tables</Card.Title>
                                                            <h3>
                                                                <Link href="https://wscubetech.co/Assignments/furniture/product-details/isaac-chest-of-drawer">
                                                                    Isaac Chest of Drawer
                                                                </Link>
                                                            </h3>
                                                            <div className="price_box">
                                                                <span className="old_price">Rs. 32,000</span>
                                                                <span className="current_price">Rs. 25,000</span>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>

                                    <div className={`tab-pane fade ${activeTab === "arrivals" ? "active show" : ""}`} id="arrivals" role="tabpanel">
                                        <div className="product_container">
                                            <Row>
                                                <Col md={3} className="full-width">
                                                    <Card className="single_product full-width">
                                                        <Card.Img variant="top" src="/1617829052195Caroline Study Tables__.jpg" />
                                                        <Card.Body className="product_content">
                                                            <Card.Title>Side and End Tables</Card.Title>
                                                            <h3>
                                                                <Link href="https://wscubetech.co/Assignments/furniture/product-details/isaac-chest-of-drawer">
                                                                    Isaac Chest of Drawer
                                                                </Link>
                                                            </h3>
                                                            <div className="price_box">
                                                                <span className="old_price">Rs. 32,000</span>
                                                                <span className="current_price">Rs. 25,000</span>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col md={3} className="full-width">
                                                    <Card className="single_product full-width">
                                                        <Card.Img variant="top" src="/1617829052195Caroline Study Tables__.jpg" />
                                                        <Card.Body className="product_content">
                                                            <Card.Title>Side and End Tables</Card.Title>
                                                            <h3>
                                                                <Link href="https://wscubetech.co/Assignments/furniture/product-details/isaac-chest-of-drawer">
                                                                    Isaac Chest of Drawer
                                                                </Link>
                                                            </h3>
                                                            <div className="price_box">
                                                                <span className="old_price">Rs. 32,000</span>
                                                                <span className="current_price">Rs. 25,000</span>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col md={3} className="full-width">
                                                    <Card className="single_product full-width">
                                                        <Card.Img variant="top" src="/1617829052195Caroline Study Tables__.jpg" />
                                                        <Card.Body className="product_content">
                                                            <Card.Title>Side and End Tables</Card.Title>
                                                            <h3>
                                                                <Link href="https://wscubetech.co/Assignments/furniture/product-details/isaac-chest-of-drawer">
                                                                    Isaac Chest of Drawer
                                                                </Link>
                                                            </h3>
                                                            <div className="price_box">
                                                                <span className="old_price">Rs. 32,000</span>
                                                                <span className="current_price">Rs. 25,000</span>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>

                                    <div className={`tab-pane fade ${activeTab === "onsale" ? "active show" : ""}`} id="onsale" role="tabpanel">
                                        <div className="product_container">
                                            <Row>
                                                <Col md={3} className="full-width">
                                                    <Card className="single_product full-width">
                                                        <Card.Img variant="top" src="/1617829052195Caroline Study Tables__.jpg" />
                                                        <Card.Body className="product_content">
                                                            <Card.Title>Side and End Tables</Card.Title>
                                                            <h3>
                                                                <Link href="https://wscubetech.co/Assignments/furniture/product-details/isaac-chest-of-drawer">
                                                                    Isaac Chest of Drawer
                                                                </Link>
                                                            </h3>
                                                            <div className="price_box">
                                                                <span className="old_price">Rs. 32,000</span>
                                                                <span className="current_price">Rs. 25,000</span>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                
                                                <Col md={3} className="full-width">
                                                    <Card className="single_product full-width">
                                                        <Card.Img variant="top" src="/1617829052195Caroline Study Tables__.jpg" />
                                                        <Card.Body className="product_content">
                                                            <Card.Title>Side and End Tables</Card.Title>
                                                            <h3>
                                                                <Link href="https://wscubetech.co/Assignments/furniture/product-details/isaac-chest-of-drawer">
                                                                    Isaac Chest of Drawer
                                                                </Link>
                                                            </h3>
                                                            <div className="price_box">
                                                                <span className="old_price">Rs. 32,000</span>
                                                                <span className="current_price">Rs. 25,000</span>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section>
                <Container fluid className='trending_collection'>
                    <Container className='py-5'>
                        <div className="banner_text p-4">
                            <h2>New Trending Collection</h2>
                            <span>We Believe That Good Design is Always in Season</span>
                            <Link href='/'>shopping Now</Link>
                        </div>
                    </Container>
                </Container>
            </section>


            <Bestselling />

            <section className='shipping_area shipping_two product_bottom_two'>
                <Container>
                    <Row>
                        <Col lg={4} md={4} className='p-2'>
                            <div className="single-shipping">
                                <div className="shipping_icone icone_1">
                                    <BiWorld />
                                </div>
                                <div className="shipping_content">
                                    <h3>Free Shipping</h3>
                                    <p>Free shipping on all order</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={4} className='p-2'>
                            <div className="single-shipping">
                                <div className="shipping_icone icone_2">
                                    <FaRegCircleCheck />
                                </div>
                                <div className="shipping_content">
                                    <h3>Money Return</h3>
                                    <p>Back guarantee under 7 days</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={4} className='p-2'>
                            <div className="single-shipping">
                                <div className="shipping_icone icone_4">
                                    <GoClock />
                                </div>
                                <div className="shipping_content">
                                    <h3>Online Support</h3>
                                    <p>Support online 24 hours a day</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Testimonial />

            <section className='newsletter_area product_bottom_two'>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="newsletter_content">
                                <h2>Our Newsletter</h2>
                                <p>Get E-mail updates about our latest shop and special offers.</p>
                                <div className="subscribe_form">
                                    <Form method="POST" action="https://wscubetech.co/Assignments/furniture" id="newsletter_form" className="mc-form footer-newsletter bv-form">
                                        <div className="form-group has-feedback">
                                            <input id="mc-email" name="email" type="email" placeholder="Email address..." data-bv-field="email" />


                                            <button id="mc-submit">Subscribe</button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

