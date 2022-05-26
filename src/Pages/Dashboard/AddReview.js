import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const [wrong , setWrong] = useState(false);

    const handleAddReview = e => {
        e.preventDefault();
        const name = user?.displayName;
        const email = user?.email;
        const rating = e.target.rating.value;
        const review = e.target.review.value;
        const objReview = {
            name,
            email,
            rating,
            review
        }
        if(rating <= 0 || rating > 5) {
            toast.error('rating must be 1 to 5');
            setWrong(true);
            return
        }
        setWrong(false);
        fetch('https://desolate-beach-97825.herokuapp.com/review',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(objReview)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                toast.success('Your review add successfully')
            }
            else {
                toast.error('somethings went wrong, please try again')
            }
        })

    }

    return (
        <div>
            <h1 className='text-2xl'>Add Review</h1>
            <div className='flex justify-center items-center my-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Add A Review</h2>
                <form onSubmit={handleAddReview}>
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
                            <span className="label-text">Rating</span>
                        </label>
                        <input
                            type="number"
                            name='rating'
                            defaultValue="5"
                            className={wrong ? `input input-bordered input-error w-full max-w-xs` : `input input-bordered w-full max-w-xs`}
                            required
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <textarea
                            type="text"
                            name='review'
                            placeholder="Review"
                            className="input input-bordered w-full max-w-xs"
                            required
                        />
                    </div>
                    <input className='btn w-full btn-primary max-w-xs text-white mt-5' type="submit" value="Add Review" />
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AddReview;