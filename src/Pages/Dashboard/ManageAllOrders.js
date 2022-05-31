import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';
import AllOrderRow from './AllOrderRow';

const ManageAllOrders = () => {
    const navigate = useNavigate();
    const {data: orders, isLoading, refetch} = useQuery('allorder', () => fetch('https://desolate-beach-97825.herokuapp.com/allorder', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}` 
        }
    }).then(res => {
        if(res.status === 401 || res.status === 403) {
            signOut(auth)
            localStorage.removeItem('accessToken')
            navigate('/login')
        }
        return res.json()    
    }))

    if(isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-2xl mb-3'>Manage All Orders: {orders.length}</h1>
            <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>User Name</th>
                    <th>Product Name</th>
                    <th>Paid Status</th>
                    <th>Order Place</th>
                    <th>Cancle Order</th>
                </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((order, index) => <AllOrderRow key={order._id}
                            index={index}
                            order={order}
                            refetch={refetch}
                        >
                        </AllOrderRow>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;