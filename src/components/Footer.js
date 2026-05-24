import React from "react";

export default function Footer() {

  return (

    <footer className="
      bg-[#050b1a]
      border-t
      border-cyan-500/20
      text-white
      pt-16
      pb-8
      mt-0
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-12
      ">

        {/* BRAND */}

        <div>

          <h1 className="
            text-4xl
            font-black
            text-cyan-400
            mb-5
          ">

            ENKONIX

          </h1>

          <p className="
            text-gray-400
            leading-8
            text-lg
          ">

            AI-powered digital transformation platform
            helping businesses scale globally with
            modern web, cloud, and AI solutions.

          </p>

        </div>

        {/* QUICK LINKS */}

        <div>

          <h2 className="
            text-2xl
            font-bold
            mb-6
          ">

            Quick Links

          </h2>

          <div className="
            flex
            flex-col
            gap-4
            text-gray-400
          ">

            <a
              href="/"
              className="hover:text-cyan-400 transition-all"
            >
              Home
            </a>

            <a
              href="/about"
              className="hover:text-cyan-400 transition-all"
            >
              About
            </a>

            <a
              href="/blog"
              className="hover:text-cyan-400 transition-all"
            >
              Blog
            </a>

            <a
              href="/contact"
              className="hover:text-cyan-400 transition-all"
            >
              Contact
            </a>

            <a
              href="/services"
              className="hover:text-cyan-400 transition-all"
            >
              Services
            </a>

          </div>

        </div>

        {/* SERVICES */}

        <div>

          <h2 className="
            text-2xl
            font-bold
            mb-6
          ">

            Services

          </h2>

          <div className="
            flex
            flex-col
            gap-4
            text-gray-400
          ">

            <a
              href="/services/web-development"
              className="hover:text-cyan-400 transition-all"
            >
              Web Development
            </a>

            <a
              href="/services/ai-solutions"
              className="hover:text-cyan-400 transition-all"
            >
              AI Solutions
            </a>

            <a
              href="/services/cloud-services"
              className="hover:text-cyan-400 transition-all"
            >
              Cloud Services
            </a>

            <a
              href="/services/app-development"
              className="hover:text-cyan-400 transition-all"
            >
              App Development
            </a>

            <a
              href="/services/digital-marketing"
              className="hover:text-cyan-400 transition-all"
            >
              Digital Marketing
            </a>

            <a
              href="/services/uiux-design"
              className="hover:text-cyan-400 transition-all"
            >
              UI/UX Design
            </a>

            <a
              href="/services/cyber-security"
              className="hover:text-cyan-400 transition-all"
            >
              Cyber Security
            </a>

          </div>

        </div>

        {/* CONTACT */}

        <div>

          <h2 className="
            text-2xl
            font-bold
            mb-6
          ">

            Contact

          </h2>

          <div className="
            flex
            flex-col
            gap-5
            text-gray-400
            leading-8
          ">

            <p>

              Enkonix Software Services
              <br />

              1st Floor, Novel Office,
              MSR Tech Park,
              Subbaiah Reddy Colony,
              Marathahalli Village,
              Bengaluru,
              Karnataka 560036,
              India

            </p>

            <p>

              support@enkonix.com

            </p>

            <p>

              +91 123654987

            </p>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="
        border-t
        border-gray-800
        mt-14
        pt-6
        text-center
        text-gray-500
        px-4
      ">

        © 2026 Enkonix. All rights reserved.

      </div>

    </footer>

  );

}