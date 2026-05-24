import React from "react";

import GlobalLayout from "../../components/GlobalLayout";

import {
  Palette,
  MonitorSmartphone,
  Sparkles,
  CheckCircle2,
  LayoutDashboard,
  ArrowRight,
  PenTool,
  
  Eye,
 
  ShieldCheck,
} from "lucide-react";

export default function UIUXDesign() {

  const features = [

    "Modern UI Design",
    "Responsive Layouts",
    "User Experience Research",
    "Interactive Prototypes",
    "Figma Design Systems",
    "Mobile First Design",
    "Dark Mode Interfaces",
    "Creative Animations",

  ];

  const services = [

    {
      title: "Responsive UI",
      desc: "Modern responsive enterprise interface systems.",
      icon: <MonitorSmartphone size={32} />,
    },

    {
      title: "Design Systems",
      desc: "Scalable reusable design component libraries.",
      icon: <LayoutDashboard size={32} />,
    },

    {
      title: "Creative Interfaces",
      desc: "Premium enterprise user experiences and visuals.",
      icon: <Sparkles size={32} />,
    },

    {
      title: "UX Research",
      desc: "Advanced user behavior and interaction research.",
      icon: <Eye size={32} />,
    },

  ];

  const process = [

    {
      title: "Research",
      desc: "Understanding user behavior and business goals.",
    },

    {
      title: "Wireframing",
      desc: "Creating scalable design structure and flows.",
    },

    {
      title: "UI Design",
      desc: "Building modern premium user interfaces.",
    },

    {
      title: "Testing",
      desc: "Optimizing user experience and accessibility.",
    },

  ];

  const stats = [

    {
      number: "350+",
      title: "Design Projects",
    },

    {
      number: "99%",
      title: "Client Satisfaction",
    },

    {
      number: "24/7",
      title: "Design Support",
    },

    {
      number: "150+",
      title: "Enterprise Clients",
    },

  ];

  return (

    <GlobalLayout>

      <div className="min-h-screen text-gray-900 dark:text-white overflow-hidden">

        {/* HERO SECTION */}

        <section className="relative py-28 px-6 overflow-hidden">

          {/* BACKGROUND EFFECTS */}

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/20 blur-[160px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[160px] rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 mb-8">

                <Palette size={20} />

                Premium UI/UX Solutions

              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">

                UI/UX

                <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
                  {" "}Design
                </span>

              </h1>

              <p className="dark:text-gray-300 text-gray-700 text-xl leading-10 max-w-2xl">

                We create modern user experiences with premium interfaces,
                scalable design systems, responsive layouts, and
                enterprise-grade UX engineering.

              </p>

              <div className="flex flex-wrap gap-5 mt-12">

                <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold hover:scale-105 transition-all duration-300 shadow-2xl shadow-pink-500/20">

                  Start Designing

                </button>

                <button className="px-10 py-5 rounded-2xl border border-pink-500/20 hover:bg-pink-500/10 transition-all duration-300">

                  Explore Services

                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div className="bg-[#111c38] rounded-[40px] border border-pink-500/20 p-10">

              <div className="grid grid-cols-2 gap-6">

                {services.map((service, index) => (

                  <FeatureCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    desc={service.desc}
                  />

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* STATS */}

        <section className="px-6 pb-24">

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {stats.map((item, index) => (

              <div
                key={index}
                className="bg-[#111c38] text-white rounded-3xl p-10 border border-pink-500/10 text-center"
              >

                <h2 className="text-5xl font-black bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text mb-4">

                  {item.number}

                </h2>

                <p className="text-gray-300 text-lg">

                  {item.title}

                </p>

              </div>

            ))}

          </div>

        </section>

        {/* FEATURES */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">

              <h2 className="text-5xl font-black mb-6">

                Design Features

              </h2>

              <p className="dark:text-gray-400 text-gray-600 text-lg max-w-3xl mx-auto leading-8">

                Enterprise-grade UI/UX systems engineered
                for scalability, accessibility, creativity,
                and exceptional user experiences.

              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="
                    bg-[#111c38]
                    border
                    border-pink-500/10
                    rounded-3xl
                    p-8
                    hover:border-pink-400/40
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    text-white
                  "
                >

                  <CheckCircle2
                    className="text-pink-400 mb-5"
                    size={35}
                  />

                  <h3 className="text-2xl font-bold leading-10">

                    {item}

                  </h3>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* PROCESS */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="text-5xl font-black mb-6">

                Design Process

              </h2>

              <p className="dark:text-gray-400 text-gray-600 text-lg">

                Modern workflow for enterprise UX engineering.

              </p>

            </div>

            <div className="grid md:grid-cols-4 gap-8">

              {process.map((item, index) => (

                <div
                  key={index}
                  className="bg-[#111c38] text-white rounded-3xl p-10 border border-pink-500/10"
                >

                  <div className="text-5xl font-black text-pink-400 mb-6">

                    0{index + 1}

                  </div>

                  <h3 className="text-3xl font-bold mb-5">

                    {item.title}

                  </h3>

                  <p className="text-gray-300 leading-8">

                    {item.desc}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* WHY CHOOSE US */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="text-5xl font-black mb-6">

                Why Choose Enkonix Design

              </h2>

              <p className="dark:text-gray-400 text-gray-600 text-lg max-w-3xl mx-auto leading-8">

                Enterprise UI/UX systems designed for scalability,
                premium experiences, and modern digital platforms.

              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-10">

              <div className="bg-[#111c38] rounded-3xl p-10 border border-pink-500/10 text-white">

                <PenTool
                  className="text-pink-400 mb-6"
                  size={35}
                />

                <h3 className="text-3xl font-bold mb-5">

                  Enterprise Design Systems

                </h3>

                <p className="text-gray-300 leading-8 text-lg">

                  Scalable design architecture with reusable
                  components, modern workflows, and enterprise UX standards.

                </p>

              </div>

              <div className="bg-[#111c38] rounded-3xl p-10 border border-pink-500/10 text-white">

                <ShieldCheck
                  className="text-pink-400 mb-6"
                  size={35}
                />

                <h3 className="text-3xl font-bold mb-5">

                  Accessibility & Performance

                </h3>

                <p className="text-gray-300 leading-8 text-lg">

                  Optimized interfaces engineered for accessibility,
                  responsiveness, user engagement, and enterprise usability.

                </p>

              </div>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="px-6 pb-32">

          <div className="max-w-7xl mx-auto rounded-[40px] p-16 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 text-center relative overflow-hidden">

            <div className="absolute inset-0 bg-pink-500/5 blur-3xl"></div>

            <div className="relative z-10">

              <h2 className="text-5xl font-black mb-8">

                Build Premium User Experiences

              </h2>

              <p className="dark:text-gray-300 text-gray-700 text-xl leading-9 max-w-3xl mx-auto mb-12">

                Create scalable enterprise interfaces with modern UI systems,
                responsive layouts, design architecture,
                and exceptional digital experiences.

              </p>

              <button className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-pink-500/20">

                Start Your Design

                <ArrowRight size={22} />

              </button>

            </div>

          </div>

        </section>

      </div>

    </GlobalLayout>

  );

}

function FeatureCard({
  icon,
  title,
  desc,
}) {

  return (

    <div className="bg-[#0f172a] rounded-3xl p-8 text-center border border-white/10 hover:border-pink-400/40 transition-all duration-500 text-white">

      <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">

        {icon}

      </div>

      <h3 className="text-2xl font-bold mb-4">

        {title}

      </h3>

      <p className="text-gray-300 leading-7">

        {desc}

      </p>

    </div>

  );

}