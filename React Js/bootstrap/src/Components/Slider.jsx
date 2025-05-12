import React from 'react'
import slider1 from '../assets/images/slider1.jpg';
import slider2 from '../assets/images/slider2.jpg';
import slider3 from '../assets/images/slider3.jpg';
import slider4 from '../assets/images/slider4.jpg';


export default function Slider() {
  return (
    <>
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={slider1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={slider2} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={slider3} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={slider4} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
    </>
  )
}
