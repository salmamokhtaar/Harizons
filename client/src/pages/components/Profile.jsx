import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [showProfile, setShowProfile] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        image: 'https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png',
        phone: '',
    });

    // useEffect(() => {
    //     // Fetch user data from the API
    //     axios.get('http://localhost:5000/api/user/profile')
    //         .then(response => {
    //             setFormData({
    //                 ...formData,
    //                 name: response.data.name,
    //                 email: response.data.email,
    //                 phone: response.data.phone,
    //             });
    //         })
    //         .catch(error => {
    //             console.error('There was an error fetching the user data!', error);
    //         });
    // }, []);

    const toggleProfile = () => {
        setShowProfile(prev => !prev);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., update user profile in the database)
        axios.put('http://localhost:5000/api/user/profile', formData)
            .then(response => {
                alert('Profile updated successfully!');
            })
            .catch(error => {
                console.error('There was an error updating the profile!', error);
            });
    };

    return (
        <div className="relative">
            <button onClick={toggleProfile} className="relative">
                <img
                    src={formData.image}
                    alt="User Avatar"
                    className="h-10 w-10 rounded-full cursor-pointer"
                />
            </button>
            {showProfile && (
                <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4">
                    <h3 className="font-bold mb-2">User Profile</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label className="block text-sm">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border rounded w-full px-2 py-1"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border rounded w-full px-2 py-1"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="border rounded w-full px-2 py-1"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="border rounded w-full px-2 py-1"
                            />
                        </div>
                        <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">
                            Update Profile
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Profile;