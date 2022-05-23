import React from 'react';
import banner1 from '../../images/sample-1.jpg';
import banner2 from '../../images/sample-2.jpg';
import banner3 from '../../images/sample-3.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
            <img src={banner1} alt='banner' className="w-full"/> 
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle hover:btn-primary hover:text-white">❮</a> 
            <a href="#slide2" className="btn btn-circle hover:btn-primary hover:text-white">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
            <img src={banner2} alt='banner' className="w-full"/> 
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle hover:btn-primary hover:text-white">❮</a> 
            <a href="#slide3" className="btn btn-circle hover:btn-primary hover:text-white">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
            <img src={banner3} alt='banner' className="w-full"/>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle hover:btn-primary hover:text-white">❮</a> 
            <a href="#slide1" className="btn btn-circle hover:btn-primary hover:text-white">❯</a>
            </div>
        </div>
        </div>
    );
};

export default Banner;