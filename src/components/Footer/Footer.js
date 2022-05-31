import React from 'react';

const Footer = () => {
    return (
       <div className='pt-10 pb-1 px-20 bg-base-200'>
            <footer className="footer text-base-content">
        <div>
            <span className="footer-title">Services</span> 
            <a href='/' className="link link-hover">Branding</a> 
            <a href='/' className="link link-hover">Design</a> 
            <a href='/' className="link link-hover">Marketing</a> 
            <a href='/' className="link link-hover">Advertisement</a>
        </div> 
        <div>
            <span className="footer-title">Company</span> 
            <a href='/' className="link link-hover">About us</a> 
            <a href='/' className="link link-hover">Contact</a> 
            <a href='/' className="link link-hover">Jobs</a> 
            <a href='/' className="link link-hover">Press kit</a>
        </div> 
        <div>
            <span className="footer-title">Legal</span> 
            <a href='/' className="link link-hover">Terms of use</a> 
            <a href='/' className="link link-hover">Privacy policy</a> 
            <a href='/' className="link link-hover">Cookie policy</a>
        </div> 
        <div className='hidden lg:block'>
            <span className="footer-title">Newsletter</span> 
            <div className="form-control w-80">
            <label className="label">
                <span className="label-text">Enter your email address</span>
            </label> 
            <div className="relative">
                <input type="text" placeholder="username@site.com" className="input input-bordered w-full  pr-16" /> 
                <button className="btn btn-primary text-white absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
            </div>
        </div>        
        </footer>
        <div className='text-center my-5'>
            <p>Copyright © 2022 - All right reserved</p>
        </div>
       </div>
    );
};

export default Footer;