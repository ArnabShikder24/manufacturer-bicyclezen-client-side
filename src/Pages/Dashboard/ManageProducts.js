import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading/Loading';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const {data : products, isLoading, refetch} = useQuery('product', () => fetch('https://desolate-beach-97825.herokuapp.com/product').then(res => res.json()))

    if(isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-2xl mb-3'>Manage Products: {products.length}</h1>
            <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Available Quantity</th>
                    <th>Remove Prouduct</th>
                </tr>
                </thead>
                <tbody>
                    {
                      products?.map((product, index) => <ProductRow 
                        key={product._id}
                        index={index}
                        product={product}
                        refetch={refetch}
                      ></ProductRow>)  
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ManageProducts;