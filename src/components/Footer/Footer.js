import React from 'react';

const Footer = () => {
    return (
       <div className='pt-10 pb-1 px-20 bg-base-200'>
            <footer class="footer text-base-content">
        <div>
            <span class="footer-title">Services</span> 
            <a href='/' class="link link-hover">Branding</a> 
            <a href='/' class="link link-hover">Design</a> 
            <a href='/' class="link link-hover">Marketing</a> 
            <a href='/' class="link link-hover">Advertisement</a>
        </div> 
        <div>
            <span class="footer-title">Company</span> 
            <a href='/' class="link link-hover">About us</a> 
            <a href='/' class="link link-hover">Contact</a> 
            <a href='/' class="link link-hover">Jobs</a> 
            <a href='/' class="link link-hover">Press kit</a>
        </div> 
        <div>
            <span class="footer-title">Legal</span> 
            <a href='/' class="link link-hover">Terms of use</a> 
            <a href='/' class="link link-hover">Privacy policy</a> 
            <a href='/' class="link link-hover">Cookie policy</a>
        </div> 
        <div>
            <span class="footer-title">Newsletter</span> 
            <div class="form-control w-80">
            <label class="label">
                <span class="label-text">Enter your email address</span>
            </label> 
            <div class="relative">
                <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" /> 
                <button class="btn btn-primary text-white absolute top-0 right-0 rounded-l-none">Subscribe</button>
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