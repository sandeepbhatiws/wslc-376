"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./LeftRight.css";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { TbGridDots } from "react-icons/tb";
import { PiDotsSixVerticalBold } from 'react-icons/pi';

export default function LeftRight() {
  return (
    <div>

      <Container fluid className="breadcrumbs_area">
        <Container className="breadcrumb_content">
          <Row>
            <Col lg={12}>
              <h3>Product Listing</h3>
              <ul className="p-0">
                <li>
                  <Link href="/">home</Link>
                </li>
                <li>&gt;</li>
                <li>Product Listing</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>


      <Container>
        <Row>

          <Col lg={3} xs={{ order: 2 }} md={{ order: 1 }} className="">
            <LeftSide />
          </Col>

          <Col xs={{ order: 1 }} md={{ order: 2 }} className="">
            <RightSide />
          </Col>
        </Row>
      </Container>
    </div>
  );
}



const LeftSide = () => {

  return (
    <>
      <div className='Scroll-left'>
        <div className="widget_list ">
          <h2>Categories</h2>

          <ul className='p-0'>

            <b>Tables</b>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" >Side and End Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>

            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" >Side and End Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" >Side and End Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>


          </ul>

          <ul className='p-0'>

            <b>Living Storage</b>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" >Side and End Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>

            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" >Side and End Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" >Side and End Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>


          </ul>

          <ul className='p-0'>

            <b>Mirror</b>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" >Side and End Tables</label>
            </li>



          </ul>
        </div>


        <div className="widget_list">
          <h2>Material</h2>

          <ul className='p-0'>

            <b>Tables</b>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" >Side and End Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>

            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" >Side and End Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" >Side and End Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>


          </ul>


        </div>
      </div>

      <div className='Scroll-left'>
        <div className="widget_list">
          <h2>Material</h2>

          <ul className='p-0'>

            <b>Tables</b>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" >Side and End Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>

            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" >Side and End Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" >Side and End Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>


          </ul>


        </div>
      </div>

      <div className='Scroll-left'>
        <div className="widget_list">
          <h2>Color</h2>

          <ul className='p-0'>


            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" >Side and End Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>

            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" >Side and End Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" >Side and End Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="categories27">Nest Of Tables</label>
            </li>


          </ul>


        </div>
      </div>


    </>
  );
};




const RightSide = () => {
  const [selectedOption, setSelectedOption] = useState("Featured Products");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [boxCount, setBoxCount] = useState(true)

  const handleSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };


  return (

    <>
      <div className="short-filter">
        <div className='short-filter-right'>
          <div onClick={() => setBoxCount(!boxCount)} className='d-none d-md-block '  > {boxCount ? <TbGridDots /> : <PiDotsSixVerticalBold />} </div>
          <div>Sort By :</div>
          <div
            className={`nice-select niceselect_option ${dropdownOpen ? "open" : ""}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}>
            <span className="current">{selectedOption} <span className='ms-4' >{dropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>  </span>
            <ul className="list">
              <li className="option" onClick={() => handleSelect("Sort By")}>Sort By</li>
              <li className="option" onClick={() => handleSelect("Featured Products")}>Featured Products</li>
              <li className="option" onClick={() => handleSelect("New Arrivals")}>New Arrivals</li>
              <li className="option" onClick={() => handleSelect("On Sale")}>On Sale</li>
              <li className="option" onClick={() => handleSelect("Best Sellings")}>Best Sellings</li>
              <li className="option" onClick={() => handleSelect("Sort by price: low to high")}>Sort by price: low to high</li>
              <li className="option" onClick={() => handleSelect("Sort by price: high to low")}>Sort by price: high to low</li>
              <li className="option" onClick={() => handleSelect("Product Name: A to Z")}>Product Name: A to Z</li>
              <li className="option" onClick={() => handleSelect("Product Name: Z to A")}>Product Name: Z to A</li>
            </ul>
          </div>

          <div>Showing 1–1 of 1 results</div>
        </div>
      </div>

      {/* cards */}
      {/* <div class="row col-lg-4 col-md-4 col-sm-6"> */}

      <Row md={boxCount ? 3 : 2} xs={2}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Row>



      {/* </div> */}
    </>
  );
};


const Cards = () => {
  return (
   
      <Col>

        <div className="single_product">
          <div className="product_thumb">
            <Link className="primary_img" href={`/product-details/${"your_product_name"}`}>
              <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1608312103476Dorian%20Shoe%20Rack_.jpg" className='img-fluid' alt="" />
            </Link>
            <Link className="secondary_img" href={`/product-details/${"your_product_name"}`}>
              <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1608312103476Dorian%20Shoe%20Rack_.jpg" className='img-fluid' alt="" />
            </Link>
          </div>
          <div className="product_content">
            <div className="tag_cate">
              <a>Display Unit</a>
            </div>
            <h3><Link href={`/product-details/${"your_product_name"}`}>Dorian Shoe Rack</Link></h3>
            <div className="price_box">
              <span className="old_price">Rs. 3,500</span>
              <span className="current_price">Rs. 2,800</span>
            </div>

            <div className="action_links mt-3">
              <ul>
                <li>
                  <a className="wishlist_tooltip" data-placement="top" title="Add to Wishlist" data-bs-toggle="tooltip">
                    <span className="icon">
                      <img src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/heart-regular.svg" className="wishlist_img img-fluid"  />
                    </span>
                  </a>
                </li>
                <li className="add_to_cart">
                  <a title="Add to Cart" id="product_14">
                    <div className="cartShow">add to cart</div>
                    <div className="cartHide" style={{ display: "none" }} >Loading...</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
    
  )
}


