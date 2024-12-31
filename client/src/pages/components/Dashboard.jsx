import React from 'react';
import { Outlet, useLocation, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import BusinessChart from './BusinessChart';
import AnotherChart from './AnotherChart';
import Profile from './Profile';
import ViewCustomers from './ViewCustomers';
import Completed from './Completed';
import Pending from './Pending';
import Reports from './Reports';
import Users from './Users';

const Dashboard = () => {
  const location = useLocation();
  const hideCardsPaths = ['/dashboard/view-customers', '/dashboard/completed', '/dashboard/pending', '/dashboard/reports', '/dashboard/users', '/dashboard/profile'];

  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-5 bg-gray-100 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

          {/* Conditionally render cards */}
          {!hideCardsPaths.includes(location.pathname) && (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4'>
              <div className='bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between'>
                <div className="flex items-center mb-3">
                  <div className="h-12 w-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <div className="ml-4">
                    <h2 className='text-lg font-semibold'>Document Translation</h2>
                    <p className='text-2xl font-bold'>📄</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Seamlessly translated a multinational company's HR policies and procedures from English to [Other Language]. Ensured accurate terminology and consistent brand voice throughout the entire document set.</p>
              </div>
              <div className='bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between'>
                <div className="flex items-center mb-3">
                  <div className="h-12 w-12 bg-green-500 text-white rounded-full flex items-center justify-center">
                    <i className="fas fa-film"></i>
                  </div>
                  <div className="ml-4">
                    <h2 className='text-lg font-semibold'>Transcription & Subtitling</h2>
                    <p className='text-2xl font-bold'>🎬</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Translated and adapted the content of a client's e-commerce website for the [Other Language] market. Optimized the user experience for the target audience, ensuring cultural relevance and linguistic accuracy.</p>
              </div>
           
              <div className='bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between'>
                <div className="flex items-center mb-3">
                  <div className="h-12 w-12 bg-yellow-500 text-white rounded-full flex items-center justify-center">
                    <i className="fas fa-pencil-alt"></i>
                  </div>
                  <div className="ml-4">
                    <h2 className='text-lg font-semibold'>Proofreading and Editing</h2>
                    <p className='text-2xl font-bold'>✏️</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Our purpose is to build solutions that remove barriers preventing people from doing their best work, and this is at the heart.</p>
              </div>
            </div>
          )}

          {/* Conditionally render charts */}
          {location.pathname === '/dashboard' && (
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white rounded-lg shadow-lg p-5">
                <AnotherChart />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-5">
                <BusinessChart />
              </div>
            </div>
          )}

          <div className="mt-5">
            <Routes>
              <Route path="view-customers" element={<ViewCustomers  />} />
              <Route path="completed" element={<Completed />} />
              <Route path="users" element={<Users />} />
              <Route path="pending" element={<Pending />} />
              <Route path="reports" element={<Reports />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;