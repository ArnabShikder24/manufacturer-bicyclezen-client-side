import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading/Loading';
import UserRow from './UserRow';

const ManageAdmin = () => {
    const {data : users, isLoading, refetch} = useQuery('user', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}` 
        }
    }).then(res => res.json()))

    if(isLoading) {
        return <Loading></Loading>
    }
    
    return (
        <div>
            <h1 className='text-2xl mb-3'>Manage Admin: {users.length}</h1>
            <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Make Admin</th>
                </tr>
                </thead>
                <tbody>
                    {
                      users?.map((user, index) => <UserRow 
                        key={user._id}
                        index={index}
                        user={user}
                        refetch={refetch}
                      ></UserRow>)  
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ManageAdmin;