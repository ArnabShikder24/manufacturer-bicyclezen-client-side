import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);

    useEffect(() => {
        if(user) {
            fetch(`https://desolate-beach-97825.herokuapp.com/order?email=${user?.email}`, {
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
    }, [user, navigate, load])

    const handleCancelOrder = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this order!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {

                fetch(`https://desolate-beach-97825.herokuapp.com/order/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}` 
                }
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount) {
                        toast.success(`Order is Successfully Deleted`);
                        setLoad(!load)
                        
                    }
                    else {
                        toast.error('something went wrong, please try again');
                        
                    }
                })
            }
          });
    }

    return (
        <div>
            <h1 className='text-2xl mb-3'>My Order: {orders.length}</h1>
            <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Order Id</th>
                    <th>Product Name</th>
                    <th>Order Quantity</th>
                    <th>Address</th>
                    <th>Payment</th>
                    <th>Action or Transaction id</th>
                </tr>
                </thead>
                <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                            <th>{index + 1}</th>
                            <td>{order._id}</td>
                            <td>{order.productName}</td>
                            <td>{order.order}</td>
                            <td>{order.address}</td>
                            <td>
                                {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`} className='btn btn-xs btn-success text-white'>Pay</Link>}
                                {(order.price && order.paid) && <span className='text-success'>PAID</span>}
                            </td>
                            <td>{order.paid ? <span>{order.transactionId}</span> : <button onClick={() => handleCancelOrder(order._id)} className='btn btn-xs'>Cancel Order</button> }</td>
                        </tr>)
                        }

                    
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyOrder;