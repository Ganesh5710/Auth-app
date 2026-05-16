import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  UserCircle2,
  Bell,
  Activity,
  ShieldCheck,
  CalendarDays,
  Clock3,
  LogOut,
  Edit,
  Lock,
  Mail,
  BadgeCheck,
  X,
} from "lucide-react";

export default function UserHome() {

  const navigate = useNavigate();

  const [user, setUser] =
    useState(null);

  const [notifications, setNotifications] =
    useState([]);

  const [showPasswordModal,
    setShowPasswordModal] =
    useState(false);

  const [showProfileModal,
    setShowProfileModal] =
    useState(false);

  const [newPassword,
    setNewPassword] =
    useState("");

  const [editName,
    setEditName] =
    useState("");

  // LOAD USER

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

    // BLOCK CHECK

    if (storedUser.blocked) {

      alert(
        "Your account has been blocked by admin"
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

    setEditName(
      storedUser.name
    );

    // LOAD NOTIFICATIONS

    const savedNotifications =
      JSON.parse(
        localStorage.getItem(
          `${loggedInUser}_notifications`
        )
      ) || [];

    setNotifications(
      savedNotifications
    );

  }, [navigate]);

  // SAVE NOTIFICATION

  const addNotification = (
    message
  ) => {

    const loggedInUser =
      localStorage.getItem(
        "loggedInUser"
      );

    const updatedNotifications = [

      {
        message,
        time:
          new Date().toLocaleString(),
      },

      ...notifications,
    ];

    setNotifications(
      updatedNotifications
    );

    localStorage.setItem(
      `${loggedInUser}_notifications`,
      JSON.stringify(
        updatedNotifications
      )
    );
  };

  // LOGOUT

  const handleLogout = () => {

    const loggedInUser =
      localStorage.getItem(
        "loggedInUser"
      );

    const storedUser =
      JSON.parse(
        localStorage.getItem(
          loggedInUser
        )
      );

    if (storedUser) {

      storedUser.lastLogout =
        new Date().toLocaleString();

      localStorage.setItem(
        loggedInUser,
        JSON.stringify(storedUser)
      );
    }

    addNotification(
      "Logged out from account"
    );

    localStorage.removeItem(
      "isUser"
    );

    localStorage.removeItem(
      "loggedInUser"
    );

    navigate("/login");
  };

  // CHANGE PASSWORD

  const handlePasswordChange =
    () => {

      if (!newPassword) {

        alert(
          "Enter new password"
        );

        return;
      }

      const loggedInUser =
        localStorage.getItem(
          "loggedInUser"
        );

      const storedUser =
        JSON.parse(
          localStorage.getItem(
            loggedInUser
          )
        );

      storedUser.password =
        newPassword;

      localStorage.setItem(
        loggedInUser,
        JSON.stringify(
          storedUser
        )
      );

      setUser(storedUser);

      addNotification(
        "Password changed successfully"
      );

      alert(
        "Password Updated"
      );

      setShowPasswordModal(
        false
      );

      setNewPassword("");
    };

  // EDIT PROFILE

  const handleProfileUpdate =
    () => {

      const loggedInUser =
        localStorage.getItem(
          "loggedInUser"
        );

      const storedUser =
        JSON.parse(
          localStorage.getItem(
            loggedInUser
          )
        );

      storedUser.name =
        editName;

      localStorage.setItem(
        loggedInUser,
        JSON.stringify(
          storedUser
        )
      );

      setUser(storedUser);

      addNotification(
        "Profile updated successfully"
      );

      alert(
        "Profile Updated"
      );

      setShowProfileModal(
        false
      );
    };

  if (!user) return null;

  return (

    <div className="min-h-screen bg-[#020617] text-white p-4 sm:p-6 lg:p-10">

      {/* TOPBAR */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <h1 className="text-3xl sm:text-5xl font-bold">

            Welcome Back,
            {" "}
            {user.name} 

          </h1>

         

        </div>

        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-pink-500 px-6 py-4 rounded-2xl font-bold"
        >

          <LogOut size={22} />

          Logout

        </button>

      </div>

      {/* PROFILE + NOTIFICATIONS */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10">

        {/* PROFILE */}

        <div className="xl:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">

            <div className="w-28 h-28 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center text-5xl font-bold">

              {user.name
                ?.charAt(0)
                ?.toUpperCase()}

            </div>

            <div className="flex-1">

              <h2 className="text-3xl font-bold">

                {user.name}

              </h2>

              <p className="text-gray-400 mt-2">

                {user.email}

              </p>

              <div className="mt-5 flex flex-wrap gap-3">

                <span className="px-4 py-2 rounded-xl bg-green-500/20 text-green-400 flex items-center gap-2">

                  <ShieldCheck size={18} />

                  Active Account

                </span>

                <span className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center gap-2">

                  <BadgeCheck size={18} />

                  Verified User

                </span>

              </div>

            </div>

          </div>

        </div>

        {/* NOTIFICATIONS */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-6">

            <Bell size={24} />

            <h2 className="text-2xl font-bold">

              Notifications

            </h2>

          </div>

          <div className="space-y-4 max-h-[350px] overflow-auto">

            {notifications.length >
            0 ? (

              notifications.map(
                (
                  note,
                  index
                ) => (

                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10"
                  >

                    <p>
                      {
                        note.message
                      }
                    </p>

                    <p className="text-sm text-gray-400 mt-2">

                      {note.time}

                    </p>

                  </div>

                )
              )

            ) : (

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">

                No notifications

              </div>

            )}

          </div>

        </div>

      </div>

      {/* ANALYTICS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        <StatCard
          title="Account Status"
          value="Active"
          icon={<ShieldCheck />}
        />

        <StatCard
          title="Registered"
          value={
            user.registeredAt
              ?.split(",")[0]
          }
          icon={<CalendarDays />}
        />

        <StatCard
          title="Last Login"
          value={
            user.lastLogin
              ?.split(",")[0]
          }
          icon={<Clock3 />}
        />

        <StatCard
          title="Security"
          value="Protected"
          icon={<Lock />}
        />

      </div>

      {/* QUICK ACTIONS */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

        {/* PROFILE */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">

          <h2 className="text-3xl font-bold mb-8">

            Profile Details

          </h2>

          <div className="space-y-5">

            <ProfileItem
              icon={<UserCircle2 />}
              title="Full Name"
              value={user.name}
            />

            <ProfileItem
              icon={<Mail />}
              title="Email"
              value={user.email}
            />

            <ProfileItem
              icon={<Lock />}
              title="Security Question"
              value={
                user.securityQuestion ||
                "Not Available"
              }
            />

            <ProfileItem
              icon={<Activity />}
              title="Last Logout"
              value={
                user.lastLogout ||
                "Never"
              }
            />

          </div>

        </div>

        {/* ACTIONS */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">

          <h2 className="text-3xl font-bold mb-8">

            Quick Actions

          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <ActionCard
              icon={<Edit />}
              title="Edit Profile"
              onClick={() =>
                setShowProfileModal(
                  true
                )
              }
            />

            

            <ActionCard
              icon={<Bell />}
              title="Notifications"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior:
                    "smooth",
                })
              }
            />

            <ActionCard
              icon={<Activity />}
              title="Activity Logs"
              onClick={() =>
                addNotification(
                  "Viewed activity logs"
                )
              }
            />

          </div>

        </div>

      </div>

      {/* TIMELINE */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">

        <h2 className="text-3xl font-bold mb-8">

          Recent Activity

        </h2>

        <div className="space-y-5">

          <TimelineItem
            text="Logged into account"
            time={user.lastLogin}
          />

          <TimelineItem
            text="Account created"
            time={user.registeredAt}
          />

          <TimelineItem
            text="Last logout"
            time={user.lastLogout}
          />

        </div>

      </div>

      {/* PASSWORD MODAL */}

      {showPasswordModal && (

        <Modal
          title="Change Password"
          onClose={() =>
            setShowPasswordModal(
              false
            )
          }
        >

          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) =>
              setNewPassword(
                e.target.value
              )
            }
            className="w-full bg-[#0F172A] border border-white/10 p-4 rounded-2xl outline-none mb-6"
          />

          <button
            onClick={
              handlePasswordChange
            }
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 font-bold"
          >

            Update Password

          </button>

        </Modal>

      )}

      {/* PROFILE MODAL */}

      {showProfileModal && (

        <Modal
          title="Edit Profile"
          onClose={() =>
            setShowProfileModal(
              false
            )
          }
        >

          <input
            type="text"
            value={editName}
            onChange={(e) =>
              setEditName(
                e.target.value
              )
            }
            className="w-full bg-[#0F172A] border border-white/10 p-4 rounded-2xl outline-none mb-6"
          />

          <button
            onClick={
              handleProfileUpdate
            }
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 font-bold"
          >

            Save Changes

          </button>

        </Modal>

      )}

    </div>

  );
}

/* MODAL */

function Modal({
  title,
  children,
  onClose,
}) {

  return (

    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

      <div className="bg-[#111827] border border-white/10 rounded-3xl p-8 w-full max-w-md relative">

        <button
          onClick={onClose}
          className="absolute top-5 right-5"
        >

          <X size={24} />

        </button>

        <h2 className="text-3xl font-bold mb-8">

          {title}

        </h2>

        {children}

      </div>

    </div>

  );
}

/* STAT CARD */

function StatCard({
  title,
  value,
  icon,
}) {

  return (

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

      <div className="flex items-center justify-between mb-5">

        <p className="text-gray-400">

          {title}

        </p>

        <div className="p-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500">

          {icon}

        </div>

      </div>

      <h2 className="text-2xl font-bold break-words">

        {value}

      </h2>

    </div>

  );
}

/* PROFILE ITEM */

function ProfileItem({
  icon,
  title,
  value,
}) {

  return (

    <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">

      <div className="p-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500">

        {icon}

      </div>

      <div>

        <p className="text-gray-400 text-sm">

          {title}

        </p>

        <h3 className="font-semibold break-words">

          {value}

        </h3>

      </div>

    </div>

  );
}

/* ACTION CARD */

function ActionCard({
  icon,
  title,
  onClick,
}) {

  return (

    <button
      onClick={onClick}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition flex flex-col items-center justify-center gap-4"
    >

      <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500">

        {icon}

      </div>

      <h3 className="font-semibold">

        {title}

      </h3>

    </button>

  );
}

/* TIMELINE */

function TimelineItem({
  text,
  time,
}) {

  return (

    <div className="flex items-start gap-4">

      <div className="w-4 h-4 rounded-full bg-cyan-400 mt-2"></div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 w-full">

        <h3 className="font-semibold">

          {text}

        </h3>

        <p className="text-gray-400 mt-2 text-sm">

          {time || "N/A"}

        </p>

      </div>

    </div>

  );
}