import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3dYPF8Nq4jgfU1or90Cu4t3TrracsvtGL3aBQlOdBNjWqrDCxErDtOrS8pCebqzg5vMAAdcyXGeAL3jXrua59Q00A6Z2TZUG');

const Payment = () => {
    const {orderId} = useParams();
    const {data: order, isLoading} = useQuery(['order', orderId], () => fetch(`https://desolate-beach-97825.herokuapp.com/order/${orderId}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-2xl'>Your Order ID: {orderId}, please Pay</h1>
            <div className='flex justify-center items-center my-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h1 className='text-primary font-bold'>Hello, {order?.name}</h1>
                <h2 className="card-title">Pay for {order?.productName}</h2>
                <p>Price: {order?.price}</p>

                <div className='my-4'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order}/>
                </Elements>
                </div>

            </div>
            </div>
            </div>
        </div>
    );
};

export default Payment;