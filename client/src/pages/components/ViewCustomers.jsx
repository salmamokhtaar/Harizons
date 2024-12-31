import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateCustomer from './UpdateCustomer'; // Ensure this is correctly imported

function ViewCustomers() {
    const [customers, setCustomers] = useState([]);
    const [editingCustomer, setEditingCustomer] = useState(null);

    useEffect(() => {
        // Fetch customer data from the API
        axios.get('http://localhost:5000/api/contacts/')
            .then(response => {
                setCustomers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the customer data!', error);
            });
    }, []);

    const handleUpdateCustomer = (updatedCustomer) => {
        axios.put(`http://localhost:5000/api/contacts/${updatedCustomer._id}`, updatedCustomer)
            .then(response => {
                const updatedCustomers = customers.map(customer =>
                    customer._id === updatedCustomer._id ? updatedCustomer : customer
                );
                setCustomers(updatedCustomers);
                setEditingCustomer(null);
                toast.success('Customer updated successfully!');
            })
            .catch(error => {
                console.error('There was an error updating the customer!', error);
                toast.error('Failed to update customer.');
            });
    };

    const handleDeleteCustomer = (customerId) => {
        const confirmed = window.confirm("Are you sure you want to delete this customer?");
        if (confirmed) {
            axios.delete(`http://localhost:5000/api/contacts/${customerId}`)
                .then(response => {
                    setCustomers(customers.filter(customer => customer._id !== customerId));
                    toast.success('Customer deleted successfully!');
                })
                .catch(error => {
                    console.error('There was an error deleting the customer!', error);
                    toast.error('Failed to delete customer.');
                });
        }
    };

    const handleStatusChange = (customerId, status) => {
        axios.put(`http://localhost:5000/api/contacts/${customerId}/status`, { status })
            .then(response => {
                const updatedCustomers = customers.map(customer =>
                    customer._id === customerId ? { ...customer, status } : customer
                );
                setCustomers(updatedCustomers);
                toast.success('Status updated successfully!');
            })
            .catch(error => {
                console.error('There was an error updating the status!', error);
                toast.error('Failed to update status.');
            });
    };

    return (
        <div className="p-3 bg-gray-100">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">All Customers</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 border-b text-left">Name</th>
                            <th className="py-2 px-4 border-b text-left">Email</th>
                            <th className="py-2 px-4 border-b text-left">Phone</th>
                            <th className="py-2 px-4 border-b text-left">Message</th>
                            <th className="py-2 px-4 border-b text-left">Status</th>
                            <th className="py-2 px-4 border-b text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer._id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{customer.name}</td>
                                <td className="py-2 px-4 border-b">{customer.email}</td>
                                <td className="py-2 px-4 border-b">{customer.phone}</td>
                                <td className="py-2 px-4 border-b">{customer.message}</td>
                                <td className="py-2 px-4 border-b">
                                    <select 
                                        value={customer.status} 
                                        onChange={(e) => handleStatusChange(customer._id, e.target.value)}
                                        className="border border-gray-300 rounded p-1"
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </td>
                                <td className="py-2 px-4 border-b flex justify-start space-x-2">
                                    <button onClick={() => setEditingCustomer(customer)} className="text-blue-500 hover:text-blue-700">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button onClick={() => handleDeleteCustomer(customer._id)} className="text-red-500 hover:text-red-700">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Update Customer Modal */}
            {editingCustomer && (
                <UpdateCustomer customer={editingCustomer} onUpdate={handleUpdateCustomer} />
            )}

            <ToastContainer />
        </div>
    );
}

export default ViewCustomers;