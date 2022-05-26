import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({index, user, refetch}) => {
    const {email, role} = user;

    const makeAdmin = () => {
        fetch(`https://desolate-beach-97825.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403) {
                toast.error('Failed to make an admin');
            }
            return res.json()
        })
        .then(data => {
            if(data.result.modifiedCount > 0) {
                refetch()
                toast.success('Make an admin Successfully ');
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button>}</td>
        </tr>
    );
};

export default UserRow;