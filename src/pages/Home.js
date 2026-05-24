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
/* SERVICES */

<section
  id="services"
  className="
    min-h-screen
    px-6
    py-24
    bg-[#020617]
    text-white
  "
>

  <h2
    className="
      text-5xl
      font-bold
      text-center
      mb-16
    "
  >

    Our Services

  </h2>

  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-3
      gap-10
      max-w-7xl
      mx-auto
    "
  >

    <div
      className="
        bg-[#0F172A]
        border
        border-white/10
        rounded-3xl
        p-10
        hover:scale-105
        transition
      "
    >

      <h3
        className="
          text-3xl
          font-bold
          mb-5
        "
      >

        Web Development

      </h3>

      <p
        className="
          text-gray-400
          leading-8
        "
      >

        Modern responsive websites
        and scalable web applications.

      </p>

    </div>

    <div
      className="
        bg-[#0F172A]
        border
        border-white/10
        rounded-3xl
        p-10
        hover:scale-105
        transition
      "
    >

      <h3
        className="
          text-3xl
          font-bold
          mb-5
        "
      >

        UI / UX Design

      </h3>

      <p
        className="
          text-gray-400
          leading-8
        "
      >

        Beautiful modern user
        interfaces with smooth
        user experience.

      </p>

    </div>

    <div
      className="
        bg-[#0F172A]
        border
        border-white/10
        rounded-3xl
        p-10
        hover:scale-105
        transition
      "
    >

      <h3
        className="
          text-3xl
          font-bold
          mb-5
        "
      >

        AI Solutions

      </h3>

      <p
        className="
          text-gray-400
          leading-8
        "
      >

        AI-powered automation,
        analytics and smart systems.

      </p>

    </div>

  </div>

</section>

{/* ABOUT */}

<section
  id="about"
  className="
    min-h-screen
    px-6
    py-24
    bg-[#030B1A]
    text-white
  "
>

  <div
    className="
      max-w-6xl
      mx-auto
      text-center
    "
  >

    <h2
      className="
        text-5xl
        font-bold
        mb-12
      "
    >

      About Us

    </h2>

    <p
      className="
        text-2xl
        text-gray-400
        leading-loose
      "
    >

      Enkonix is a modern digital
      solutions company focused on
      building scalable platforms,
      modern dashboards, AI-powered
      applications and enterprise
      software solutions.

    </p>

  </div>

</section>

{/* CONTACT */}

<section
  id="contact"
  className="
    min-h-screen
    px-6
    py-24
    bg-[#020617]
    text-white
  "
>

  <div
    className="
      max-w-4xl
      mx-auto
    "
  >

    <h2
      className="
        text-5xl
        font-bold
        text-center
        mb-16
      "
    >

      Contact Us

    </h2>

    <form
      className="
        space-y-8
      "
    >

      <input
        type="text"
        placeholder="Your Name"
        className="
          w-full
          bg-[#0F172A]
          border
          border-white/10
          rounded-2xl
          p-5
          outline-none
        "
      />

      <input
        type="email"
        placeholder="Your Email"
        className="
          w-full
          bg-[#0F172A]
          border
          border-white/10
          rounded-2xl
          p-5
          outline-none
        "
      />

      <textarea
        rows="6"
        placeholder="Your Message"
        className="
          w-full
          bg-[#0F172A]
          border
          border-white/10
          rounded-2xl
          p-5
          outline-none
        "
      />

      <button
        className="
          w-full
          bg-gradient-to-r
          from-cyan-500
          to-indigo-500
          py-5
          rounded-2xl
          text-xl
          font-bold
        "
      >

        Send Message

      </button>

    </form>

  </div>

</section>