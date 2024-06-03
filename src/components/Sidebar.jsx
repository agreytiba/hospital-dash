import React, { useState } from 'react';

const SidebarItem = ({ name, icon, isCollapsed }) => {
  return (
    <div className={`flex items-center mb-4 ${isCollapsed ? 'justify-center' : ''}`}>
      <button className="text-center" aria-label={name}>
        <img src={icon} alt={name} className="mx-auto w-5" />
      </button>
      {!isCollapsed && <span className="ml-4">{name}</span>}
    </div>
  );
};

const Sidebar = ({ sidebarItems = [] }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`bg-white shadow-lg ${isCollapsed ? 'w-20' : 'w-64'} transition-width duration-300`}>
      <div className="p-4 flex-col items-center">
        <div className=" justify-between w-full items-center mb-4">
          <img src="https://img.icons8.com/ios-filled/50/000000/settings.png" alt="Logo" className="w-10 h-12" />
          <button
            className="text-center p-2"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label="Toggle Sidebar"
          >
            <img src="https://img.icons8.com/ios-filled/24/000000/menu.png" alt="Toggle" />
          </button>
        </div>
        {sidebarItems.length > 0 && sidebarItems.map(item => (
          <SidebarItem key={item.name} name={item.name} icon={item.icon} isCollapsed={isCollapsed} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
