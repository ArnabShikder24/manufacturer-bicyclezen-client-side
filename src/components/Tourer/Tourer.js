import React from 'react';
import cycle from '../../images/about-images.jpg';
import parts1 from '../../images/about-1.jpg';
import parts2 from '../../images/about-2.jpg';
import parts3 from '../../images/about-3.jpg';

const Tourer = () => {
    return (
        <div className="hero bg-base-100 my-28">
        <div className="hero-content flex-col lg:flex-row">
            <img src={cycle} alt='cycle' className="md:max-w-sm lg:max-w-2xl rounded-lg" />
            <div className='p-5'>
            <h1 className="text-5xl font-bold">Best Premium Parts of Bikes</h1>
            <p className="py-6">The world femouse menufacturer company provide you the best parts  of cycles.</p>
            <div className="carousel carousel-center md:max-w-xs lg:max-w-md p-4 space-x-4 rounded-box">
                <div className="carousel-item">
                    <img alt='parts1' src={parts1} className="rounded-box" />
                </div> 
                <div className="carousel-item">
                    <img alt='parts2' src={parts2} className="rounded-box" />
                </div> 
                <div className="carousel-item">
                    <img alt='parts3' src={parts3} className="rounded-box" />
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Tourer;