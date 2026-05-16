import React, { useEffect, useState } from "react";

import {
  FaUsers,
  FaUserCheck,
  FaUserSlash,
  FaChartLine,
  FaBell,
  FaSearch,
  FaTrash,
  FaSignOutAlt,
  FaChartBar,
  FaDownload,
} from "react-icons/fa";


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
} from "recharts";

import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();

  const [users, setUsers] =
    useState([]);

  const [activeMenu,
    setActiveMenu] =
    useState("dashboard");

  const [search,
    setSearch] =
    useState("");

  const [showNotifications,
    setShowNotifications] =
    useState(false);

  // LOAD USERS

  useEffect(() => {

    loadUsers();

  }, []);

  const loadUsers = () => {

    const allUsers = [];

    Object.keys(localStorage).forEach((key) => {

      const ignore = [
        "isAdmin",
        "isUser",
        "loggedInUser",
      ];

      if (ignore.includes(key))
        return;

      try {

        const user = JSON.parse(
          localStorage.getItem(key)
        );

        if (
          user &&
          user.email &&
          user.password
        ) {

          allUsers.push(user);
        }

      } catch {}

    });

    setUsers(allUsers);
  };

  // COUNTS

  const totalUsers =
    users.length;

  const activeUsers =
    users.filter(
      (u) => !u.blocked
    ).length;

  const blockedUsers =
    users.filter(
      (u) => u.blocked
    ).length;

  const growth =
    totalUsers > 0
      ? Math.round(
          (activeUsers /
            totalUsers) *
            100
        )
      : 0;

  // SEARCH

  const filteredUsers =
    users.filter((u) =>
      u.email
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  // BLOCK USER

  const toggleBlock = (
    email
  ) => {

    const updated =
      users.map((u) => {

        if (
          u.email === email
        ) {

          const updatedUser = {
            ...u,
            blocked:
              !u.blocked,
          };

          localStorage.setItem(
            email,
            JSON.stringify(
              updatedUser
            )
          );

          return updatedUser;
        }

        return u;
      });

    setUsers(updated);
  };

  // DELETE USER

  const deleteUser = (
    email
  ) => {

    localStorage.removeItem(
      email
    );

    const updated =
      users.filter(
        (u) =>
          u.email !== email
      );

    setUsers(updated);
  };

  // LOGOUT

  const handleLogout = () => {

    localStorage.removeItem(
      "isAdmin"
    );

    navigate(
      "/admin-login"
    );
  };

  // CHART DATA

  const chartData = [

    {
      name: "Total",
      users: totalUsers,
    },

    {
      name: "Active",
      users: activeUsers,
    },

    {
      name: "Blocked",
      users: blockedUsers,
    },
  ];

  const pieData = [

    {
      name: "Active",
      value: activeUsers,
    },

    {
      name: "Blocked",
      value: blockedUsers,
    },
  ];

  const COLORS = [
    "#06b6d4",
    "#ef4444",
  ];

  return (

    <div className="min-h-screen bg-[#030712] text-white flex">

      {/* SIDEBAR */}

      <div className="w-[240px] bg-[#0b1120] border-r border-white/10 p-5 flex flex-col justify-between">

        <div>

          <div>

            <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text">

              Enkonix

            </h1>

            <p className="text-gray-400 text-xs mt-1">

              Admin Dashboard

            </p>

          </div>

          <div className="mt-10 space-y-3">

            <SidebarButton
              active={
                activeMenu ===
                "dashboard"
              }
              onClick={() =>
                setActiveMenu(
                  "dashboard"
                )
              }
              icon={
                <FaChartLine />
              }
              text="Dashboard"
            />

            <SidebarButton
              active={
                activeMenu ===
                "users"
              }
              onClick={() =>
                setActiveMenu(
                  "users"
                )
              }
              icon={<FaUsers />}
              text="Users"
            />

            <SidebarButton
              active={
                activeMenu ===
                "analytics"
              }
              onClick={() =>
                setActiveMenu(
                  "analytics"
                )
              }
              icon={
                <FaChartBar />
              }
              text="Analytics"
            />

          </div>

        </div>

        <button
          onClick={
            handleLogout
          }
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-sm font-semibold flex items-center justify-center gap-3"
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

      {/* MAIN */}

      <div className="flex-1 p-6 overflow-y-auto">

        {/* TOPBAR */}

        <div className="flex flex-col lg:flex-row justify-between gap-5">

          <div>

            <h1 className="text-3xl font-black">

              {activeMenu ===
                "dashboard" &&
                "Dashboard"}

              {activeMenu ===
                "users" &&
                "Users"}

              {activeMenu ===
                "analytics" &&
                "Analytics"}

            </h1>

            <p className="text-gray-400 text-sm mt-2">

              Welcome back Admin 

            </p>

          </div>

          <div className="flex items-center gap-4">

            {/* SEARCH */}

            <div className="flex items-center bg-[#111827] px-4 py-3 rounded-2xl w-[260px]">

              <FaSearch className="text-gray-400 text-sm" />

              <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="bg-transparent outline-none ml-3 text-sm w-full"
              />

            </div>

            {/* NOTIFICATION PANEL */}

            <div className="relative">

              <button
                onClick={() =>
                  setShowNotifications(
                    !showNotifications
                  )
                }
                className="w-11 h-11 rounded-2xl bg-[#111827] flex items-center justify-center relative"
              >

                <FaBell />

                {users.length > 0 && (

                  <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></div>

                )}

              </button>

              {showNotifications && (

                <div className="absolute right-0 mt-3 w-[320px] bg-[#0f172a] border border-white/10 rounded-3xl shadow-2xl p-5 z-50">

                  <div className="flex items-center justify-between mb-5">

                    <h2 className="text-lg font-bold">

                      Notifications

                    </h2>

                    <span className="text-xs text-cyan-400">

                      {users.length}
                      {" "}
                      Updates

                    </span>

                  </div>

                  <div className="space-y-4 max-h-[350px] overflow-y-auto">

                    {users.length > 0 ? (

                      users
                        .slice()
                        .reverse()
                        .slice(0, 8)
                        .map(
                          (
                            user,
                            index
                          ) => (

                            <div
                              key={index}
                              className="bg-[#111827] rounded-2xl p-4 hover:bg-white/5 transition"
                            >

                              <div className="flex items-start gap-3">

                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 flex items-center justify-center text-sm font-bold">

                                  {user.name
                                    ?.charAt(
                                      0
                                    )
                                    ?.toUpperCase()}

                                </div>

                                <div className="flex-1">

                                  <h3 className="text-sm font-semibold">

                                    {user.name ||
                                      "User"}

                                  </h3>

                                  <p className="text-xs text-gray-400 mt-1">

                                    {
                                      user.email
                                    }

                                  </p>

                                  <div className="flex items-center justify-between mt-3">

                                    <span
                                      className={`text-[10px] px-2 py-1 rounded-full ${
                                        user.blocked
                                          ? "bg-red-500/20 text-red-400"
                                          : "bg-green-500/20 text-green-400"
                                      }`}
                                    >

                                      {user.blocked
                                        ? "Blocked"
                                        : "Active"}

                                    </span>

                                    <span className="text-[10px] text-gray-500">

                                      {user.registeredAt ||
                                        "Recently"}

                                    </span>

                                  </div>

                                </div>

                              </div>

                            </div>

                          )
                        )

                    ) : (

                      <div className="text-center py-10 text-gray-400 text-sm">

                        No Notifications

                      </div>

                    )}

                  </div>

                </div>

              )}

            </div>

          </div>

        </div>

        {/* DASHBOARD */}

        {activeMenu ===
          "dashboard" && (

          <>

            {/* CARDS */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">

              <Card
                title="Total Users"
                value={
                  totalUsers
                }
                icon={
                  <FaUsers />
                }
              />

              <Card
                title="Active Users"
                value={
                  activeUsers
                }
                icon={
                  <FaUserCheck />
                }
              />

              <Card
                title="Blocked Users"
                value={
                  blockedUsers
                }
                icon={
                  <FaUserSlash />
                }
              />

              <Card
                title="Growth"
                value={`${growth}%`}
                icon={
                  <FaChartLine />
                }
              />

            </div>

            {/* CHARTS */}

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-8">

              <div className="xl:col-span-2 bg-[#0f172a] rounded-3xl p-5 border border-white/10">

                <h2 className="text-xl font-bold mb-5">

                  User Growth

                </h2>

                <div className="h-[300px]">

                  <ResponsiveContainer width="100%" height="100%">

                    <LineChart data={chartData}>

                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#1e293b"
                      />

                      <XAxis
                        dataKey="name"
                        stroke="#94a3b8"
                      />

                      <YAxis
                        stroke="#94a3b8"
                      />

                      <Tooltip />

                      <Line
                        type="monotone"
                        dataKey="users"
                        stroke="#06b6d4"
                        strokeWidth={3}
                      />

                    </LineChart>

                  </ResponsiveContainer>

                </div>

              </div>

              <div className="bg-[#0f172a] rounded-3xl p-5 border border-white/10">

                <h2 className="text-xl font-bold mb-5">

                  User Status

                </h2>

                <div className="h-[300px]">

                  <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                      <Pie
                        data={pieData}
                        outerRadius={100}
                        dataKey="value"
                      >

                        {pieData.map(
                          (
                            entry,
                            index
                          ) => (

                            <Cell
                              key={index}
                              fill={
                                COLORS[
                                  index
                                ]
                              }
                            />

                          )
                        )}

                      </Pie>

                      <Tooltip />

                    </PieChart>

                  </ResponsiveContainer>

                </div>

              </div>

            </div>

          </>

        )}

        {/* USERS */}

        {activeMenu ===
          "users" && (

          <div className="bg-[#0f172a] rounded-3xl p-5 border border-white/10 mt-8 overflow-x-auto">

            <div className="flex justify-between items-center mb-6">

              <div>

                <h2 className="text-2xl font-bold">

                  User Management

                </h2>

                <p className="text-gray-400 text-sm mt-1">

                  Manage all registered users

                </p>

              </div>

              <button className="px-4 py-2 rounded-xl bg-cyan-500 text-sm font-semibold flex items-center gap-2">

                <FaDownload />

                Export

              </button>

            </div>

            <table className="w-full min-w-[800px]">

              <thead>

                <tr className="border-b border-white/10 text-gray-400 text-sm">

                  <th className="text-left pb-4">

                    User

                  </th>

                  <th className="text-left pb-4">

                    Registered

                  </th>

                  <th className="text-left pb-4">

                    Status

                  </th>

                  <th className="text-left pb-4">

                    Actions

                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredUsers.map(
                  (
                    user,
                    index
                  ) => (

                    <tr
                      key={index}
                      className="border-b border-white/5 hover:bg-white/5 transition"
                    >

                      <td className="py-5">

                        <div className="flex items-center gap-3">

                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 flex items-center justify-center font-bold text-sm">

                            {user.name
                              ?.charAt(0)
                              ?.toUpperCase()}

                          </div>

                          <div>

                            <h2 className="font-semibold text-sm">

                              {user.name ||
                                "User"}

                            </h2>

                            <p className="text-gray-400 text-xs">

                              {
                                user.email
                              }

                            </p>

                          </div>

                        </div>

                      </td>

                      <td className="text-xs">

                        {user.registeredAt ||
                          "N/A"}

                      </td>

                      <td>

                        <span
                          className={`px-3 py-2 rounded-full text-xs font-bold ${
                            user.blocked
                              ? "bg-red-500/20 text-red-400"
                              : "bg-green-500/20 text-green-400"
                          }`}
                        >

                          {user.blocked
                            ? "Blocked"
                            : "Active"}

                        </span>

                      </td>

                      <td>

                        <div className="flex gap-2">

                          <button
                            onClick={() =>
                              toggleBlock(
                                user.email
                              )
                            }
                            className={`px-3 py-2 rounded-xl text-xs font-bold ${
                              user.blocked
                                ? "bg-green-500"
                                : "bg-yellow-500"
                            }`}
                          >

                            {user.blocked
                              ? "Unblock"
                              : "Block"}

                          </button>

                          <button
                            onClick={() =>
                              deleteUser(
                                user.email
                              )
                            }
                            className="px-3 py-2 rounded-xl bg-red-500 text-xs font-bold flex items-center gap-2"
                          >

                            <FaTrash />

                            Delete

                          </button>

                        </div>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        )}

        {/* ANALYTICS */}

        {activeMenu ===
          "analytics" && (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

            <AnalyticsCard
              title="Registered Users"
              value={totalUsers}
            />

            <AnalyticsCard
              title="Active Users"
              value={activeUsers}
            />

            <AnalyticsCard
              title="Blocked Users"
              value={blockedUsers}
            />

            <AnalyticsCard
              title="Growth Rate"
              value={`${growth}%`}
            />

          </div>

        )}

      </div>

    </div>

  );
}

// SIDEBAR BUTTON

function SidebarButton({
  active,
  onClick,
  icon,
  text,
}) {

  return (

    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm transition ${
        active
          ? "bg-gradient-to-r from-indigo-500 to-cyan-500"
          : "hover:bg-white/10"
      }`}
    >

      {icon}

      {text}

    </button>

  );
}

// CARD

function Card({
  title,
  value,
  icon,
}) {

  return (

    <div className="bg-[#0f172a] rounded-3xl p-5 border border-white/10 hover:scale-[1.02] transition">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-400 text-sm">

            {title}

          </p>

          <h1 className="text-4xl font-black mt-3">

            {value}

          </h1>

        </div>

        <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl">

          {icon}

        </div>

      </div>

    </div>

  );
}

// ANALYTICS CARD

function AnalyticsCard({
  title,
  value,
}) {

  return (

    <div className="bg-[#0f172a] rounded-3xl p-6 border border-white/10">

      <p className="text-gray-400 text-sm">

        {title}

      </p>

      <h1 className="text-3xl font-black mt-3">

        {value}

      </h1>

    </div>

  );
}

export default AdminDashboard;