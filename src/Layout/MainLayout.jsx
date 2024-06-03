import React from 'react';
import Sidebar from '../components/Sidebar';
import { sidebarItems } from '../contents/sidebarContent';


const MainLayout = ({ children }) => {


  return (
    <div className="flex h-screen bg-gray-100">
    <Sidebar sidebarItems={sidebarItems}/>
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
