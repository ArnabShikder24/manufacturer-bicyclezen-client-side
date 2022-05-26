import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {useQuery} from 'react-query';
import Loading from '../Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const {productId} = useParams();
    const {data : product, isLoading} = useQuery(['product', productId], () => fetch(`https://desolate-beach-97825.herokuapp.com/product/${productId}`).then(res => res.json()));
    const [wrong , setWrong] = useState(false);

    if(isLoading) {
        return <Loading></Loading>
    }

    const handlePlaceOrder = e => {
        e.preventDefault()
        const productName = product?.name;
        const productId = product?._id;
        const name = user?.displayName;
        const email = user?.email;
        const price = product?.price;
        const phone = e.target.phone.value;
        const order = e.target.order.value;
        const address = e.target.address.value;
        const booking = {
            name,
            email,
            phone,
            price,
            productName,
            productId,
            order,
            address,            
        }

        if(order <= 0) {
            toast.error('Invalid input, you do not give this number');
            setWrong(true);
            return;
        }
        else if(order < product?.min_order) {
            toast.error(`You have to purchase at least ${product?.min_order} products`);
            setWrong(true);
            return;
        }
        else if(order > product?.available_quantity) {
            toast.error(`Your order should be less then ${product?.available_quantity}`)
            setWrong(true);
            return;
        }
        setWrong(false);
        fetch('https://desolate-beach-97825.herokuapp.com/order',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                toast.success('Your order place successfully')
            }
            else {
                toast.error('somethings went wrong, please try again')
            }
        })

    }

    return (
        <div>
            <div className="hero bg-base-100 my-20">
            <div className="hero-content flex-col lg:flex-row">
                    <img src={product?.img} alt={product?.name} className="max-w-sm rounded-lg" />
                <div className='p-5'>
                    <h1 className="text-3xl font-bold">Prodcut Id: {productId}</h1>
                    <h1 className="text-2xl font-bold">Prodcut Name: {product?.name}</h1>
                    <p className="py-6">{product?.description}</p>
                    <h1 className='text-xl font-semibold'>Price-Per-Unit: ${product?.price}</h1>
                    <h1 className='text-xl font-semibold'>Min-Order: {product?.min_order}</h1>
                    <h1 className='text-xl font-semibold'>Available-Quantity: {product?.available_quantity}</h1>
                </div>
            </div>
            </div>
            <div className='flex justify-center items-center my-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">place order</h2>
                <form onSubmit={handlePlaceOrder}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name='name'
                            value={user?.displayName}
                            className="input input-bordered w-full max-w-xs"
                            required
                            readOnly
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name='email'
                            value={user?.email}
                            className="input input-bordered w-full max-w-xs"
                            required
                            readOnly                            
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input
                            type="number"
                            name='phone'
                            placeholder="Your Number"
                            className="input input-bordered w-full max-w-xs"
                            required
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Order Quantity</span>
                        </label>
                        <input
                            type="number"
                            name='order'
                            defaultValue={product?.min_order}
                            className={wrong ? `input input-bordered input-error w-full max-w-xs` : `input input-bordered w-full max-w-xs`}
                            required
                            contentEditable
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <textarea
                            type="text"
                            name='address'
                            placeholder="Address"
                            className="input input-bordered w-full max-w-xs"
                            required
                        />
                    </div>
                    <input className='btn w-full btn-primary max-w-xs text-white mt-5' type="submit" value="Buy now" />
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Purchase;