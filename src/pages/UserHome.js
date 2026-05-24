import React, {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useLanguage,
} from "../context/LanguageContext";

import {
  useTheme,
} from "../context/ThemeContext";

import GlobalLayout from "../components/GlobalLayout";

import {
  ShieldCheck,
  CalendarDays,
  Clock3,
  Edit,
} from "lucide-react";

export default function UserHome() {

  const navigate = useNavigate();

  const {
    translations = {},
    isRTL,
  } = useLanguage();

  const {
    theme,
  } = useTheme();

  const darkMode =
    theme === "dark";

  const [user, setUser] =
    useState(null);

  useEffect(() => {

    const loggedInUser =
      localStorage.getItem(
        "loggedInUser"
      );

    if (!loggedInUser) {

      navigate("/login");
      return;

    }

    const storedUser =
      JSON.parse(
        localStorage.getItem(
          loggedInUser
        )
      );

    if (!storedUser) {

      navigate("/login");
      return;

    }

    if (storedUser.blocked) {

      alert(
        translations?.accountBlocked ||
        "Your account has been blocked"
      );

      localStorage.removeItem(
        "isUser"
      );

      localStorage.removeItem(
        "loggedInUser"
      );

      navigate("/login");

      return;

    }

    setUser(storedUser);

  }, [
    navigate,
    translations,
  ]);

  if (!user)
    return null;

  return (

    <GlobalLayout>

      <div
        dir={isRTL ? "rtl" : "ltr"}
        className={`
          min-h-screen
          px-4
          sm:px-6
          lg:px-10
          py-10
          transition-all
          duration-500
          overflow-x-hidden
          ${
            darkMode
              ? "bg-[#020617] text-white"
              : "bg-gray-100 text-black"
          }
          ${
            isRTL
              ? "text-right"
              : "text-left"
          }
        `}
      >

        {/* HEADER */}

        <div className="mb-12">

          <h1 className="text-4xl md:text-6xl font-black leading-tight">

            Welcome Back,{" "}

            <span className="
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              text-transparent
              bg-clip-text
            ">

              {user.name}

            </span>

          </h1>

          <p className={`
            mt-4
            text-lg
            ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }
          `}>

            Manage your profile and account settings.

          </p>

        </div>

        {/* PROFILE */}

        <div className={`
          rounded-[35px]
          p-8
          mb-12
          border
          transition-all
          duration-300
          ${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-white border-gray-200 shadow-lg"
          }
        `}>

          <div className="
            flex
            flex-col
            md:flex-row
            items-center
            md:items-start
            gap-8
          ">

            <div
              className="
                w-32
                h-32
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                flex
                items-center
                justify-center
                text-5xl
                font-black
                text-white
                shadow-2xl
              "
            >

              {user.name
                ?.charAt(0)
                ?.toUpperCase()}

            </div>

            <div className="flex-1">

              <h2 className="text-4xl font-bold mb-4">

                {user.name}

              </h2>

              <p className={`
                text-lg
                mb-6
                ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }
              `}>

                {user.email}

              </p>

              <span className="
                px-5
                py-2
                rounded-full
                bg-green-500/20
                text-green-400
                border
                border-green-500/20
              ">

                Active User

              </span>

            </div>

          </div>

        </div>

        {/* STATS */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6
          mb-12
        ">

          <StatCard
            darkMode={darkMode}
            title="Account"
            value="Active"
            icon={<ShieldCheck />}
          />

          <StatCard
            darkMode={darkMode}
            title="Registered"
            value={
              user.registeredAt ||
              "2026"
            }
            icon={<CalendarDays />}
          />

          <StatCard
            darkMode={darkMode}
            title="Last Login"
            value={
              user.lastLogin ||
              "Today"
            }
            icon={<Clock3 />}
          />

          <StatCard
            darkMode={darkMode}
            title="Plan"
            value="Premium"
            icon={<ShieldCheck />}
          />

        </div>

        {/* QUICK ACTIONS */}

        <div className={`
          rounded-[35px]
          p-8
          border
          transition-all
          duration-300
          ${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-white border-gray-200 shadow-lg"
          }
        `}>

          <h2 className="text-3xl font-bold mb-10">

            Quick Actions

          </h2>

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-6
          ">

            <ActionCard
              darkMode={darkMode}
              icon={<Edit />}
              title="Edit Profile"
              onClick={() =>
                alert(
                  "Profile Editing Coming Soon"
                )
              }
            />

            <ActionCard
              darkMode={darkMode}
              icon={<ShieldCheck />}
              title="Account Status"
              onClick={() =>
                alert(
                  "Your Account is Active"
                )
              }
            />

          </div>

        </div>

      </div>

    </GlobalLayout>

  );

}

/* STAT CARD */

function StatCard({
  title,
  value,
  icon,
  darkMode,
}) {

  return (

    <div className={`
      rounded-[30px]
      p-6
      border
      transition-all
      duration-300
      hover:-translate-y-1
      ${
        darkMode
          ? "bg-white/5 border-white/10"
          : "bg-white border-gray-200 shadow-lg"
      }
    `}>

      <div className="
        flex
        items-center
        justify-between
        mb-5
      ">

        <p className={`
          ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }
        `}>

          {title}

        </p>

        <div className="
          w-14
          h-14
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-500
          flex
          items-center
          justify-center
          text-white
        ">

          {icon}

        </div>

      </div>

      <h2 className="text-3xl font-bold">

        {value}

      </h2>

    </div>

  );

}

/* ACTION CARD */

function ActionCard({
  icon,
  title,
  onClick,
  darkMode,
}) {

  return (

    <button
      onClick={onClick}
      className={`
        rounded-3xl
        p-8
        transition-all
        duration-300
        flex
        flex-col
        items-center
        justify-center
        gap-5
        hover:-translate-y-1
        border
        ${
          darkMode
            ? "bg-white/5 border-white/10 hover:bg-white/10"
            : "bg-white border-gray-200 hover:bg-gray-100 shadow-lg"
        }
      `}
    >

      <div className="
        w-16
        h-16
        rounded-2xl
        bg-gradient-to-r
        from-cyan-500
        to-blue-500
        flex
        items-center
        justify-center
        text-white
      ">

        {icon}

      </div>

      <h3 className="text-lg font-semibold">

        {title}

      </h3>

    </button>

  );

}