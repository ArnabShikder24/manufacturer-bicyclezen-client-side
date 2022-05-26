import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='flex justify-center my-10'>
            <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h1 className='text-xl'>Name: Arnab Shikder</h1>
                <p><strong>Email:</strong> arnabshikder2001@gmail.com</p>
                <p><strong>Education:</strong> B.Sc in Computer science and Engineering CSE at Premier University, Chittagong</p>
                <p><strong>Technologies:</strong> Reactjs, JavaScript, TypeScript, NextJs, ExpressJs, NodeJs, Mongodb, Firebase, Tailwind, Boostrap, SASS, HTML, CSS, etc</p>
                <p className='text-xl'>Some Project: <small>click button for see project</small></p>
                <p><a target='_blank' rel="noreferrer" className='btn btn-primary text-white'  href="https://assignment-11-1c3e6.web.app/">Fab Fragrance</a></p>
                <p><a target='_blank' rel="noreferrer" className='btn btn-primary text-white'  href="https://assignment-10-ba1cc.web.app/">Wild Movements</a></p>
                <p><a target='_blank' rel="noreferrer" className='btn btn-primary text-white'  href="https://coderarnab24.netlify.app/">Portfolio</a></p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default MyPortfolio;