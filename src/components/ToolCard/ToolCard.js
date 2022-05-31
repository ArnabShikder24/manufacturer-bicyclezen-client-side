import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolCard = ({product}) => {
    const {_id, img, name, description, price, min_order, available_quantity} = product;
    const navigate = useNavigate();
    return (
        <div>
            <div className="card card-compact w-60 md:w-64 lg:w-80 bg-base-100 shadow-xl">
            <figure><img src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name} <button className="ml-2 btn btn-xs no-animation">Available: {available_quantity}</button></h2>
                <p>{description.slice(0, 55)}...</p>
                <p>Per-Unit-Price: ${price}</p>
                <p>min-order: ${min_order}</p>
                <div className="card-actions justify-end">
                <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-primary text-white">place order</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ToolCard;