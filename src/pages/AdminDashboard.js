import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";

import {
  FaUsers,
  FaUserCheck,
  FaUserSlash,
  FaChartLine,
  FaTrash,
  FaBan,
  FaCheck,
  FaDollarSign,
  FaBell,
  FaEye,
  FaDownload,
  FaUserClock,
  FaSearch,
 
  FaCloud,
  FaRobot,
} from "react-icons/fa";

import {
  ResponsiveContainer,

  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";

export default function AdminDashboard() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [recentActivities, setRecentActivities] = useState([]);
 
  const [onlineUsers, setOnlineUsers] = useState(0);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {

    const allUsers = [];

    Object.keys(localStorage).forEach((key) => {

      const ignored = [
        "isAdmin",
        "isUser",
        "loggedInUser",
        "theme",
        "language",
      ];

      if (ignored.includes(key)) return;

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

    setOnlineUsers(
      Math.floor(allUsers.length * 0.7)
    );

    setRecentActivities([
      "AI Analytics Updated",
      "Cloud Infrastructure Synced",
      "New User Registered",
      "Security Scan Completed",
      "Admin Logged In",
    ]);

  };

  const totalUsers = users.length;

  const activeUsers = users.filter(
    (u) => !u.blocked
  ).length;

  const blockedUsers = users.filter(
    (u) => u.blocked
  ).length;

  const revenue =
    totalUsers * 1500;

  const visitors =
    totalUsers * 320;

  const growth =
    totalUsers > 0
      ? Math.round(
          (activeUsers / totalUsers) * 100
        )
      : 0;

  const filteredUsers = useMemo(() => {

    return users.filter((u) =>
      u.email
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

  }, [users, search]);

  const toggleBlock = (email) => {

    const updated = users.map((u) => {

      if (u.email === email) {

        const updatedUser = {
          ...u,
          blocked: !u.blocked,
        };

        localStorage.setItem(
          email,
          JSON.stringify(updatedUser)
        );

        setRecentActivities((prev) => [
          `${updatedUser.blocked ? "Blocked" : "Unblocked"} ${email}`,
          ...prev,
        ]);

        return updatedUser;
      }

      return u;

    });

    setUsers(updated);

  };

  const deleteUser = (email) => {

    localStorage.removeItem(email);

    setUsers(
      users.filter(
        (u) => u.email !== email
      )
    );

    setRecentActivities((prev) => [
      `Deleted ${email}`,
      ...prev,
    ]);

  };

  const exportReport = () => {

    const report = {
      totalUsers,
      activeUsers,
      blockedUsers,
      revenue,
      visitors,
      users,
    };

    const blob = new Blob(
      [JSON.stringify(report, null, 2)],
      {
        type: "application/json",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;
    a.download =
      "enkonix-dashboard-report.json";

    a.click();

  };

  const userGrowthData = [
    { month: "Jan", users: 12 },
    { month: "Feb", users: 22 },
    { month: "Mar", users: 40 },
    { month: "Apr", users: 60 },
    { month: "May", users: 85 },
    { month: "Jun", users: totalUsers },
  ];

  const servicesData = [
    {
      name: "AI",
      value: totalUsers * 2,
    },
    {
      name: "Cloud",
      value: totalUsers + 8,
    },
    {
      name: "Security",
      value: 95,
    },
    {
      name: "Apps",
      value: visitors / 100,
    },
  ];

  const statusData = [
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

    <div className="
      min-h-screen
      bg-gray-100
      dark:bg-[#020817]
      text-black
      dark:text-white
      transition-all duration-300
    ">

      <Navbar />

      <div className="pt-[130px] px-8 pb-10">

        {/* TOP HEADER */}

        <div className="
          flex flex-col xl:flex-row
          items-start xl:items-center
          justify-between
          gap-6
          mb-12
        ">

          <div>

            <h1 className="
              text-7xl
              font-black
              mb-4
            ">
              Admin Dashboard
            </h1>

            <p className="
              text-gray-600
              dark:text-gray-400
              text-2xl
            ">
             Welcome back Admin
            </p>

          </div>

          <div className="
            flex flex-wrap gap-4
          ">

            <button
              onClick={exportReport}
              className="
                px-7 py-4
                rounded-2xl
                bg-cyan-100
                dark:bg-cyan-500/20
                border border-cyan-300
                dark:border-cyan-500/20
                text-cyan-700
                dark:text-cyan-300
                font-bold
                flex items-center gap-3
                hover:scale-105
                transition-all duration-300
              "
            >

              <FaDownload />

              Export Report

            </button>

            <button
              className="
                px-7 py-4
                rounded-2xl
                bg-pink-100
                dark:bg-pink-500/20
                border border-pink-300
                dark:border-pink-500/20
                text-pink-700
                dark:text-pink-300
                font-bold
                flex items-center gap-3
                hover:scale-105
                transition-all duration-300
              "
            >

              <FaBell />

             

            </button>

          </div>

        </div>

        {/* TOP STATS */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-5
          gap-8
          mb-10
        ">

          <StatsCard
            title="Total Users"
            value={totalUsers}
            icon={<FaUsers />}
          />

          <StatsCard
            title="Active Users"
            value={activeUsers}
            icon={<FaUserCheck />}
          />

          <StatsCard
            title="Blocked Users"
            value={blockedUsers}
            icon={<FaUserSlash />}
          />

          <StatsCard
            title="Revenue"
            value={`$${revenue}`}
            icon={<FaDollarSign />}
          />

          <StatsCard
            title="Growth"
            value={`${growth}%`}
            icon={<FaChartLine />}
          />

        </div>

        {/* SECOND ROW */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-8
          mb-10
        ">

          <MiniCard
            title="Visitors"
            value={`${visitors}+`}
            icon={<FaEye />}
          />

          <MiniCard
            title="Online Users"
            value={onlineUsers}
            icon={<FaUserClock />}
          />

          <MiniCard
            title="Cloud Servers"
            value="12"
            icon={<FaCloud />}
          />

          <MiniCard
            title="AI Requests"
            value="9.8K"
            icon={<FaRobot />}
          />

        </div>

        {/* CHARTS */}

        <div className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-8
          mb-10
        ">

          {/* USER GROWTH */}

          <div className="
            xl:col-span-2
            bg-white
            dark:bg-[#081225]
            border border-cyan-200
            dark:border-cyan-500/20
            rounded-[32px]
            p-8
            shadow-lg
          ">

            <h2 className="
              text-4xl font-black mb-8
            ">
              User Growth Analytics
            </h2>

            <div className="h-[350px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <AreaChart data={userGrowthData}>

                  <defs>

                    <linearGradient
                      id="colorUsers"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >

                      <stop
                        offset="5%"
                        stopColor="#06b6d4"
                        stopOpacity={0.8}
                      />

                      <stop
                        offset="95%"
                        stopColor="#06b6d4"
                        stopOpacity={0}
                      />

                    </linearGradient>

                  </defs>

                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#1e293b"
                  />

                  <XAxis
                    dataKey="month"
                    stroke="#94a3b8"
                  />

                  <YAxis
                    stroke="#94a3b8"
                  />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="users"
                    stroke="#06b6d4"
                    fillOpacity={1}
                    fill="url(#colorUsers)"
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* PIE */}

          <div className="
            bg-white
            dark:bg-[#081225]
            border border-cyan-200
            dark:border-cyan-500/20
            rounded-[32px]
            p-8
            shadow-lg
          ">

            <h2 className="
              text-4xl font-black mb-8
            ">
              User Status
            </h2>

            <div className="h-[350px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <PieChart>

                  <Pie
                    data={statusData}
                    dataKey="value"
                    outerRadius={120}
                  >

                    {statusData.map(
                      (entry, index) => (

                        <Cell
                          key={index}
                          fill={COLORS[index]}
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

        {/* SERVICES + ACTIVITIES */}

        <div className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-8
          mb-10
        ">

          <div className="
            xl:col-span-2
            bg-white
            dark:bg-[#081225]
            border border-cyan-200
            dark:border-cyan-500/20
            rounded-[32px]
            p-8
            shadow-lg
          ">

            <h2 className="
              text-4xl font-black mb-8
            ">
              Service Performance
            </h2>

            <div className="h-[350px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <BarChart data={servicesData}>

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

                  <Bar
                    dataKey="value"
                    fill="#06b6d4"
                    radius={[10, 10, 0, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* ACTIVITIES */}

          <div className="
            bg-white
            dark:bg-[#081225]
            border border-cyan-200
            dark:border-cyan-500/20
            rounded-[32px]
            p-8
            shadow-lg
          ">

            <h2 className="
              text-4xl font-black mb-8
            ">
              Recent Activities
            </h2>

            <div className="
              space-y-4
            ">

              {recentActivities.map(
                (activity, index) => (

                  <div
                    key={index}
                    className="
                      bg-gray-100
                      dark:bg-[#0f172a]
                      border border-cyan-200
                      dark:border-cyan-500/10
                      rounded-2xl
                      p-5
                    "
                  >

                    {activity}

                  </div>

                )
              )}

            </div>

          </div>

        </div>

        {/* USERS TABLE */}

        <div className="
          bg-white
          dark:bg-[#081225]
          border border-cyan-200
          dark:border-cyan-500/20
          rounded-[32px]
          overflow-hidden
          shadow-lg
        ">

          <div className="
            p-8
            border-b border-cyan-200
            dark:border-cyan-500/10
            flex flex-col xl:flex-row
            items-start xl:items-center
            justify-between
            gap-5
          ">

            <div>

              <h2 className="
                text-4xl font-black mb-2
              ">
                Registered Users
              </h2>

              <p className="
                text-gray-600
                dark:text-gray-400
              ">
                Manage all users
              </p>

            </div>

            {/* SEARCH */}

            <div className="
              relative
              w-full xl:w-[320px]
            ">

              <FaSearch
                className="
                  absolute left-5 top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                  w-full
                  bg-gray-100
                  dark:bg-[#0f172a]
                  border border-cyan-200
                  dark:border-cyan-500/10
                  rounded-2xl
                  pl-14 pr-5 py-4
                  outline-none
                "
              />

            </div>

          </div>

          <div className="
            overflow-x-auto
          ">

            <table className="
              w-full
            ">

              <thead className="
                bg-gray-100
                dark:bg-[#0f172a]
              ">

                <tr>

                  <th className="text-left p-6">
                    Name
                  </th>

                  <th className="text-left p-6">
                    Email
                  </th>

                  <th className="text-left p-6">
                    Status
                  </th>

                  <th className="text-left p-6">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredUsers.map(
                  (user, index) => (

                    <tr
                      key={index}
                      className="
                        border-t
                        border-cyan-200
                        dark:border-cyan-500/10
                      "
                    >

                      <td className="p-6">
                        {user.name || "User"}
                      </td>

                      <td className="p-6">
                        {user.email}
                      </td>

                      <td className="p-6">

                        {user.blocked ? (

                          <span className="
                            text-red-500 font-bold
                          ">
                            Blocked
                          </span>

                        ) : (

                          <span className="
                            text-green-500 font-bold
                          ">
                            Active
                          </span>

                        )}

                      </td>

                      <td className="
                        p-6 flex gap-4
                      ">

                        <button
                          onClick={() =>
                            toggleBlock(user.email)
                          }
                          className={`
                            px-5 py-3 rounded-2xl
                            font-bold flex items-center gap-3
                            transition-all duration-300
                            ${
                              user.blocked
                                ? "bg-green-500 text-black"
                                : "bg-yellow-400 text-black"
                            }
                          `}
                        >

                          {user.blocked ? (
                            <>
                              <FaCheck />
                              Unblock
                            </>
                          ) : (
                            <>
                              <FaBan />
                              Block
                            </>
                          )}

                        </button>

                        <button
                          onClick={() =>
                            deleteUser(user.email)
                          }
                          className="
                            px-5 py-3
                            rounded-2xl
                            bg-red-500
                            text-white
                            font-bold
                            flex items-center gap-3
                            hover:scale-105
                            transition-all duration-300
                          "
                        >

                          <FaTrash />

                          Delete

                        </button>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  );

}

function StatsCard({
  title,
  value,
  icon,
}) {

  return (

    <div className="
      bg-white
      dark:bg-[#081225]
      border border-cyan-200
      dark:border-cyan-500/20
      rounded-[32px]
      p-8
      shadow-lg
      hover:-translate-y-2
      transition-all duration-300
    ">

      <div className="
        flex items-center justify-between
      ">

        <div>

          <p className="
            text-gray-600
            dark:text-gray-400
            text-xl mb-4
          ">
            {title}
          </p>

          <h2 className="
            text-5xl font-black
          ">
            {value}
          </h2>

        </div>

        <div className="
          w-24 h-24
          rounded-3xl
          bg-cyan-100
          dark:bg-cyan-500/20
          flex items-center justify-center
          text-cyan-500
          text-4xl
        ">

          {icon}

        </div>

      </div>

    </div>

  );

}

function MiniCard({
  title,
  value,
  icon,
}) {

  return (

    <div className="
      bg-white
      dark:bg-[#081225]
      border border-cyan-200
      dark:border-cyan-500/20
      rounded-[28px]
      p-6
      shadow-lg
      hover:-translate-y-2
      transition-all duration-300
    ">

      <div className="
        flex items-center justify-between
      ">

        <div>

          <p className="
            text-gray-600
            dark:text-gray-400
            mb-3
          ">
            {title}
          </p>

          <h2 className="
            text-4xl font-black
          ">
            {value}
          </h2>

        </div>

        <div className="
          text-cyan-500
          text-3xl
        ">

          {icon}

        </div>

      </div>

    </div>

  );

}