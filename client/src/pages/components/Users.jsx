import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateUser from './UpdateUser'; // Ensure this is correctly imported

function Users() {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        // Fetch user data from the API
        axios.get('http://localhost:5000/api/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the user data!', error);
            });
    }, []);

    const handleUpdateUser = (updatedUser) => {
        axios.put(`http://localhost:5000/api/users/${updatedUser._id}`, updatedUser)
            .then(response => {
                const updatedUsers = users.map(user =>
                    user._id === updatedUser._id ? updatedUser : user
                );
                setUsers(updatedUsers);
                setEditingUser(null);
                toast.success('User updated successfully!');
            })
            .catch(error => {
                console.error('There was an error updating the user!', error);
                toast.error('Failed to update user.');
            });
    };

    const handleDeleteUser = (userId) => {
        const confirmed = window.confirm("Are you sure you want to delete this user?");
        if (confirmed) {
            axios.delete(`http://localhost:5000/api/users/${userId}`)
                .then(response => {
                    setUsers(users.filter(user => user._id !== userId));
                    toast.success('User deleted successfully!');
                })
                .catch(error => {
                    console.error('There was an error deleting the user!', error);
                    toast.error('Failed to delete user.');
                });
        }
    };

    return (
        <div className="p-3 bg-gray-100">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">All Users</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 border-b text-left">Username</th>
                            <th className="py-2 px-4 border-b text-left">Email</th>
                            <th className="py-2 px-4 border-b text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{user.username}</td>
                                <td className="py-2 px-4 border-b">{user.email}</td>
                                <td className="py-2 px-4 border-b flex justify-start space-x-2">
                                    <button onClick={() => setEditingUser(user)} className="text-blue-500 hover:text-blue-700">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button onClick={() => handleDeleteUser(user._id)} className="text-red-500 hover:text-red-700">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Update User Modal */}
            {editingUser && (
                <UpdateUser user={editingUser} onUpdate={handleUpdateUser} />
            )}

            <ToastContainer />
        </div>
    );
}

export default Users;