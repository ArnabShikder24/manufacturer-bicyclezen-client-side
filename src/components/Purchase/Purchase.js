import React from 'react';
import { useParams } from 'react-router-dom';
import {useQuery} from 'react-query';
import Loading from '../Loading/Loading';

const Purchase = () => {
    const {productId} = useParams();
    const {data : product, isLoading} = useQuery(['product', productId], () => fetch(`http://localhost:5000/product/${productId}`).then(res => res.json()));

    if(isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="hero bg-base-100 my-20">
        <div class="hero-content flex-col lg:flex-row">
            <img src={product?.img} alt={product?.name} class="max-w-sm rounded-lg" />
            <div className='p-5'>
            <h1 class="text-3xl font-bold">Prodcut Id: {productId}</h1>
            <h1 class="text-2xl font-bold">Prodcut Name: {product?.name}</h1>
            <p class="py-6">{product?.description}</p>
            <h1 className='text-xl font-semibold'>Price-Per-Unit: ${product?.price}</h1>
            <h1 className='text-xl font-semibold'>Min-Order: {product?.min_order}</h1>
            <h1 className='text-xl font-semibold'>Available-Quantity: {product?.available_quantity}</h1>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Purchase;