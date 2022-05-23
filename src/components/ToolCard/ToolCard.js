import React from 'react';

const ToolCard = () => {
    return (
        <div class="card card-compact w-80 bg-base-100 shadow-xl">
        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary text-white">Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default ToolCard;