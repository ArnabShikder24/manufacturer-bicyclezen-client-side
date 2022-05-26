import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading/Loading';
import AllOrderRow from './AllOrderRow';

const ManageAllOrders = () => {
    const {data: orders, isLoading, refetch} = useQuery('allorder', () => fetch('https://desolate-beach-97825.herokuapp.com/order', {
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