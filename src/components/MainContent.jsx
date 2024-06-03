import React from 'react';
import IntroHeader from './IntroHeader';
import CustomerCard from './CustomerCard';

const MainContent = () => {
  return (
    <main className="">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
         <IntroHeader/>
          <div className="grid grid-cols-2 gap-6">
          <CustomerCard title="Heart rate" subtitle="102 bpm" color='text-red-500'/>
          <CustomerCard title="Temperature" subtitle="36.6 °C"/>
          <CustomerCard title="Blood pressure" subtitle="120/80"/>
          <CustomerCard title="Glucose" subtitle="90 mg/dL" color='text-yellow-500'/>
          
         
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold"></h3>
              <p className=" text-2xl font-bold"></p>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-6 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Activity Analytics</h3>
         
              <p className="text-gray-600">Chart Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
