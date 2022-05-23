import React from 'react';

const ToolCard = () => {
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary text-white">Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default ToolCard;