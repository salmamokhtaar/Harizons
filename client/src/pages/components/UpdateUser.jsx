import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateUser({ user, onUpdate }) {
    const [formData, setFormData] = useState(user);

    useEffect(() => {
        setFormData(user);
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/users/${formData._id}`, formData)
            .then(response => {
                onUpdate(response.data.updatedUser);
            })
            .catch(error => {
                console.error('There was an error updating the user!', error);
            });
    };

    return (
        <div className="mt-4 p-4 bg-white border rounded shadow">
            <h2 className="text-xl font-bold mb-2">Update User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                        required
                        className="border rounded w-full px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="border rounded w-full px-3 py-2"
                    />
                </div>
                <div className="flex justify-end">
                    <button type="button" onClick={() => onUpdate(null)} className="mr-2 bg-gray-300 text-black px-4 py-2 rounded">Cancel</button>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateUser;