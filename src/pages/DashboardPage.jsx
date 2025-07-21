import React from "react";
import { Outlet } from "react-router-dom";
import DashSidebar from "../components/Dashboard/DashSidebar";

const DashboardPage = () => {
  return (
    <div className="flex bg-base-200  mt-16">
      <DashSidebar />
      <Outlet />  
    </div>
  );
};

export default DashboardPage;
