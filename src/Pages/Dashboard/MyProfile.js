import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useState({});
    const [reload, setReload] = useState(false);

    useEffect(() => {
       if(user) {
         fetch(`https://desolate-beach-97825.herokuapp.com/profile/${user?.email}`)
         .then(res => res.json())
         .then(data => setProfile(data))
       }
    }, [user, reload])

    const handleMyprofile = e => {
        e.preventDefault();
        const name = user?.displayName;
        const email = user?.email;
        const edu = e.target.edu.value;
        const phone = e.target.phone.value;
        const linkdin = e.target.link.value;
        const address = e.target.address.value;
        const profile = {
            name,
            email,
            edu,
            phone,
            linkdin,
            address
        }
        fetch(`https://desolate-beach-97825.herokuapp.com/profile/${email}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                toast.success('Your Profile Update successfully')
                setReload(!reload);
            }
            else {
                toast.error('somethings went wrong, please try again')
            }
        })
    }

    return (
        <div>
           <h1 className='text-2xl mb-3'>My Profile</h1>
           <div>
               <h1 className='text-xl'><strong>Name: </strong> {user?.displayName}</h1>
               <h1 className='text-xl'><strong>Email: </strong> {user?.email}</h1>
               <h1 className='text-xl'><strong>Education: </strong> {profile.edu ? profile.edu : ''}</h1>
               <h1 className='text-xl'><strong>Phone Number: </strong> {profile.phone ? profile.phone : ''}</h1>
               <h1 className='text-xl'><strong>Linkedin: </strong> {profile.linkdin ? profile.linkdin : ''}</h1>
               <h1 className='text-xl'><strong>Address: </strong> {profile.address ? profile.address : ''}</h1>
           </div>
           <div>
           <div className='flex justify-center items-center my-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Add or Update Profile</h2>
                <form onSubmit={handleMyprofile}>
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
                            <span className="label-text">Education</span>
                        </label>
                        <input
                            type="text"
                            name='edu'
                            placeholder='Education'
                            className='input input-bordered w-full max-w-xs'
                            required
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input
                            type="number"
                            name='phone'
                            placeholder='Your Phone'
                            className='input input-bordered w-full max-w-xs'
                            required
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">LinkedIn profile link</span>
                        </label>
                        <input
                            type="text"
                            name='link'
                            placeholder='Your LinkdIn'
                            className='input input-bordered w-full max-w-xs'
                            required
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
                    <input className='btn w-full btn-primary max-w-xs text-white mt-5' type="submit" value="Update Profile" />
                </form>
                </div>
            </div>
            </div>
           </div>
        </div>
    );
};

export default MyProfile;