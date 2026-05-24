import React from "react";
import { Link } from "react-router-dom";

import GlobalLayout from "../components/GlobalLayout";

import {
  Globe,
  Smartphone,
  ShieldCheck,
  Brain,
  Cloud,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Star,
  Cpu,
  Database,
  Workflow,
  Rocket,
  Layers3,
} from "lucide-react";

export default function Home1() {

  const services = [

    {
      icon: <Globe size={38} className="text-cyan-400" />,
      title: "Web Development",
      desc: "Modern scalable websites and enterprise web applications.",
    },

    {
      icon: <Smartphone size={38} className="text-cyan-400" />,
      title: "Mobile Apps",
      desc: "Android & iOS applications with smooth UX.",
    },

    {
      icon: <Brain size={38} className="text-cyan-400" />,
      title: "AI Solutions",
      desc: "AI automation, analytics and enterprise workflows.",
    },

    {
      icon: <Cloud size={38} className="text-cyan-400" />,
      title: "Cloud Services",
      desc: "Secure cloud deployment and scalable infrastructure.",
    },

    {
      icon: <ShieldCheck size={38} className="text-cyan-400" />,
      title: "Cyber Security",
      desc: "Advanced threat monitoring and security protection.",
    },

    {
      icon: <BarChart3 size={38} className="text-cyan-400" />,
      title: "Digital Marketing",
      desc: "SEO, branding and high-converting campaigns.",
    },

  ];

  const stats = [

    {
      value: "250+",
      label: "Projects Completed",
    },

    {
      value: "120+",
      label: "Happy Clients",
    },

    {
      value: "24/7",
      label: "Support Available",
    },

    {
      value: "99%",
      label: "Client Satisfaction",
    },

  ];

  const technologies = [

    "React.js",
    "Node.js",
    "MongoDB",
    "AWS",
    "Python",
    "Flutter",
    "Docker",
    "AI/ML",

  ];

  const process = [

    {
      number: "01",
      title: "Research",
      desc: "Understanding business requirements and goals.",
    },

    {
      number: "02",
      title: "Planning",
      desc: "Creating architecture and scalable workflows.",
    },

    {
      number: "03",
      title: "Development",
      desc: "Building modern enterprise digital products.",
    },

    {
      number: "04",
      title: "Deployment",
      desc: "Launching, monitoring and optimization.",
    },

  ];

  return (

    <GlobalLayout>

      <div className="min-h-screen text-gray-900 dark:text-white overflow-hidden">

        {/* HERO */}

        <section className="relative pt-40 pb-28 px-6 lg:px-20 overflow-hidden">

          {/* BACKGROUND EFFECTS */}

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-6 py-3 rounded-full mb-8 backdrop-blur-lg">

                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>

                AI Powered Digital Transformation

              </div>

              <h1 className="text-6xl lg:text-8xl font-black leading-tight mb-8">

                Build

                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                  Future Ready
                </span>

                Digital Solutions

              </h1>

              <p className="dark:text-gray-300 text-gray-700 text-xl leading-10 max-w-2xl mb-10">

                Enkonix delivers enterprise-grade AI systems,
                cloud platforms, cybersecurity, web development,
                mobile applications, and scalable digital products.

              </p>

              <div className="flex flex-wrap gap-5 mb-14">

                <Link
                  to="/contact"
                  className="
                    px-8
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-500
                    text-white
                    font-bold
                    hover:scale-105
                    transition-all
                    duration-300
                    flex
                    items-center
                    gap-3
                    shadow-2xl
                    shadow-cyan-500/20
                  "
                >

                  Get Started

                  <ArrowRight size={20} />

                </Link>

                <Link
                  to="/services/web-development"
                  className="
                    px-8
                    py-4
                    rounded-2xl
                    border
                    border-cyan-500/20
                    hover:bg-cyan-500/10
                    transition-all
                    duration-300
                    font-semibold
                  "
                >

                  Explore Services

                </Link>

              </div>

              {/* STATS */}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                {stats.map((item, index) => (

                  <div
                    key={index}
                    className="
                      bg-[#111c38]
                      border
                      border-cyan-500/10
                      rounded-3xl
                      p-5
                      text-white
                      hover:border-cyan-400/40
                      transition-all
                      duration-500
                    "
                  >

                    <h2 className="text-3xl font-black text-cyan-400 mb-2">

                      {item.value}

                    </h2>

                    <p className="text-gray-400 text-sm">

                      {item.label}

                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full"></div>

              <div className="relative bg-[#111c38] border border-cyan-500/20 rounded-[40px] p-8 shadow-2xl">

                <div className="grid grid-cols-2 gap-6">

                  {services.map((service, index) => (

                    <div
                      key={index}
                      className="
                        group
                        bg-[#0f172a]
                        border
                        border-white/10
                        rounded-3xl
                        p-8
                        hover:border-cyan-400/40
                        hover:-translate-y-2
                        transition-all
                        duration-500
                        text-white
                      "
                    >

                      <div className="mb-6 group-hover:scale-110 transition-transform duration-500">

                        {service.icon}

                      </div>

                      <h3 className="text-2xl font-bold mb-3">

                        {service.title}

                      </h3>

                      <p className="text-gray-400 leading-7">

                        {service.desc}

                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* WHY CHOOSE */}

        <section className="px-6 lg:px-20 py-28">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black mb-6">

              Why Choose

              <span className="text-cyan-400">
                {" "}Enkonix
              </span>

            </h2>

            <p className="dark:text-gray-400 text-gray-600 max-w-3xl mx-auto text-lg leading-8">

              Enterprise-grade digital products engineered
              for scalability, automation, performance,
              and modern user experiences.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Modern UI/UX Design",
              "Fast Scalable Systems",
              "AI Powered Automation",
              "Enterprise Security",
              "24/7 Technical Support",
              "Cloud Infrastructure",
              "SEO Optimized Platforms",
              "Modern Tech Stack",
            ].map((item, index) => (

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
                  text-white
                "
              >

                <CheckCircle2
                  className="text-cyan-400 mb-5"
                  size={34}
                />

                <h3 className="text-xl font-bold leading-9">

                  {item}

                </h3>

              </div>

            ))}

          </div>

        </section>

        {/* TECHNOLOGIES */}

        <section className="px-6 lg:px-20 pb-28">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black mb-6">

              Technologies We Use

            </h2>

            <p className="dark:text-gray-400 text-gray-600 text-lg">

              Modern technologies powering enterprise applications.

            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {technologies.map((tech, index) => (

              <div
                key={index}
                className="
                  bg-[#111c38]
                  border
                  border-cyan-500/10
                  rounded-3xl
                  p-8
                  text-center
                  hover:border-cyan-400/40
                  transition-all
                  duration-500
                  text-white
                "
              >

                <h3 className="text-2xl font-bold">

                  {tech}

                </h3>

              </div>

            ))}

          </div>

        </section>

        {/* PROCESS */}

        <section className="px-6 lg:px-20 pb-32">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black mb-6">

              Our Process

            </h2>

            <p className="dark:text-gray-400 text-gray-600 text-lg">

              Enterprise workflow for digital transformation.

            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-10">

            {process.map((item, index) => (

              <div
                key={index}
                className="
                  bg-[#111c38]
                  border
                  border-cyan-500/10
                  rounded-3xl
                  p-10
                  hover:border-cyan-400/40
                  transition-all
                  duration-500
                  text-white
                "
              >

                <div className="text-5xl font-black text-cyan-400 mb-6">

                  {item.number}

                </div>

                <h3 className="text-3xl font-bold mb-5">

                  {item.title}

                </h3>

                <p className="text-gray-400 leading-8 text-lg">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

        </section>

        {/* CTA */}

        <section className="px-6 lg:px-20 pb-32">

          <div className="
            rounded-[40px]
            bg-gradient-to-r
            from-cyan-500/10
            to-blue-500/10
            border
            border-cyan-500/20
            p-16
            text-center
            relative
            overflow-hidden
          ">

            <div className="absolute inset-0 bg-cyan-500/5 blur-3xl"></div>

            <div className="relative z-10">

              <h2 className="text-5xl font-black mb-8">

                Ready To Build Your Next Project?

              </h2>

              <p className="dark:text-gray-300 text-gray-700 text-xl max-w-3xl mx-auto leading-9 mb-12">

                Transform your business using AI,
                enterprise cloud infrastructure,
                modern applications, and scalable
                digital solutions.

              </p>

              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  gap-3
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
                "
              >

                Contact Us

                <ArrowRight size={22} />

              </Link>

            </div>

          </div>

        </section>

      </div>

    </GlobalLayout>

  );

}