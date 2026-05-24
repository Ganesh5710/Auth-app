import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  useTheme,
} from "../context/ThemeContext";

export default function GlobalLayout({ children }) {

  const { theme } = useTheme();

  const darkMode =
    theme === "dark";

  return (

    <div
      className={`
        min-h-screen
        w-full
        overflow-x-hidden
        transition-all
        duration-500

        ${
          darkMode
            ? "bg-[#020617] text-white"
            : "bg-gray-100 text-gray-900"
        }
      `}
    >

      <Navbar />

      <main
        className="
          min-h-screen
          w-full
          overflow-x-hidden
          transition-all
          duration-500
        "
      >

        {children}

      </main>

      <Footer />

    </div>

  );

}