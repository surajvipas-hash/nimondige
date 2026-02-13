import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaTachometerAlt, FaUsers, FaFileAlt, FaUser } from "react-icons/fa";

export default function CompanyLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const [manageOpen, setManageOpen] = useState(false);

  const menu = [
    {
      name: "Dashboard",
      path: "/company/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Manage Agent",
      path: "/company/agents",
      icon: <FaUsers />,
    },
    {
      name: "Reports",
      path: "/company/reports",
      icon: <FaFileAlt />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col shadow-2xl">

        {/* Logo */}
        <div className="px-6 py-5 text-xl font-semibold tracking-wide border-b border-gray-700">
          PigmyLite
        </div>

        {/* Welcome */}
        <div className="px-6 py-4 border-b border-gray-700 flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <FaUser />
          </div>
          <div className="text-sm">
            <p className="text-gray-300">Welcome :</p>
            <p className="font-medium">C01M01</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 mt-4">

          {menu.map((item) => (
            <div
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 px-6 py-3 cursor-pointer transition-all duration-300
              ${
                location.pathname === item.path
                  ? "bg-blue-600 shadow-lg"
                  : "hover:bg-gray-700 hover:pl-8"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}

          {/* Manage User */}
          <div className="mt-6">

            <div
              onClick={() => setManageOpen(!manageOpen)}
              className="flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-gray-700 transition-all duration-300"
            >
              <span className="text-lg">
                <FaUser />
              </span>
              <span>Manage User</span>
            </div>

            {manageOpen && (
              <div className="bg-gray-800 text-sm">
                <div
                  onClick={() => navigate("/company/profile")}
                  className="px-12 py-2 cursor-pointer hover:bg-gray-700 transition"
                >
                  Profile Update
                </div>

                <div
                  onClick={() => navigate("/company/change-password")}
                  className="px-12 py-2 cursor-pointer hover:bg-gray-700 transition"
                >
                  Change Password
                </div>

                <div
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                  className="px-12 py-2 cursor-pointer hover:bg-red-600 transition"
                >
                  Logout
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Top Bar */}
        <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <div className="flex gap-6 text-gray-600">
            <span
              onClick={() => navigate("/company/dashboard")}
              className="cursor-pointer hover:text-blue-600 transition"
            >
              Home
            </span>

            <span
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="cursor-pointer hover:text-red-600 transition"
            >
              Logout
            </span>
          </div>

          <span className="font-medium text-gray-700">
            PigmyLite Demo
          </span>
        </div>

        <div className="p-6 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
