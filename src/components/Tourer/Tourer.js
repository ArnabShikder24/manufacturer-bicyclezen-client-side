import React from 'react';
import cycle from '../../images/about-images.jpg';
import parts1 from '../../images/about-1.jpg';
import parts2 from '../../images/about-2.jpg';
import parts3 from '../../images/about-3.jpg';

const Tourer = () => {
    return (
        <div class="hero bg-base-100 my-28">
        <div class="hero-content flex-col lg:flex-row">
            <img src={cycle} alt='cycle' class="md:max-w-sm lg:max-w-2xl rounded-lg" />
            <div className='p-5'>
            <h1 class="text-5xl font-bold">Best Premium Parts of Bikes</h1>
            <p class="py-6">The world femouse menufacturer company provide you the best parts  of cycles.</p>
            <div class="carousel carousel-center md:max-w-xs lg:max-w-md p-4 space-x-4 rounded-box">
                <div class="carousel-item">
                    <img alt='parts1' src={parts1} class="rounded-box" />
                </div> 
                <div class="carousel-item">
                    <img alt='parts2' src={parts2} class="rounded-box" />
                </div> 
                <div class="carousel-item">
                    <img alt='parts3' src={parts3} class="rounded-box" />
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Tourer;