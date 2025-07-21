import { BarChart, Bell, Loader } from 'lucide-react'
import React, { useEffect } from 'react'
import useUserStore from '../../store/useUserStore'
import useAuthStore from '../../store/useAuthStore';

const DashHome = () => {
  const {users,isFetchingUsers,fetchUsers}=useUserStore();
  const {authUser}=useAuthStore()

  useEffect(() => {
    fetchUsers();
  }, [])
  return (
    <main className="ml-64 flex-1 p-6 bg-base-100">
        <div className="sticky top-0 bg-base-100 p-4 shadow-md rounded-lg z-10 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="btn btn-ghost btn-circle">
              <Bell className="w-6 h-6" />
            </button>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={authUser.profilePicture} alt="User" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="stat bg-primary text-white shadow-lg rounded-md">
            <div className="stat-title text-base-100">Total Users</div>
            <div className="stat-value">{isFetchingUsers ? (<Loader className="size-10 animate-spin"/>) :users?.length }</div>
          </div>
          <div className="stat bg-secondary text-white shadow-lg rounded-md">
            <div className="stat-title text-base-100">Total Sales</div>
            <div className="stat-value">₹2,45,000</div>
          </div>
          <div className="stat bg-accent text-white shadow-lg rounded-md">
            <div className="stat-title text-base-100">Orders</div>
            <div className="stat-value">435</div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="mt-8 bg-base-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <BarChart className="w-6 h-6 text-primary" />
            Sales Analytics
          </h2>
          <p className="text-base-content/80 mt-2">
            A summary of recent sales performance and trends.
          </p>
        </div>
      </main>
  )
}

export default DashHome