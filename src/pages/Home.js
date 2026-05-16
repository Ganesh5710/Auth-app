import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#050816] text-white">

      {/* NAVBAR */}

      <nav className="flex justify-between items-center px-10 py-6 border-b border-white/10">

        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
          Enkonix
        </h1>

        <div className="flex gap-8 text-lg font-medium">

          <a
            href="/"
            className="hover:text-cyan-400 transition duration-300"
          >
            Home
          </a>

          <a
            href="/"
            className="hover:text-cyan-400 transition duration-300"
          >
            Services
          </a>

          <a
            href="/"
            className="hover:text-cyan-400 transition duration-300"
          >
            About
          </a>

          <a
            href="/"
            className="hover:text-cyan-400 transition duration-300"
          >
            Contact
          </a>

        </div>

      </nav>

      {/* HERO SECTION */}

      <section className="flex flex-col items-center justify-center text-center h-[85vh] px-6">

        <div className="max-w-5xl">

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">

            Build Modern

            <span className="block mt-3 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Digital Experiences 

            </span>

          </h1>

          <p className="mt-8 text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">

            
          </p>

          {/* BUTTONS */}

          <div className="mt-12 flex justify-center gap-6">

            <button
  onClick={() => navigate("/login")}
  className="px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold text-lg hover:scale-105 transition"
>
  Get Started
</button>
          </div>

        </div>

      </section>

    </div>
  );
}