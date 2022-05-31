import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch('https://desolate-beach-97825.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    
    return (
        <div className='mx-20 my-16'>
        <h1 className='font-bold text-3xl'>Reviews</h1>
        <div className='flex justify-center my-10'>
            <div className='grid grid-cols-1 gap-14 lg:grid-cols-3'>
                {
                    reviews.map(r => <div key={r._id} className="card lg:w-80 bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">{r.name}</h2>
                        <p>Email: {r.email}</p>
                        <p>Rating: {r.rating}⭐</p>
                        <p>Review: {r.review}</p>
                    </div>
                  </div>)
                }
            </div>
        </div>
        </div>
    );
};

export default Review;