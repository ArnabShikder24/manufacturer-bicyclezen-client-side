import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [resetEmail, setResetEmail] = useState('');

    let signInError;

    
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    if(user || gUser) {
        console.log(user || gUser)
    }

    if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

     //reset password and tostify
     const handleResetPassword = async () => {
        if(resetEmail) {
            toast('Sent email');
        }
        else {
            toast('Give me your Email')
            return;
        }
        await sendPasswordResetEmail(resetEmail);
    }
    return (
        <div className='flex justify-center items-center my-20'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            onBlur={e => setResetEmail(e.target.value)}
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>

                    {signInError}
                    <input className='btn w-full btn-primary max-w-xs text-white' type="submit" value="Login" />
                </form>
                <p><small>Forget Password? <button className='btn btn-xs text-black glass'  onClick={handleResetPassword} >Reset Password</button></small></p>
                <p><small>New in Bicyclezen <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
                <div className="divider">OR</div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline btn-primary"
                >Continue with Google</button>
            </div>
        </div>
    </div >
    );
};

export default Login;