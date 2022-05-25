import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-12 py-8 bg-[#f1f5f9]">
            <Outlet></Outlet>
        </div> 
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                <li><Link to='/dashboard'>My Profile</Link></li>
            {
                !admin &&
                <>
                <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                <li><Link to='/dashboard/dashaddreview'>Add Review</Link></li>
                </>
            }
            {
                admin &&
                <>
                <li><Link to='/dashboard/dashallorders'>Manage All Orders</Link></li>
                <li><Link to='/dashboard/dashadmin'>Manage Admin</Link></li>
                <li><Link to='/dashboard/dashproducts'>Manage Products</Link></li>
                <li><Link to='/dashboard/dashaddproduct'>Add Product</Link></li>
                </>
            }
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;