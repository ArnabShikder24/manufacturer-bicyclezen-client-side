import React, { useEffect, useState } from 'react';
import ToolCard from '../ToolCard/ToolCard';

const Tools = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://desolate-beach-97825.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='mx-5 md:mx-10 lg:mx-20 my-16'>
            <h1 className='font-bold text-3xl'>Products</h1>
            <div className='flex justify-center my-10'>
                <div className='grid grid-cols-1 gap-14 lg:grid-cols-3'>
                    {
                        products.map(p => <ToolCard key={p._id}
                            product={p}
                        ></ToolCard>)
                    }
                </div>    
            </div>            
        </div>
    );
};

export default Tools;