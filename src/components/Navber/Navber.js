import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link} from 'react-router-dom';
import auth from '../../firebase.init';

const Navber = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };

    const menuItems = <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blogs'>Blogs</Link></li>
      <li><Link to='/myprotfolio'>My Portfolio</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      {
          user && <li><Link to='/dashboard'>Dashboard</Link></li>
      }
      <li>{user ? <button className="btn glass md:btn-primary md:text-white lg:text-white" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
    
    </>
    return (
        <div className="navbar bg-primary">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {menuItems}
            </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl text-white">Bicyclezen</Link>
        </div>
        <div className="navbar-center hidden lg:flex lg:text-white">
            <ul className="menu menu-horizontal p-0">
                {menuItems}
            </ul>
        </div>
        <div className="navbar-end">
        {
            user && <label htmlFor="dashboard-sidebar" className="btn text-white glass drawer-button lg:hidden">Open drawer</label>
        }
        <button className="btn btn-ghost btn-circle hidden lg:flex text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <button className="btn btn-ghost btn-circle hidden lg:flex text-white">
        <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
        </button>
        </div>
        </div>
    );
};

export default Navber;