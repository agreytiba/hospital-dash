import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow">
      <input type="text" placeholder="Search" className="w-1/3 p-2 border rounded" />
      <div className="flex items-center">
        <button className="text-sm font-medium mr-4 bg-blue-500 text-white py-2 px-4 rounded">This Week</button>
        <img src="https://img.icons8.com/ios-filled/50/000000/user.png" className="w-10 h-10 rounded-full" alt="User" />
      </div>
    </header>
  );
};

export default Header;
