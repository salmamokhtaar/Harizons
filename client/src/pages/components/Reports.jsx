import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Reports() {
    const [reportData, setReportData] = useState({
        totalUsers: 0,
        totalContacts: 0,
        completedContacts: 0,
        pendingContacts: 0,
    });

    useEffect(() => {
        // Fetch report data from the API
        axios.get('http://localhost:5000/api/reports')
            .then(response => {
                setReportData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the report data!', error);
            });
    }, []);

    return (
        <div className="p-3 bg-gray-100">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Reports</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 border-b text-left">Metric</th>
                            <th className="py-2 px-4 border-b text-left">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b">Total Users</td>
                            <td className="py-2 px-4 border-b">{reportData.totalUsers}</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b">Total Customers</td>
                            <td className="py-2 px-4 border-b">{reportData.totalContacts}</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b">Completed Tasks</td>
                            <td className="py-2 px-4 border-b">{reportData.completedContacts}</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b">Pending Tasks</td>
                            <td className="py-2 px-4 border-b">{reportData.pendingContacts}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Reports;