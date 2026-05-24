import React from "react";

const services = [
  "Web Development",
  "App Development",
  "AI Solutions",
  "Cloud Services",
  "UI/UX Design",
  "Digital Marketing",
  "Cyber Security",
];

export default function ServiceGrid() {

  return (

    <section className="max-w-7xl mx-auto px-8 py-24">

      <div className="text-center">

        <h1 className="text-6xl font-black">
          Services
        </h1>

        <p className="text-gray-400 mt-6 text-xl">
          Enterprise-grade digital solutions powered by AI.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

        {services.map((service, index) => (

          <div
            key={index}
            className="group bg-[#0f172a] border border-white/10 rounded-3xl p-10 hover:border-cyan-400 transition-all hover:-translate-y-2"
          >

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 mb-8" />

            <h2 className="text-3xl font-bold">
              {service}
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              High-performance scalable architecture and
              modern premium UI experiences.
            </p>

            <button className="mt-10 text-cyan-400 font-bold">
              Learn More →
            </button>

          </div>

        ))}

      </div>

    </section>

  );

}