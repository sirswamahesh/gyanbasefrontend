import {
  Layers,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const DashSidebar = () => {
  return (
    <aside className="w-64 bg-base-100 shadow-md fixed h-full">
      <div className="p-4 text-xl font-bold text-primary">Admin Panel</div>
      <nav className="flex-1">
        <ul className="menu p-4">
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                isActive
                  ? "active flex items-center gap-2"
                  : "flex items-center gap-2"
              }
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/users"
              className={({ isActive }) =>
                isActive
                  ? "active flex items-center gap-2"
                  : "flex items-center gap-2"
              }
            >
              <Users className="w-5 h-5" />
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/courses"
              className={({ isActive }) =>
                isActive
                  ? "active flex items-center gap-2"
                  : "flex items-center gap-2"
              }
            >
              <Layers className="w-5 h-5" />
              Courses
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default DashSidebar;
