import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import Navbar from "../components/Navbar";

import {
  useLanguage,
} from "../context/LanguageContext";

import translationsData from "../utils/translations";

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
  FaServer,
  FaGlobe,
  FaShieldAlt,
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

  const {
    language,
    isRTL,
  } = useLanguage();

  const t =
    translationsData[language];

  const [users, setUsers] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [
    recentActivities,
    setRecentActivities,
  ] = useState([]);

  const [
    notifications,
    setNotifications,
  ] = useState([]);

  const [
    onlineUsers,
    setOnlineUsers,
  ] = useState(0);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {

    const allUsers = [];

    Object.keys(localStorage).forEach(
      (key) => {

        const ignored = [
          "isAdmin",
          "isUser",
          "loggedInUser",
          "theme",
          "language",
        ];

        if (
          ignored.includes(key)
        )
          return;

        try {

          const user =
            JSON.parse(
              localStorage.getItem(
                key
              )
            );

          if (
            user &&
            user.email &&
            user.password
          ) {

            allUsers.push({
              ...user,
              joined:
                user.joined ||
                new Date().toLocaleDateString(),
            });

          }

        } catch {}

      }
    );

    setUsers(allUsers);

    setOnlineUsers(
      Math.floor(
        allUsers.length * 0.7
      )
    );

    setNotifications([
      t.securityAlert ||
        "Security Alert",
      t.newUserJoined ||
        "New User Joined",
      t.serverRunning ||
        "Servers Running",
    ]);

    setRecentActivities([
      t.aiAnalyticsUpdated ||
        "AI Analytics Updated",

      t.cloudInfrastructureSynced ||
        "Cloud Infrastructure Synced",

      t.newUserRegistered ||
        "New User Registered",

      t.securityScanCompleted ||
        "Security Scan Completed",

      t.adminLoggedIn ||
        "Admin Logged In",
    ]);

  };

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

  const revenue =
    totalUsers * 1500;

  const visitors =
    totalUsers * 320;

  const growth =
    totalUsers > 0
      ? Math.round(
          (activeUsers /
            totalUsers) *
            100
        )
      : 0;

  const filteredUsers =
    useMemo(() => {

      return users.filter((u) =>
        u.email
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
      );

    }, [users, search]);

  const toggleBlock = (
    email
  ) => {

    const updated = users.map(
      (u) => {

        if (u.email === email) {

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

          setRecentActivities(
            (prev) => [
              `${
                updatedUser.blocked
                  ? t.blocked ||
                    "Blocked"
                  : t.unblock ||
                    "Unblock"
              } ${email}`,
              ...prev,
            ]
          );

          return updatedUser;
        }

        return u;

      }
    );

    setUsers(updated);

  };

  const deleteUser = (
    email
  ) => {

    localStorage.removeItem(
      email
    );

    setUsers(
      users.filter(
        (u) =>
          u.email !== email
      )
    );

    setRecentActivities(
      (prev) => [
        `${t.delete || "Delete"} ${email}`,
        ...prev,
      ]
    );

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
      [
        JSON.stringify(
          report,
          null,
          2
        ),
      ],
      {
        type: "application/json",
      }
    );

    const url =
      URL.createObjectURL(
        blob
      );

    const a =
      document.createElement(
        "a"
      );

    a.href = url;

    a.download =
      "enkonix-dashboard-report.json";

    a.click();

  };

  const userGrowthData = [
    {
      month: "Jan",
      users: 12,
    },
    {
      month: "Feb",
      users: 22,
    },
    {
      month: "Mar",
      users: 40,
    },
    {
      month: "Apr",
      users: 60,
    },
    {
      month: "May",
      users: 85,
    },
    {
      month: "Jun",
      users: totalUsers,
    },
  ];

  const statusData = [
    {
      name:
        t.active ||
        "Active",
      value:
        activeUsers,
    },
    {
      name:
        t.blocked ||
        "Blocked",
      value:
        blockedUsers,
    },
  ];

  const COLORS = [
    "#06b6d4",
    "#ef4444",
  ];

  return (

    <div
      dir={
        isRTL
          ? "rtl"
          : "ltr"
      }
      className="
        min-h-screen
        bg-gray-100
        dark:bg-[#020817]
        text-black
        dark:text-white
        transition-all duration-300
      "
    >

      <Navbar />

      <div className="pt-[120px] px-6 lg:px-10 pb-12">

        {/* HEADER */}

        <div className={`
          flex flex-col xl:flex-row
          justify-between
          items-start xl:items-center
          gap-6 mb-10
          ${
            isRTL
              ? "text-right"
              : "text-left"
          }
        `}>

          <div>

            <h1 className="
              text-5xl md:text-7xl
              font-black mb-4
            ">

              {t.adminDashboard ||
                "Admin Dashboard"}

            </h1>

            <p className="
              text-xl
              text-gray-600
              dark:text-gray-400
            ">

              {t.welcomeBackAdmin ||
                "Welcome back Admin"}

            </p>

          </div>

          <div className={`
            flex flex-wrap gap-4
            ${
              isRTL
                ? "justify-end"
                : ""
            }
          `}>

            <button
              onClick={exportReport}
              className={`
                px-6 py-4
                rounded-2xl
                bg-cyan-500
                text-white
                font-bold
                flex items-center gap-3
                hover:scale-105
                transition-all
                ${
                  isRTL
                    ? "flex-row-reverse"
                    : ""
                }
              `}
            >

              <FaDownload />

              {t.exportReport ||
                "Export Report"}

            </button>

            <button className={`
              px-6 py-4
              rounded-2xl
              bg-pink-500
              text-white
              font-bold
              flex items-center gap-3
              ${
                isRTL
                  ? "flex-row-reverse"
                  : ""
              }
            `}>

              <FaBell />

              {
                notifications.length
              }

            </button>

          </div>

        </div>

        {/* STATS */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-5
          gap-6 mb-10
        ">

          <StatsCard
            title={
              t.totalUsers ||
              "Total Users"
            }
            value={totalUsers}
            icon={<FaUsers />}
          />

          <StatsCard
            title={
              t.activeUsers ||
              "Active Users"
            }
            value={activeUsers}
            icon={<FaUserCheck />}
          />

          <StatsCard
            title={
              t.blockedUsers ||
              "Blocked Users"
            }
            value={blockedUsers}
            icon={<FaUserSlash />}
          />

          

          <StatsCard
            title={
              t.growth ||
              "Growth"
            }
            value={`${growth}%`}
            icon={<FaChartLine />}
          />

        </div>

       

        {/* CHARTS */}

        <div className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-8 mb-10
        ">

          {/* AREA CHART */}

          <div className="
            bg-white
            dark:bg-[#081225]
            rounded-[32px]
            p-8
            shadow-xl
          ">

            <h2 className="
              text-3xl
              font-black
              mb-8
            ">

              {t.userGrowthAnalytics ||
                "User Growth Analytics"}

            </h2>

            <ResponsiveContainer
              width="100%"
              height={320}
            >

              <AreaChart
                data={
                  userGrowthData
                }
              >

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
                      stopOpacity={
                        0.8
                      }
                    />

                    <stop
                      offset="95%"
                      stopColor="#06b6d4"
                      stopOpacity={
                        0
                      }
                    />

                  </linearGradient>

                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="month"
                />

                <YAxis />

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

          {/* PIE CHART */}

          <div className="
            bg-white
            dark:bg-[#081225]
            rounded-[32px]
            p-8
            shadow-xl
          ">

            <h2 className="
              text-3xl
              font-black
              mb-8
            ">

              {t.userStatus ||
                "User Status"}

            </h2>

            <ResponsiveContainer
              width="100%"
              height={320}
            >

              <PieChart>

                <Pie
                  data={
                    statusData
                  }
                  dataKey="value"
                  outerRadius={
                    120
                  }
                  label
                >

                  {statusData.map(
                    (
                      entry,
                      index
                    ) => (

                      <Cell
                        key={`cell-${index}`}
                        fill={
                          COLORS[
                            index %
                              COLORS.length
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

        {/* USERS TABLE */}

        <div className="
          bg-white
          dark:bg-[#081225]
          rounded-[32px]
          p-8
          shadow-xl
        ">

          <div className={`
            flex flex-col xl:flex-row
            justify-between
            items-start xl:items-center
            gap-6 mb-8
            ${
              isRTL
                ? "text-right"
                : "text-left"
            }
          `}>

            <div>

              <h2 className="
                text-4xl
                font-black
                mb-2
              ">

                {t.registeredUsers ||
                  "Registered Users"}

              </h2>

              <p className="
                text-gray-600
                dark:text-gray-400
              ">

                {t.manageAllUsers ||
                  "Manage all users"}

              </p>

            </div>

            <div className="
              relative
              w-full
              xl:w-[350px]
            ">

              <FaSearch
                className={`
                  absolute
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                  ${
                    isRTL
                      ? "right-5"
                      : "left-5"
                  }
                `}
              />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                placeholder={
                  t.searchUsers ||
                  "Search users..."
                }
                className={`
                  w-full
                  py-4
                  rounded-2xl
                  bg-gray-100
                  dark:bg-[#0f172a]
                  border
                  border-gray-200
                  dark:border-white/10
                  outline-none
                  ${
                    isRTL
                      ? "pr-14 pl-5 text-right"
                      : "pl-14 pr-5 text-left"
                  }
                `}
              />

            </div>

          </div>

          <div className="overflow-x-auto">

            <table className="
              w-full
              min-w-[900px]
            ">

              <thead>

                <tr className="
                  border-b
                  border-gray-200
                  dark:border-white/10
                ">

                  <th className="py-5">
                    {t.name || "Name"}
                  </th>

                  <th className="py-5">
                    {t.email || "Email"}
                  </th>

                  <th className="py-5">
                    {t.status || "Status"}
                  </th>

                  <th className="py-5">
                    Joined
                  </th>

                  <th className="py-5">
                    {t.actions || "Actions"}
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
                      className="
                        border-b
                        border-gray-100
                        dark:border-white/5
                      "
                    >

                      <td className="py-5 font-bold">

                        {
                          user.name ||
                          "User"
                        }

                      </td>

                      <td className="py-5">

                        {user.email}

                      </td>

                      <td className="py-5">

                        <span className={`
                          px-4 py-2
                          rounded-full
                          text-sm
                          font-bold
                          ${
                            user.blocked
                              ? "bg-red-500/20 text-red-400"
                              : "bg-green-500/20 text-green-400"
                          }
                        `}>

                          {user.blocked
                            ? t.blocked ||
                              "Blocked"
                            : t.active ||
                              "Active"}

                        </span>

                      </td>

                      <td className="py-5">

                        {
                          user.joined
                        }

                      </td>

                      <td className="py-5">

                        <div className={`
                          flex gap-3
                          ${
                            isRTL
                              ? "justify-end"
                              : ""
                          }
                        `}>

                          <button
                            onClick={() =>
                              toggleBlock(
                                user.email
                              )
                            }
                            className={`
                              px-5 py-3
                              rounded-xl
                              text-white
                              font-bold
                              flex items-center gap-2
                              ${
                                user.blocked
                                  ? "bg-green-500"
                                  : "bg-blue-500"
                              }
                            `}
                          >

                            {user.blocked ? (
                              <FaCheck />
                            ) : (
                              <FaBan />
                            )}

                            {user.blocked
                              ? t.unblock ||
                                "Unblock"
                              : t.block ||
                                "Block"}

                          </button>

                          <button
                            onClick={() =>
                              deleteUser(
                                user.email
                              )
                            }
                            className="
                              px-5 py-3
                              rounded-xl
                              bg-red-500
                              text-white
                              font-bold
                              flex items-center gap-2
                            "
                          >

                            <FaTrash />

                            {t.delete ||
                              "Delete"}

                          </button>

                        </div>

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
      rounded-[30px]
      p-7
      shadow-xl
      hover:-translate-y-2
      transition-all duration-300
    ">

      <div className="
        flex items-center justify-between
      ">

        <div>

          <p className="
            text-gray-500
            mb-3
          ">
            {title}
          </p>

          <h2 className="
            text-5xl
            font-black
          ">

            {value}

          </h2>

        </div>

        <div className="
          w-20 h-20
          rounded-3xl
          bg-cyan-500/20
          flex items-center justify-center
          text-cyan-400
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
      rounded-[30px]
      p-7
      shadow-xl
      hover:-translate-y-2
      transition-all duration-300
    ">

      <div className="
        flex items-center gap-5
      ">

        <div className="
          w-16 h-16
          rounded-2xl
          bg-pink-500/20
          flex items-center justify-center
          text-pink-400
          text-3xl
        ">

          {icon}

        </div>

        <div>

          <h3 className="
            text-3xl
            font-black
          ">

            {value}

          </h3>

          <p className="
            text-gray-500
          ">

            {title}

          </p>

        </div>

      </div>

    </div>

  );

}