import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-12 py-8 bg-[#f1f5f9]">
            <Outlet></Outlet>
        </div> 
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li><Link to='/dashboard'>My Orders</Link></li>
            <li><Link to='/dashboard/dashaddreview'>Add Review</Link></li>
            <li><Link to='/dashboard/dashprofile'>My Profile</Link></li>
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;