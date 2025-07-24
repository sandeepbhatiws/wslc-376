'use client'
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import "../globals.css";
import Link from 'next/link';
import Testimonial from '../commanComponents/Testimonial';


export default function page() {
    return (
        <>
            <Container fluid className='breadcrumbs_area'>
                <Container className='breadcrumb_content'>
                    <Row>
                        <Col lg={12}>
                            <h3>About Us</h3>
                            <ul className='p-0'>
                                <li><Link href="/">home</Link></li>
                                <li>&gt;</li>
                                <li>About Us</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container className='about_section'>
                <Row>
                    <Col lg={12}>


                        <div className='about_thumb'>
                            <img src='/983cc349-1718-4290-b7cd-c8eb20459536-1671213069.jpg' alt='about-us' className='img-fluid' />
                        </div>

                        <div className="about_content">
                            <h2>Welcome to Monsta!</h2>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. </p>
                            <span>“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”</span>
                        </div>

                    </Col>
                </Row>
            </Container>

            <Container className='choseus_area'>
                <Row>
                    <Col lg={12}>
                        <div className="chose_title">
                            <h2>Why chose us?</h2>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="single_chose">
                            <div className="chose_icone">
                                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/c65c4789-c1eb-4cfc-9961-3ab025317e08-1670161041.jpg" alt="" />
                            </div>
                            <div className="chose_content">
                                <h3>Creative Design</h3>
                                <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="single_chose">
                            <div className="chose_icone">
                                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/89df96b6-b70d-463b-affb-58a74d49ed6b-1670161065.jpg" alt="" />
                            </div>
                            <div className="chose_content">
                                <h3>100% Money Back Guarantee</h3>
                                <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="single_chose">
                            <div className="chose_icone">
                                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/eb6a7519-f0f9-469f-af25-4ba0536060fd-1670161090.jpg" alt="" />
                            </div>
                            <div className="chose_content">
                                <h3>Online Support 24/7</h3>
                                <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='about_gallery_section'>
                <Container>
                    <Row>
                        <Col lg={4} md={6}>
                            <div className="single_gallery_section">
                                <div className="gallery_thumb">
                                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/dbfbc372-1550-40ef-a372-19566e1776b2-1671213170.jpg" alt="" />
                                </div>
                                <div className="about_gallery_content">
                                    <h3>What Do We Do?</h3>
                                    <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                        <div className="single_gallery_section">
                                <div className="gallery_thumb">
                                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0eb1dffc-23c4-4a66-bb02-f5028e3658d3-1671213170.jpg" alt="" />
                                </div>
                                <div className="about_gallery_content">
                                    <h3>Our Mission</h3>
                                    <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                        <div className="single_gallery_section">
                                <div className="gallery_thumb">
                                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/028a3c98-0fb9-4fc0-8e7c-0076d254de41-1671213170.jpg" alt="" />
                                </div>
                                <div className="about_gallery_content">
                                    <h3>History Of Us</h3>
                                    <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Testimonial />


        </>
    )
}
