import React, { useEffect } from "react";
import { Eye, Loader, Trash2 } from "lucide-react";
import useUserStore from "../../store/useUserStore";

const UsersTable = () => {
  // Static Dummy Data
  // const users = [
  //   { id: 1, name: "Amit Sharma", email: "amit@gmail.com", role: "Admin" },
  //   { id: 2, name: "Priya Verma", email: "priya@gmail.com", role: "User" },
  //   { id: 3, name: "Rahul Mehta", email: "rahul@gmail.com", role: "User" },
  //   { id: 4, name: "Sneha Kapoor", email: "sneha@gmail.com", role: "Editor" },
  //   { id: 5, name: "Vikas Yadav", email: "vikas@gmail.com", role: "User" },
  //   { id: 6, name: "Neha Jain", email: "neha@gmail.com", role: "Admin" },
  //   { id: 7, name: "Rohan Singh", email: "rohan@gmail.com", role: "User" },
  //   { id: 8, name: "Meera Gupta", email: "meera@gmail.com", role: "Editor" },
  //   { id: 9, name: "Suresh Rathi", email: "suresh@gmail.com", role: "User" },
  //   { id: 10, name: "Kiran Patil", email: "kiran@gmail.com", role: "User" },
  // ];

  const { users, isFetchingUsers, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="ml-64 flex-1 p-6 bg-base-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Users List</h2>
      {isFetchingUsers ? (
        <div className="flex items-center justify-center ">
          <Loader className="size-10 animate-spin" />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="bg-base-200">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className="badge badge-primary">{user.role}</span>
                  </td>
                  <td className="flex gap-2">
                    <button className="btn btn-sm btn-outline btn-info">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="btn btn-sm btn-outline btn-error">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UsersTable;
