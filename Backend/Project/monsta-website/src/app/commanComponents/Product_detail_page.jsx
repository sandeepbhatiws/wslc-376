"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { PiGreaterThanThin } from "react-icons/pi";
import "./Product_detail_page.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Bestselling from './Bestselling';
// import Bestselling from './Bestselling';


export default function Product_detail_page() {
 
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                dots: false
            }

        }, {

            breakpoint: 300,
            settings: {
                slidesToShow: 2,
                dots: false
            }

        }]
    };
    return (
        <section  >
            <Container className='my-5 Product_detail_pageDiv'  >
                <h1 className='text-center fw-bold '>Yuvi sheesham wood sofa set </h1>
                <ul className='border-bottom pb-4 d-flex  justify-content-center coloreGray '>
                    <li>Home <span> <PiGreaterThanThin className='arrowDiv' /> </span> </li>
                    <li>Side and End Tables <span> <PiGreaterThanThin className='arrowDiv' /> </span> </li>
                    <li >Hrithvik Stool  </li>

                </ul>

                <Row xs={1} md={2} className='pt-4' >
                    <Col>
                        <div className=''>
                            <img src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg' className='img-fluid' />
                        </div>


                        <div className='product_slider'>
                            <div className='pre_arrow ' > <FaAngleLeft /> </div>
                            <div className='next_arrow'> <FaAngleRight />  </div>
                            <Slider {...settings} className='sildeSider' >

                                <div className='p-2' >
                                    <img className='img-fluid' src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg' />
                                </div>
                                <div className='p-2'>
                                    <img className='img-fluid' src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg' />
                                </div>
                                <div className='p-2'>
                                    <img className='img-fluid' src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg' />
                                </div>
                                <div className='p-2'>
                                    <img className='img-fluid' src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg' />
                                </div>
                                <div className='p-2'>
                                    <img className='img-fluid' src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg' />
                                </div>
                                <div className='p-2'>
                                    <img className='img-fluid' src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg' />
                                </div>
                            </Slider>
                        </div>
                    </Col>
                    <Col>
                        <h3 className='pt-4 pt-md-0 ' >Yuvi sheesham wood sofa set</h3>
                        <div className="product_price">
                            <span className="old_price">Rs. 10,000</span>
                            <span className="current_price">Rs. 7,600</span>
                        </div>
                        <div className="product_desc">
                            <p>The product includes a 12 month warranty against any manufacturing defects and issues with the materials that have been used.</p>
                        </div>

                        <button className="button" type="submit">add to cart</button>

                        <div className="product_d_meta">
                            <span>Code: jodn0056</span>
                            <span>Dimension: 72L * 32H * 30W</span>
                            <span>Estimate Delivery Days: "40-45" Days</span>
                            <span>Category:
                                <a>1 Seater Sofa</a>
                            </span>
                            <span>Color:
                                <a>Weathered French Grey</a>
                            </span>
                            <span>Material:
                                <a>Sal Wood</a>
                            </span>
                        </div>
                    </Col>
                </Row>


                <div className='Description'>
                    <h3>Description</h3>
                    <p>The product includes a 12 month warranty against any manufacturing defects and issues with the materials that have been used. Any product which is misused, neglected, improperly set up or otherwise damaged shall not be covered under the warranty.</p>
                </div>
            </Container>

            <Bestselling/>

            <Bestselling/>
        </section>
    )
}
