import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const statuses = [
    "Pending",
    "Completed",
];

function UpdateCustomer({ customer, onUpdate }) {
    const [formData, setFormData] = useState(customer);

    useEffect(() => {
        setFormData(customer);
    }, [customer]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleStatusChange = (e) => {
        const { value } = e.target;
        axios.put(`http://localhost:5000/api/contacts/${formData._id}/status`, { status: value })
            .then(response => {
                setFormData({ ...formData, status: value });
            })
            .catch(error => {
                console.error('There was an error updating the status!', error);
                toast.error('Failed to update status.');
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/contacts/${formData._id}`, formData)
            .then(response => {
                onUpdate(response.data.updatedContact);
                toast.success(' updated successfully!');

            })
            .catch(error => {
                console.error('There was an error updating the customer!', error);
            });
    };

    return (
        <div className="mt-4 p-4 bg-white border rounded shadow">
            <h2 className="text-xl font-bold mb-2">Update Customer</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
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
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        required
                        className="border rounded w-full px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        required
                        className="border rounded w-full px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Status</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleStatusChange}
                        className="border rounded w-full px-3 py-2"
                        required
                    >
                        {statuses.map((status) => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-end">
                    <button type="button" onClick={() => onUpdate(null)} className="mr-2 bg-gray-300 text-black px-4 py-2 rounded">Cancel</button>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
                </div>
            </form>
            <ToastContainer />

        </div>
    );
}

export default UpdateCustomer;