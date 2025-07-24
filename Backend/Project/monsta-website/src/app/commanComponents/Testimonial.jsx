import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoStar } from 'react-icons/io5';
import { Container, Row } from 'react-bootstrap';
import "../globals.css";

export default function Testimonial() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
  return (
    <>
     <section className='testimonial_are mt-5'>
                <Container className='testimonial_titile'>
                    <Row>
                        <h3 className='pb-4'>What Our Custumers Say ?</h3>

                        <Slider {...settings}>

                            <div className="single_testimonial">
                                <p>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/c6381687-5a5e-4914-9373-9cbec4937be6-1670161604.jpg" height={100} className='pb-3' alt="" />
                                <span className="name">Kathy Young</span>
                                <span className="job_title">CEO of SunPark</span>
                                <div className="product_ratting pb-4">
                                    <ul className='p-0'>

                                        <li><a href="#"><IoStar /></a></li>

                                        <li><a href="#"><IoStar /></a></li>

                                        <li><a href="#"><IoStar /></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="single_testimonial">
                                <p>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/35b5a0a0-e80f-4038-a75a-2811de92118b-1670161614.png" height={100} alt="" />
                                <span className="name">Kathy Young</span>
                                <span className="job_title">CEO of SunPark</span>
                                <div className="product_ratting">
                                    <ul className='p-0'>

                                        <li><a href="#"><IoStar /></a></li>

                                        <li><a href="#"><IoStar /></a></li>

                                        <li><a href="#"><IoStar /></a></li>

                                        <li><a href="#"><IoStar /></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="single_testimonial">
                                <p>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg" height={100} alt="" />
                                <span className="name">Kathy Young</span>
                                <span className="job_title">CEO of SunPark</span>
                                <div className="product_ratting">
                                    <ul className='p-0'>

                                        <li><a href="#"><IoStar /></a></li>

                                        <li><a href="#"><IoStar /></a></li>

                                        <li><a href="#"><IoStar /></a></li>

                                        <li><a href="#"><IoStar /></a></li>

                                        <li><a href="#"><IoStar /></a></li>

                                    </ul>
                                </div>
                            </div>

                        </Slider>
                    </Row>
                </Container>
            </section>
    </>
  )
}
