import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({
  children,
}) {

  return (

    <div className="min-h-screen bg-gradient-to-r from-[#071028] to-[#0d1b3d] text-white">

      {/* NAVBAR */}

      <Navbar />

      {/* PAGE CONTENT */}

      <main className="pt-32">

        {children}

      </main>

      {/* FOOTER */}

      <Footer />

    </div>

  );

}