import React from 'react';

const RightSidebar = () => {
  return (
    <div className="col-span-4">
      <div className="bg-blue-800 text-white p-6 rounded-lg shadow mb-6">
        <div className="flex items-center">
          <img src="https://img.icons8.com/ios-filled/50/000000/user.png" className="w-16 h-16 rounded-full" alt="User" />
          <div className="ml-4">
            <h3 className="text-xl font-semibold">Emma Shelton</h3>
            <p>30 years</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between">
            <p>Weight</p>
            <p>63 kg</p>
          </div>
          <div className="flex justify-between">
            <p>Height</p>
            <p>166 cm</p>
          </div>
          <div className="flex justify-between">
            <p>Age</p>
            <p>30 years</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h3 className="text-xl font-semibold mb-4">April 2021</h3>
        <div>
          <p className="text-blue-500">Dentist</p>
          <p className="text-gray-600">10 AM</p>
        </div>
        <div className="mt-4">
          <p className="text-blue-500">Oculist</p>
          <p className="text-gray-600">11 AM</p>
        </div>
        <div className="mt-4">
          <p className="text-blue-500">Cardiologist</p>
          <p className="text-gray-600">7 PM</p>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
