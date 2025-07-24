'use client'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import "../globals.css";
import Link from 'next/link';
import { MdDelete } from "react-icons/md";

export default function page() {
    return (
        <>
            <Container fluid className='breadcrumbs_area'>
                <Container className='breadcrumb_content'>
                    <Row>
                        <Col lg={12}>
                            <h3>Shopping Cart</h3>
                            <ul className='p-0'>
                                <li><Link href="/">home</Link></li>
                                <li>&gt;</li>
                                <li>Shopping Cart</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className='shopping_cart_area'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="table_desc">
                                <div className="cart_page table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="product_remove">Delete</th>
                                                <th className="product_thumb">Image</th>
                                                <th className="product_name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product_quantity">Quantity</th>
                                                <th className="product_total">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td className="product_remove">
                                                    <Link href='/' data-productslug="caroline-study-tables" title="Remove" className="removeCart"><MdDelete /></Link>
                                                </td>
                                                <td className="product_thumb">
                                                    <Link href='https://wscubetech.co/Assignments/furniture/product-details/caroline-study-tables'>
                                                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg" className='img-fluid' alt="" />
                                                    </Link>
                                                </td>
                                                <td className="product_name">
                                                    <Link href='https://wscubetech.co/Assignments/furniture/product-details/caroline-study-tables'>Caroline Study Tables</Link>
                                                </td>
                                                <td className="product-price">Rs. 2,500</td>

                                                <td className="product_quantity">
                                                    <label>Quantity</label>
                                                    <input min="0" max="100" defaultValue="1" type="number" />
                                                </td>

                                                <td className="product_total">Rs. 2,500</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="cart_submit">
                                    <Button type="submit">update cart</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>


            <section className='border-bottom border-1 pb-5'>
            <Container className='coupon_area'>
                <Row>
                    <Col lg={6} md={6}>
                        <div className="coupon_code left">
                            <h3>Coupon</h3>
                            <div className="coupon_inner">
                                <p>Enter your coupon code if you have one.</p>
                                <form action="" id="discountform" autoComplete="off" noValidate="novalidate" className="bv-form"><button type="submit" className="bv-hidden-submit" style={{ display: "none", width: "0", heightL: "0" }}></button>
                                    <input placeholder="Coupon code" type="text" name="entercode" id="entercode" data-bv-field="entercode" /><i className="form-control-feedback bv-no-label" data-bv-icon-for="entercode" style={{ display: "none" }}
                                    ></i>
                                    <Button type="submit" className="couponApply">Apply coupon</Button>
                                </form>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={6}>
                    <div className="coupon_code right">
                            <h3>Cart Totals</h3>
                            <div className="coupon_inner">
                                <div className="cart_subtotal">
                                   <p>Subtotal</p>
                                   <p className="cart_amount">Rs. 2,500</p>
                                </div>
                                <div className="cart_subtotal">
                                   <p>Discount (-)</p>
                                   <p className="cart_amount discount_price"> Rs. 0</p>
                                </div>
                                

                                <div className="cart_subtotal">
                                   <p>Total</p>
                                   <p className="cart_amount grand_total">Rs. 2,500</p>
                                </div>
                                <div className="checkout_btn">
                                <Link href="/login-register">Proceed to Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </section>
        </>
    )
}
