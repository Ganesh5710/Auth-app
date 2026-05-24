import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/* CONTEXT */

import {
  LanguageProvider,
  useLanguage,
} from "./context/LanguageContext";

import {
  ThemeProvider,
} from "./context/ThemeContext";

/* MAIN PAGES */

import Home from "./pages/Home";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

/* AUTH */

import Login from "./pages/Login";

/* DASHBOARDS */

import AdminDashboard from "./pages/AdminDashboard";
import UserHome from "./pages/UserHome";

/* SERVICES */

import WebDevelopment from "./pages/services/WebDevelopment";
import AppDevelopment from "./pages/services/AppDevelopment";
import AISolutions from "./pages/services/AISolutions";
import CloudServices from "./pages/services/CloudServices";
import UIUXDesign from "./pages/services/UIUXDesign";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import CyberSecurity from "./pages/services/CyberSecurity";

/* =========================
   ADMIN PROTECTION
========================= */

function AdminProtected({ children }) {
  const admin =
    localStorage.getItem("isAdmin");

  return admin === "true"
    ? children
    : <Navigate to="/login" />;
}

/* =========================
   USER PROTECTION
========================= */

function UserProtected({ children }) {
  const user =
    localStorage.getItem("isUser");

  return user === "true"
    ? children
    : <Navigate to="/login" />;
}

/* =========================
   APP CONTENT
========================= */

function AppContent() {
  const { isRTL } = useLanguage();

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={`
        min-h-screen
        transition-all
        duration-300
        bg-white
        text-black
        dark:bg-[#020817]
        dark:text-white
      `}
    >
      <BrowserRouter>

        <Routes>

          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/home1"
            element={<Home1 />}
          />

          <Route
            path="/home2"
            element={<Home2 />}
          />

          {/* ABOUT */}

          <Route
            path="/about"
            element={<About />}
          />

          {/* BLOG */}

          <Route
            path="/blog"
            element={<Blog />}
          />

          {/* CONTACT */}

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* LOGIN */}

          <Route
            path="/login"
            element={<Login />}
          />

          {/* SERVICES */}

          <Route
            path="/services/web-development"
            element={<WebDevelopment />}
          />

          <Route
            path="/services/app-development"
            element={<AppDevelopment />}
          />

          <Route
            path="/services/ai-solutions"
            element={<AISolutions />}
          />

          <Route
            path="/services/cloud-services"
            element={<CloudServices />}
          />

          <Route
            path="/services/uiux-design"
            element={<UIUXDesign />}
          />

          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketing />}
          />

          <Route
            path="/services/cyber-security"
            element={<CyberSecurity />}
          />

          {/* ADMIN */}

          <Route
            path="/admin"
            element={
              <AdminProtected>
                <AdminDashboard />
              </AdminProtected>
            }
          />

          {/* USER */}

          <Route
            path="/user"
            element={
              <UserProtected>
                <UserHome />
              </UserProtected>
            }
          />

          {/* 404 */}

          <Route
            path="*"
            element={
              <div className="
                min-h-screen
                flex
                items-center
                justify-center
                bg-[#071028]
                text-white
                text-5xl
                font-bold
              ">
                404 - Page Not Found
              </div>
            }
          />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

/* =========================
   MAIN APP
========================= */

function App() {
  return (
    <ThemeProvider>

      <LanguageProvider>

        <AppContent />

      </LanguageProvider>

    </ThemeProvider>
  );
}

export default App;