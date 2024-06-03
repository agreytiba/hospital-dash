import React from "react";
import Header from "../components/Navbar";
import RightSidebar from "../components/RightBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        <Header />
        <div className=" p-6 overflow-y-auto">{children}</div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default DashboardLayout;
