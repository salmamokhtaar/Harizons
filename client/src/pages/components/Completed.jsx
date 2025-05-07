import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Completed() {
    const [completedCustomers, setCompletedCustomers] = useState([]);

    useEffect(() => {
        // Fetch completed customer data from the API
        axios.get('http://localhost:5000/api/contacts/status/completed')
            .then(response => {
                setCompletedCustomers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the completed customer data!', error);
            });
    }, []);

    const handleDeleteCustomer = (customerId) => {
        const confirmed = window.confirm("Are you sure you want to delete this customer?");
        if (confirmed) {
            axios.delete(`http://localhost:5000/api/contacts/${customerId}`)
                .then(response => {
                    setCompletedCustomers(completedCustomers.filter(customer => customer._id !== customerId));
                    toast.success('Customer deleted successfully!');
                })
                .catch(error => {
                    console.error('There was an error deleting the customer!', error);
                    toast.error('Failed to delete customer.');
                });
        }
    };

    return (
        <div className="p-3 bg-gray-100">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Completed Customers</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 border-b text-left">Name</th>
                            <th className="py-2 px-4 border-b text-left">Email</th>
                            <th className="py-2 px-4 border-b text-left">Phone</th>
                            <th className="py-2 px-4 border-b text-left">Message</th>
                            <th className="py-2 px-4 border-b text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {completedCustomers.map((customer) => (
                            <tr key={customer._id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{customer.name}</td>
                                <td className="py-2 px-4 border-b">{customer.email}</td>
                                <td className="py-2 px-4 border-b">{customer.phone}</td>
                                <td className="py-2 px-4 border-b">{customer.message}</td>
                                <td className="py-2 px-4 border-b flex justify-start space-x-2">
                                    <button onClick={() => handleDeleteCustomer(customer._id)} className="text-red-500 hover:text-red-700">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ToastContainer />
        </div>
    );
}

export default Completed;