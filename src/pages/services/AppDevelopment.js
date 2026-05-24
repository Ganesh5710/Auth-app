import React from "react";

import GlobalLayout from "../../components/GlobalLayout";

import {
  Smartphone,
  ShieldCheck,
  Cloud,
  Cpu,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Globe,
  Database,
  Workflow,
  BarChart3,
  Layers3,
  PlayCircle,
  Star,
} from "lucide-react";

export default function AppDevelopment() {

  const features = [

    "Cross Platform Mobile Apps",
    "Android & iOS Development",
    "AI Powered Applications",
    "Cloud Integrated Backend",
    "Real-time Notifications",
    "Secure Authentication System",
    "Fast Performance Optimization",
    "Modern UI/UX Design",

  ];

  const technologies = [

    "React Native",
    "Flutter",
    "Firebase",
    "Node.js",
    "MongoDB",
    "AWS Cloud",
    "AI Integration",
    "REST APIs",

  ];

  const stats = [

    {
      number: "250+",
      title: "Mobile Apps",
    },

    {
      number: "99%",
      title: "Client Satisfaction",
    },

    {
      number: "24/7",
      title: "Support",
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

        <section className="relative py-32 px-6 overflow-hidden">

          {/* GLOW EFFECTS */}

          <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[160px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/20 blur-[160px] rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT SIDE */}

            <div>

              

              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">

                Next Gen

                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                  {" "}App Development
                </span>

              </h1>

              <p className="dark:text-gray-300 text-gray-700 text-xl leading-10 max-w-2xl">

                We build ultra-modern Android, iOS, and cross-platform
                applications powered by AI, cloud technologies,
                 UI/UX systems, and enterprise infrastructure.

              </p>

              {/* BUTTONS */}

              <div className="flex flex-wrap gap-5 mt-12">

                <button
                  className="
                    px-10
                    py-5
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-500
                    text-white
                    font-bold
                    text-lg
                    hover:scale-105
                    transition-all
                    duration-300
                    shadow-2xl
                    shadow-cyan-500/20
                  "
                >

                  Get Started

                </button>

                <button
                  className="
                    px-10
                    py-5
                    rounded-2xl
                    border
                    border-cyan-500/20
                    hover:bg-cyan-500/10
                    transition-all
                    duration-300
                    text-lg
                  "
                >

                  View Portfolio

                </button>

              </div>

              {/* STATS */}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

                {stats.map((item, index) => (

                  <div key={index}>

                    <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">

                      {item.number}

                    </h2>

                    <p className="dark:text-gray-400 text-gray-600 mt-2">

                      {item.title}

                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="relative">

              <div
                className="
                  bg-[#111c38]
                  border
                  border-cyan-500/20
                  rounded-[40px]
                  p-10
                  shadow-2xl
                  backdrop-blur-xl
                "
              >

                <div className="grid grid-cols-2 gap-6">

                  <FeatureCard
                    icon={<Cpu size={35} />}
                    title="AI Integration"
                  />

                  <FeatureCard
                    icon={<Cloud size={35} />}
                    title="Cloud Ready"
                  />

                  <FeatureCard
                    icon={<ShieldCheck size={35} />}
                    title="Secure Apps"
                  />

                  <FeatureCard
                    icon={<Rocket size={35} />}
                    title="Fast Performance"
                  />

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* FEATURES */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="text-5xl font-black mb-6">

                Why Choose Our Apps?

              </h2>

              <p className="dark:text-gray-400 text-gray-600 text-lg max-w-3xl mx-auto leading-8">

                Enterprise-grade mobile applications designed for
                scalability, security, automation, and exceptional
                user experience across all platforms.

              </p>

            </div>

            {/* FEATURE GRID */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              {features.map((feature, index) => (

                <div
                  key={index}
                  className="
                    bg-[#111c38]
                    border
                    border-cyan-500/10
                    rounded-3xl
                    p-8
                    hover:border-cyan-400/40
                    hover:-translate-y-2
                    transition-all
                    duration-500
                    shadow-xl
                    text-white
                  "
                >

                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-500
                      flex
                      items-center
                      justify-center
                      mb-6
                    "
                  >

                    <CheckCircle2 size={30} />

                  </div>

                  <h3 className="text-2xl font-bold leading-10">

                    {feature}

                  </h3>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* TECHNOLOGIES */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="text-5xl font-black mb-6">

                Technologies We Use

              </h2>

              <p className="dark:text-gray-400 text-gray-600 text-lg">

                Modern technologies powering enterprise mobile systems.

              </p>

            </div>

            <div className="grid md:grid-cols-4 gap-8">

              {technologies.map((tech, index) => (

                <div
                  key={index}
                  className="
                    bg-[#111c38]
                    text-white
                    rounded-3xl
                    p-10
                    border
                    border-cyan-500/10
                    hover:border-cyan-400/40
                    transition-all
                    duration-500
                    text-center
                  "
                >

                  <h3 className="text-2xl font-bold">

                    {tech}

                  </h3>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* PROCESS */}

        <section className="px-6 pb-32">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <h2 className="text-5xl font-black mb-6">

                Development Process

              </h2>

              <p className="dark:text-gray-400 text-gray-600 text-lg">

                Modern agile workflow for scalable applications.

              </p>

            </div>

            <div className="grid md:grid-cols-4 gap-10">

              <ProcessCard
                number="01"
                title="Planning"
                desc="Requirement gathering and business analysis."
              />

              <ProcessCard
                number="02"
                title="Design"
                desc="Premium UI/UX design and wireframing."
              />

              <ProcessCard
                number="03"
                title="Development"
                desc="Agile coding with modern technologies."
              />

              <ProcessCard
                number="04"
                title="Deployment"
                desc="Testing, launch, and support systems."
              />

            </div>

          </div>

        </section>

      </div>

    </GlobalLayout>

  );

}

/* FEATURE CARD */

function FeatureCard({
  icon,
  title,
}) {

  return (

    <div
      className="
        bg-[#0f172a]
        border
        border-white/10
        rounded-3xl
        p-8
        hover:border-cyan-400/40
        transition-all
        duration-500
        text-center
        text-white
      "
    >

      <div
        className="
          w-20
          h-20
          rounded-3xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-500
          flex
          items-center
          justify-center
          mx-auto
          mb-6
        "
      >

        {icon}

      </div>

      <h3 className="text-2xl font-bold">

        {title}

      </h3>

    </div>

  );

}

/* PROCESS CARD */

function ProcessCard({
  number,
  title,
  desc,
}) {

  return (

    <div
      className="
        bg-[#111c38]
        border
        border-cyan-500/10
        rounded-3xl
        p-10
        hover:border-cyan-400/30
        hover:-translate-y-2
        transition-all
        duration-500
        text-white
      "
    >

      <div className="text-5xl font-black text-cyan-400 mb-6">

        {number}

      </div>

      <h3 className="text-3xl font-bold mb-5">

        {title}

      </h3>

      <p className="text-gray-400 leading-8 text-lg">

        {desc}

      </p>

    </div>

  );

}