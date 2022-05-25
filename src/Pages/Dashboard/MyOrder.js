import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
            fetch(`http://localhost:5000/order?email=${user?.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                if(res.status === 401 || res.status === 403) {
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                    navigate('/login')
                }
                return res.json()
            })
            .then(data => {
                setOrders(data);
            })
        }
    }, [user, navigate])

    return (
        <div>
            <h1 className='text-2xl mb-3'>My Order: {orders.length}</h1>
            <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Order Quantity</th>
                    <th>Address</th>
                    <th>Payment</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                            <th>{index + 1}</th>
                            <td>{order.productId}</td>
                            <td>{order.productName}</td>
                            <td>{order.order}</td>
                            <td>{order.address}</td>
                            <td><button className='btn btn-xs btn-success text-white'>Pay</button></td>
                            <td><button className='btn btn-xs'>Cancel Order</button></td>
                        </tr>)
                        }

                    
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyOrder;