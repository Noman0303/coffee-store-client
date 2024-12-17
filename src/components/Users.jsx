import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Header from './Header';

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = id => {
        //make sure user is confirmed to delete. Sweet Alart. 
        fetch(`https://coffee-store-server-ten-psi.vercel.app/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('Deleted successfully');
                    // Remove the user from UI 
                    const remainingUsers = users.filter(user => user._id !== id);
                    setUsers(remainingUsers);
                }
            })

    }

    return (
        <div>
            <Header></Header>
            <h2>Users : {loadedUsers.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Logged In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user =>
                                <tr key={user._id}>
                                    <th>{user._id}</th>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{user.lastLoggedAt}</td>
                                    <td> <button
                                        className='btn'
                                        // jehetu particular ekta id dhore amra ekta indiviual row delete korbo, tai eita ekta function er  through te hobe.
                                        onClick={() => handleDelete(user._id)}>X</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Users