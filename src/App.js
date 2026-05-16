import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserHome from "./pages/UserHome";

// ADMIN PROTECTION

function AdminProtected({ children }) {

  const admin =
    localStorage.getItem("isAdmin");

  return admin === "true"
    ? children
    : <Navigate to="/login" />;
}

// USER PROTECTION

function UserProtected({ children }) {

  const user =
    localStorage.getItem("isUser");

  return user === "true"
    ? children
    : <Navigate to="/login" />;
}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        {/* ADMIN ROUTE */}

        <Route
          path="/admin"
          element={
            <AdminProtected>

              <AdminDashboard />

            </AdminProtected>
          }
        />

        {/* USER ROUTE */}

        <Route
          path="/user"
          element={
            <UserProtected>

              <UserHome />

            </UserProtected>
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;