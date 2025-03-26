import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function Dashboard() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Navbar/>
         
<div className="flex flex-col md:flex-row h-screen w-screen bg-gray-50 overflow-hidden">
  {/* Sidebar container with shadow */}
  <div className="w-full md:w-64 bg-white shadow-lg ">
    <Sidebar />
  </div>
  
  {/* Working area with padding and scroll capability */}
  <div className="flex-1 p-6 overflow-auto">
    {/* Working area content */}
    <div className="max-w-6xl mx-auto">
      {/* Your content goes here */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h1>
      
      {/* Example content container with card styling */}
      <div className="bg-white rounded-lg shadow p-6 mb-6 min-h-[60vh]">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Content Area</h2>
        <p className="text-gray-600">This is your main working area. Add your content here.</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Dashboard;
